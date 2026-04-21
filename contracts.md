# Portfolio API Contracts

## Scope
Backend for Chaitash Patel's portfolio — primary purpose is to persist **contact-form submissions**.
All project / skill / experience / achievement data remains driven by `frontend/src/mock.js` (not DB-backed for MVP).

## Base URL
All endpoints are prefixed with `/api` (ingress routes `/api/*` → FastAPI on `:8001`).

---

## Endpoints

### 1) POST `/api/contact`
Create a new contact submission.

**Request body**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Project enquiry",
  "message": "Hi Chaitash, I have a project..."
}
```

**Validation**
- `name`: required, 1–100 chars
- `email`: required, must be valid email (pydantic EmailStr)
- `subject`: optional, ≤200 chars
- `message`: required, 1–4000 chars

**Response 200**
```json
{
  "id": "uuid4-string",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Project enquiry",
  "message": "...",
  "created_at": "2025-07-01T12:34:56.000Z"
}
```

**Errors** — 422 for validation errors (FastAPI default).

### 2) GET `/api/contact`
List contact submissions (most recent first). Used for admin/debug.

**Response 200** → `ContactMessage[]`

### 3) GET `/api/health`
Simple liveness check — returns `{ "status": "ok" }`.

---

## MongoDB
- Database: env `DB_NAME`
- Collection: `contact_messages`
- Document shape mirrors `ContactMessage` pydantic model; `id` is a uuid4 string (not Mongo ObjectId).

## Frontend integration
- `Contact.jsx` currently has a mock `handleSubmit` with `setTimeout`. Replace with a real `axios.post(`${API}/contact`, form)` call.
- On 200 → show success toast + reset form.
- On error (network or 4xx/5xx) → show destructive toast with server message or generic fallback.
- `personalInfo.resumeUrl` already points to the hosted PDF — no backend route needed for resume download.

## Not included in backend (MVP)
- Auth / admin UI
- Email forwarding (can be added later via SMTP / Resend)
- Project CRUD (mock.js is source of truth for now)
