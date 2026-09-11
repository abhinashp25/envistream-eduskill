# Envistream EduSkill

> AI-Integrated Full-Stack Educational Platform

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js, React.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, Axios |
| **Backend** | Node.js, Express.js, REST APIs |
| **Authentication** | JWT (jsonwebtoken), bcryptjs |
| **Database** | PostgreSQL |
| **ORM** | Prisma v5 |
| **AI** | Groq API (`llama3-8b-8192`) — EduBot assistant |
| **Storage** | Cloudinary (images, videos, documents, certificates) |
| **Security** | JWT, RBAC, Helmet, CORS, express-rate-limit, Joi validation |
| **Dev Tools** | VS Code, Git, GitHub, Postman, ESLint, Prettier |
| **Deployment** | Vercel (frontend), Render (backend), Managed PostgreSQL |

---

## Project Structure

```
Envistream Eduskill/
├── frontend/                        # Next.js React app
│   ├── app/                         # App Router (layout, pages)
│   │   ├── globals.css
│   │   ├── layout.jsx               # Root layout (Header, Footer, ChatbotButton)
│   │   └── page.jsx                 # Homepage
│   ├── components/
│   │   ├── home/                    # Homepage section components
│   │   └── layout/                  # Header, Footer, ChatbotButton
│   ├── context/
│   │   └── AuthContext.jsx          # Global auth state (login, logout, user)
│   ├── hooks/
│   │   ├── useAuth.js               # Auth hook (wraps AuthContext)
│   │   ├── useCourses.js            # Course listing & fetching hook
│   │   └── useEnrollments.js        # Enrollment management hook
│   ├── lib/
│   │   ├── axios.js                 # Axios instance (JWT injection, interceptors)
│   │   └── api.js                   # Legacy fetch wrapper (kept for reference)
│   ├── data/                        # Static content (homepage)
│   ├── public/                      # Static assets
│   ├── .env                         # NEXT_PUBLIC_API_URL
│   └── package.json
│
├── backend/                         # Node.js + Express.js API
│   ├── prisma/
│   │   ├── schema.prisma            # Full database schema (11 models)
│   │   └── seed.js                  # Dev seed data (admin, instructor, student, courses)
│   ├── src/
│   │   ├── server.js                # Express app entry point
│   │   ├── config/
│   │   │   └── db.js                # Prisma client singleton
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── courseController.js
│   │   │   ├── lessonController.js
│   │   │   ├── enrollmentController.js
│   │   │   ├── progressController.js
│   │   │   ├── quizController.js
│   │   │   ├── userController.js
│   │   │   ├── aiController.js
│   │   │   ├── notificationController.js
│   │   │   ├── paymentController.js
│   │   │   ├── certificateController.js
│   │   │   └── adminController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── courseRoutes.js
│   │   │   ├── lessonRoutes.js
│   │   │   ├── enrollmentRoutes.js
│   │   │   ├── progressRoutes.js
│   │   │   ├── quizRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── aiRoutes.js
│   │   │   ├── notificationRoutes.js
│   │   │   ├── paymentRoutes.js
│   │   │   ├── certificateRoutes.js
│   │   │   └── adminRoutes.js
│   │   ├── middleware/
│   │   │   ├── auth.js              # JWT protect middleware
│   │   │   ├── rbac.js              # allowRoles(...roles) factory
│   │   │   ├── cors.js              # CORS configuration
│   │   │   ├── rateLimiter.js       # Global / auth / AI rate limiters
│   │   │   ├── validate.js          # Joi validation middleware factory
│   │   │   ├── upload.js            # Multer + Cloudinary upload handlers
│   │   │   └── errorHandler.js      # Global error + 404 handler
│   │   ├── services/
│   │   │   ├── aiService.js         # Groq API wrapper (EduBot)
│   │   │   └── cloudinaryService.js # Cloudinary helpers (delete, getPublicId)
│   │   ├── utils/
│   │   │   ├── generateToken.js     # JWT token generator
│   │   │   ├── generateCertificate.js # Certificate generation (scaffold)
│   │   │   └── sendResponse.js      # sendSuccess / sendError helpers
│   │   └── validators/
│   │       ├── authValidators.js    # Joi schemas for auth routes
│   │       └── courseValidators.js  # Joi schemas for course routes
│   ├── .env                         # Environment variables (see .env.example)
│   ├── .env.example                 # Template for all required env vars
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Database Schema (Prisma / PostgreSQL)

| Model | Purpose |
|---|---|
| `User` | All users — STUDENT, INSTRUCTOR, ADMIN |
| `InstructorProfile` | Extended profile for instructors |
| `Course` | Course catalog with status (DRAFT/PUBLISHED/ARCHIVED) |
| `Lesson` | Individual video/document lessons within a course |
| `Enrollment` | Student ↔ Course relationship with status |
| `CourseProgress` | Tracks which lessons a student has completed |
| `Quiz` | Assessment attached to a course |
| `Question` | Quiz questions with options (JSON) and correct answer |
| `QuizResult` | Student quiz submissions with score and answer review |
| `Certificate` | Issued on course completion — verifiable by unique code |
| `Payment` | Payment records (scaffold — integrate Razorpay/Stripe) |
| `Notification` | In-app notifications (enrollment, completion, certificates) |

---

## API Endpoints

| Route | Description | Auth |
|---|---|---|
| `GET /api/health` | Server health check | Public |
| `POST /api/auth/register` | Create account | Public |
| `POST /api/auth/login` | Get JWT token | Public |
| `GET /api/auth/me` | Get current user | 🔒 |
| `GET /api/courses` | List courses (paginated, filterable) | Public |
| `GET /api/courses/:slug` | Course detail | Public |
| `POST /api/courses` | Create course | 🔒 INSTRUCTOR/ADMIN |
| `PUT /api/courses/:id` | Update course | 🔒 INSTRUCTOR/ADMIN |
| `DELETE /api/courses/:id` | Delete course | 🔒 ADMIN |
| `GET /api/courses/:id/lessons` | List lessons | Public |
| `POST /api/courses/:id/lessons` | Add lesson | 🔒 INSTRUCTOR/ADMIN |
| `GET /api/lessons/:id/stream` | Full lesson + video | 🔒 Enrolled |
| `POST /api/enrollments` | Enroll in course | 🔒 STUDENT |
| `GET /api/enrollments/me` | My enrollments + progress | 🔒 |
| `POST /api/progress/complete` | Mark lesson complete | 🔒 |
| `GET /api/progress/:courseId` | Course progress % | 🔒 |
| `GET /api/quizzes/course/:id` | Quizzes for course | 🔒 |
| `POST /api/quizzes/:id/submit` | Submit quiz answers | 🔒 |
| `GET /api/users/profile` | My profile | 🔒 |
| `PUT /api/users/profile` | Update profile | 🔒 |
| `POST /api/users/avatar` | Upload avatar | 🔒 |
| `POST /api/ai/chat` | AI EduBot chat | 🔒 |
| `GET /api/notifications` | My notifications | 🔒 |
| `GET /api/certificates/me` | My certificates | 🔒 |
| `GET /api/certificates/:code` | Verify certificate | Public |
| `POST /api/payments/initiate` | Start payment | 🔒 STUDENT |
| `GET /api/admin/stats` | Platform stats | 🔒 ADMIN |

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database (local or [Neon.tech](https://neon.tech) free tier)
- Groq API key ([console.groq.com](https://console.groq.com))
- Cloudinary account ([cloudinary.com](https://cloudinary.com))

### 1. Clone & Install

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Backend Environment

Copy `.env.example` to `.env` and fill in your values:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/envistream?schema=public
JWT_SECRET=your_super_secret_jwt_key_minimum_32_chars
GROQ_API_KEY=gsk_...your_groq_key...
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Set Up Database

```bash
cd backend

# Generate Prisma client
npm run db:generate

# Run migrations (creates all 12 tables)
npm run db:migrate

# Seed with sample data (optional but recommended)
npm run db:seed
```

### 4. Start Development Servers

```bash
# Terminal 1 — Backend (port 5000)
cd backend
npm run dev

# Terminal 2 — Frontend (port 3000)
cd frontend
npm run dev
```

### 5. Verify

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend health: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### Default Seed Credentials (after running `npm run db:seed`)

| Role | Email | Password |
|---|---|---|
| Admin | admin@envistream.org | Admin@1234 |
| Instructor | instructor@envistream.org | Instructor@1234 |
| Student | student@envistream.org | Student@1234 |

---

## Deployment

| Service | Platform | Command |
|---|---|---|
| Frontend | Vercel | `npm run build` |
| Backend | Render | `npm start` |
| Database | Neon / Supabase / Railway | `npx prisma migrate deploy` |

---

## Team TODOs

- [ ] **Payment Gateway**: Integrate Razorpay or Stripe in `paymentController.js`
- [ ] **Certificate PDF**: Implement Puppeteer/PDFKit in `utils/generateCertificate.js`
- [ ] **Frontend Pages**: Build `/auth`, `/courses`, `/dashboard`, `/profile` pages using the provided hooks and context
- [ ] **Email Notifications**: Add Nodemailer for enrollment confirmations and certificates
- [ ] **Video Streaming**: Configure Cloudinary adaptive streaming for lessons
