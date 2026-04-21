from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, constr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Chaitash Portfolio API")
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)


# -------- Models --------
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessageCreate(BaseModel):
    name: constr(strip_whitespace=True, min_length=1, max_length=100)
    email: EmailStr
    subject: Optional[constr(strip_whitespace=True, max_length=200)] = ""
    message: constr(strip_whitespace=True, min_length=1, max_length=4000)


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = ""
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# -------- Routes --------
@api_router.get("/")
async def root():
    return {"message": "Chaitash Portfolio API — online"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    status_obj = StatusCheck(**payload.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**row) for row in rows]


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(payload: ContactMessageCreate):
    try:
        msg = ContactMessage(
            name=payload.name,
            email=payload.email,
            subject=payload.subject or "",
            message=payload.message,
        )
        doc = msg.dict()
        # Ensure datetime is JSON-serialisable when read back
        await db.contact_messages.insert_one(doc)
        logger.info("Stored contact message from %s <%s>", msg.name, msg.email)
        return msg
    except Exception as exc:  # noqa: BLE001
        logger.exception("Failed to persist contact message: %s", exc)
        raise HTTPException(status_code=500, detail="Could not save your message, please try again.")


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    rows = await db.contact_messages.find().sort("created_at", -1).to_list(500)
    return [ContactMessage(**row) for row in rows]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
