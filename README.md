# CampusStay

A web-based student accommodation discovery and management platform.

CampusStay is intended to help students discover accommodation and support landlords in managing listings and applications.

## Repository structure

- `frontend/` – React + Vite website starter.
- `documentation/` – project documentation and working report.
- `database/` – database scripts will be added as the schema is finalised.
- `backend/` – backend integration will be added after the existing backend is reviewed.

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

## Configuration and security

Copy `frontend/.env.example` to `frontend/.env` for local configuration. Never commit real credentials, private keys, passwords, database connection strings or production secrets. The example file contains placeholders only.

## Project status

The frontend currently contains the initial responsive welcome-page scaffold. Authentication, live listings, applications, backend integration and production deployment are not yet confirmed as implemented.
