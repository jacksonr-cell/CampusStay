# Campus Stay Frontend

Custom React + Vite frontend for Campus Stay.

## Current stage

The first screen is a responsive welcome-page scaffold based on the approved design:
- Full-screen apartment hero background
- Transparent glass navigation
- Separate Search and Login controls
- “Your Next Home Starts Here” headline
- “Your Next Home” primary action

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Add the approved hero photograph

Place a licensed apartment-building image at:

`public/images/apartment-hero.jpg`

The current page has a blue fallback background until that image is added. Use an image you own or have permission to use.

## Planned integration

- WordPress REST API: editable public content
- Existing Campus Stay backend: authentication, listings, applications and database
- Netlify: frontend hosting
- GitHub: source repository

Do not commit secrets, passwords, private API keys, or application passwords. Public `VITE_` variables are bundled into the browser and must never contain secrets.

## Deployment

Connect the GitHub repository to Netlify:
- Build command: `npm run build`
- Publish directory: `dist`

This project is not yet connected to production services.
