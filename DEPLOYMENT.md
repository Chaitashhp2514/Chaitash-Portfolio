# Chaitash Patel — Portfolio Website

A premium, production-ready portfolio for a Computer Engineer built with **React + FastAPI + MongoDB**.
Theme: midnight-violet with duotone hero portrait, hand-drawn SVG doodles, and a fully-wired contact form.

---

## Tech Stack

| Layer      | Tech                                               |
|------------|----------------------------------------------------|
| Frontend   | React 19, React Router, Tailwind CSS, shadcn/ui    |
| Icons      | lucide-react                                       |
| Backend    | FastAPI, Motor (async MongoDB driver), Pydantic v2 |
| Database   | MongoDB                                            |
| Fonts      | Inter, Space Grotesk, JetBrains Mono, Caveat       |

---

## Folder Structure

```
app/
├── backend/
│   ├── server.py            # FastAPI app (contact form + status + health)
│   ├── requirements.txt
│   └── .env                 # MONGO_URL, DB_NAME
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/      # Hero, About, Skills, Projects, ...
│   │   │   └── ui/          # shadcn components
│   │   ├── hooks/
│   │   ├── mock.js          # all portfolio content (easy to edit)
│   │   ├── App.js, App.css
│   │   └── index.css        # theme tokens + animations
│   ├── tailwind.config.js
│   ├── package.json
│   └── .env                 # REACT_APP_BACKEND_URL
├── contracts.md             # API contracts
├── DEPLOYMENT.md            # This hosting guide
└── README.md
```

---

## Local Setup (dev)

### Prerequisites
- Node.js 18+ and **Yarn** (NOT npm)
- Python 3.10+
- MongoDB running locally (or Atlas URL)

### 1. Backend
```bash
cd backend
pip install -r requirements.txt
# Create .env:
#   MONGO_URL=mongodb://localhost:27017
#   DB_NAME=portfolio
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### 2. Frontend
```bash
cd frontend
yarn install
# Create .env:
#   REACT_APP_BACKEND_URL=http://localhost:8001
yarn start
```

Visit `http://localhost:3000`.

---

## Editing Your Content

All portfolio content lives in **ONE file**: `frontend/src/mock.js`.
Edit `personalInfo`, `skills`, `projects`, `experiences`, `education`, `certifications`, `achievements`, `navLinks`. The site updates immediately.

To change the **resume PDF**, replace `personalInfo.resumeUrl` with your new URL (you can host the PDF anywhere — GitHub raw, Google Drive direct link, S3, etc).

To change the **photo**, replace `personalInfo.photoUrl`.

---

## Deploying for FREE — Step-by-Step

You'll use three free services. Total setup time: ~15 minutes.

### Part A — MongoDB Atlas (Database)
1. Go to https://www.mongodb.com/cloud/atlas → **Sign up**.
2. Click **Build a Database → M0 FREE → AWS, nearest region → Create**.
3. **Database Access** → Add New Database User → username + strong password. **Save these**.
4. **Network Access** → Add IP Address → **Allow Access From Anywhere** (`0.0.0.0/0`).
5. **Database → Connect → Drivers → Python** → copy the URI.
   It looks like: `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
6. Replace `<user>` and `<password>` inline. **Keep this URI safe.**

---

### Part B — Push Code to GitHub
```bash
cd app
git init
git add .
git commit -m "Initial portfolio"
# Create an empty repo at https://github.com/new, then:
git branch -M main
git remote add origin https://github.com/<your-username>/chaitash-portfolio.git
git push -u origin main
```

Make sure `.env` files are in `.gitignore` (they usually contain secrets).

---

### Part C — Backend on Render (FastAPI)
1. Go to https://render.com → **Sign up with GitHub**.
2. **New → Web Service → Connect** your repo.
3. Configure:
   - **Name:** `chaitash-portfolio-api`
   - **Root Directory:** `backend`
   - **Runtime:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - **Instance Type:** `Free`
4. **Environment Variables**:
   - `MONGO_URL` = your Atlas URI from Part A
   - `DB_NAME` = `portfolio`
5. Click **Create Web Service**. Wait 3–5 min.
6. Note the public URL e.g. `https://chaitash-portfolio-api.onrender.com`.
7. Verify: visit `https://<your-url>/api/health` → should return `{"status":"ok"}`.

> 💡 Free tier sleeps after 15 min of inactivity — first request after sleep takes ~30s to wake.

---

### Part D — Frontend on Vercel
1. Go to https://vercel.com → **Sign up with GitHub**.
2. **Add New → Project → Import** your GitHub repo.
3. Configure:
   - **Framework Preset:** `Create React App`
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build` *(override)*
   - **Output Directory:** `build`
   - **Install Command:** `yarn install`
4. **Environment Variables**:
   - `REACT_APP_BACKEND_URL` = `https://chaitash-portfolio-api.onrender.com` *(no trailing slash!)*
5. Click **Deploy**. Wait ~2 min.
6. Your portfolio is live at e.g. `https://chaitash-portfolio.vercel.app` 🎉

---

### Part E — (Optional) Custom Domain
1. Buy a domain at Namecheap, Porkbun, or Cloudflare (~$10/year).
2. In Vercel → **Project Settings → Domains → Add Domain**.
3. Follow the DNS setup (usually add a `CNAME` or `A` record).
4. HTTPS is auto-provisioned.

---

## Alternative Free Hosts

| Service    | Good for                    | Notes                                |
|------------|-----------------------------|--------------------------------------|
| Netlify    | Frontend (alt to Vercel)    | Same flow — import repo, set env var |
| Railway    | Backend (alt to Render)     | $5 trial credit monthly on free plan |
| Fly.io     | Backend (alt to Render)     | Never sleeps — free up to 3 VMs      |
| Cloudflare Pages | Frontend              | Fastest global CDN                   |
| GitHub Pages | Frontend-only (no backend) | Free, but needs static export        |

---

## Post-Deployment Checklist

- [ ] Visit live URL on desktop + mobile
- [ ] Submit a test message on the Contact form
- [ ] Confirm in MongoDB Atlas → Browse Collections → `contact_messages` that the message appeared
- [ ] Replace placeholder social links (`github`, `linkedin`, `twitter`) in `mock.js`
- [ ] Replace project demo/code links (currently `#`)
- [ ] Replace project thumbnail images with real screenshots
- [ ] Update resume PDF URL when you have a newer version

---

## Maintenance

- **Redeploying after edits** — Push to GitHub; Render + Vercel auto-deploy.
- **Keeping Render awake** — Use https://uptimerobot.com (free) to ping `/api/health` every 5 min.
- **Analytics** — Add Vercel Analytics or Plausible for free.

---

## API Endpoints Reference

| Method | Path            | Purpose                           |
|--------|-----------------|-----------------------------------|
| GET    | `/api/health`   | Liveness check                    |
| POST   | `/api/contact`  | Submit contact-form message       |
| GET    | `/api/contact`  | List messages (admin)             |
| GET    | `/api/`         | Welcome message                   |

Request body for `POST /api/contact`:
```json
{ "name": "...", "email": "...", "subject": "...", "message": "..." }
```

---

## License
Personal portfolio — all rights reserved to Chaitash Patel.

Built with ❤ and ☕.
