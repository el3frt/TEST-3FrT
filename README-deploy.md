# Deployment instructions (PM2) for VPS (Hostinger KVM)

1. Install Node.js and PM2 on VPS.
2. Clone repo and checkout branch: feature/node-migration
3. Backend:
   - cd backend
   - cp .env.example .env and update DATABASE_URL and JWT_SECRET
   - npm install
   - npx prisma generate
   - npm run build
   - pm2 start ecosystem.config.js

4. Frontend:
   - cd frontend
   - npm install
   - npm run build
   - npm run start

5. Database migration:
   - Use the provided NoCash.sql to load initial data for testing.
   - Backup referral_code table before running the drop script.

Notes:
- I prepared Prisma schema and skeleton. After you review PR I'll complete all endpoints and migrations.
