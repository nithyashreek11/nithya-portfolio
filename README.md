# 🚀 Nithya Shree K — Personal Portfolio

> Full-stack personal portfolio built with React.js, Node.js/Express.js, and MySQL.

---

## 📁 Project Structure

```
nithya-portfolio/
├── backend/               # Node.js + Express API
│   ├── config/
│   │   ├── db.js          # MySQL connection pool
│   │   └── init.sql       # Database setup script
│   ├── routes/
│   │   ├── projects.js    # Projects CRUD API
│   │   ├── skills.js      # Skills API
│   │   └── contact.js     # Contact form API
│   ├── server.js          # Express server
│   ├── .env.example       # Environment variable template
│   └── package.json
│
├── frontend/              # React.js app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   ├── Achievements.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── package.json           # Root scripts (run both)
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js (v16+)
- MySQL (v8+)
- npm or yarn

---

### 2. Database Setup

Open MySQL Workbench or terminal and run:

```sql
-- Option A: MySQL terminal
mysql -u root -p < backend/config/init.sql

-- Option B: Copy-paste the contents of backend/config/init.sql into MySQL Workbench
```

This creates:
- `portfolio_db` database
- `projects`, `skills`, `contacts` tables
- Populates them with Nithya's real data

---

### 3. Backend Setup

```bash
cd backend
npm install

# Create your .env file
cp .env.example .env
```

Edit `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=portfolio_db
PORT=5000
EMAIL_USER=nithyashree.k2005@gmail.com
EMAIL_PASS=your_gmail_app_password   # optional, for email notifications
```

Start the backend:
```bash
npm run dev   # development (with nodemon)
# or
npm start     # production
```

API runs at: `http://localhost:5000`

Test: `http://localhost:5000/api/health`

---

### 4. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

> The `"proxy": "http://localhost:5000"` in frontend/package.json automatically routes `/api/*` calls to the backend.

---

### 5. Run Both Together (Recommended)

From the **root** folder:
```bash
npm install          # installs concurrently
npm run install-all  # installs all dependencies
npm run dev          # starts both backend + frontend
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | All projects |
| GET | `/api/projects/featured` | Featured projects only |
| GET | `/api/projects/:id` | Single project |
| POST | `/api/projects` | Add new project |
| GET | `/api/skills` | All skills grouped by category |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | All messages (admin) |

---

## 🚀 Deployment

### Frontend → Vercel (Free)
1. Push frontend folder to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Set root directory to `frontend`
4. Deploy!

### Backend → Railway or Render (Free)
1. Push backend folder to GitHub
2. Go to [railway.app](https://railway.app) or [render.com](https://render.com)
3. Add MySQL plugin/database
4. Set environment variables from `.env`
5. Deploy!

### Update Frontend API URL for production
In `frontend/src/components/Projects.js` and `Contact.js`, change:
```js
axios.get('/api/projects')  →  axios.get('https://YOUR-BACKEND-URL/api/projects')
```

---

## ✨ Features

- 🎨 Dark theme with custom animated cursor
- ⌨️ Typewriter effect on Hero section
- 🗂️ Tabbed About section (Education / About / Languages)
- 📊 Animated skill progress bars with category filter
- 🃏 Project cards with category filtering (data from MySQL)
- 📅 Interactive accordion timeline for Experience
- 🏆 Achievements, Certifications, Hackathons sections
- 📬 Contact form (saves to MySQL + optional email notification)
- 📱 Fully responsive

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18, CSS Variables, Axios |
| Backend | Node.js, Express.js |
| Database | MySQL 8 |
| Email | Nodemailer (optional) |
| Fonts | Syne + Space Mono + Inter |

---

## 📬 Contact

**Nithya Shree K**  
📧 nithyashree.k2005@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/nithyashreek2005)  
💻 [GitHub](https://github.com/nithyashreek11)
