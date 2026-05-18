# Joshua Vicente v1

Welcome to my personal portfolio website, engineered to showcase my professional journey, skills, and projects.

This is a modern, full-stack application built using **Angular** for a dynamic user interface and a **Node.js/Express** backend deployed as **Vercel Serverless Functions**. Data is dynamically managed using **MongoDB Atlas** and **Mongoose**.

---

## 🚀 Architecture & Technical Highlights

- **Frontend Single Page Application (SPA):** Built with Angular.
- **Serverless API Backing:** Located in the `/api` directory, turning into on-demand cloud functions.
- **Unified Domain Routing:** Managed via `vercel.json` rewrites so the frontend and backend share an origin, bypassing CORS issues.
- **Dynamic Local Proxying:** Routes `/api` traffic smoothly from port `4200` to port `3000` during development.

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js:** v18.17.0 or higher
- **Angular CLI:** version 16.1.6 (or matching version)
- **Database:** A MongoDB Atlas connection string

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/joshuavicente/joshuavicente.git
cd joshuavicente
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root or configure your environment with the following values:

- `MONGODB_URI` — MongoDB Atlas connection string
- `PORT` — local API port (defaults to `3000`)
- `NODE_ENV` — `development` for local work

Example `.env` file:

```bash
MONGODB_URI="your-mongodb-atlas-connection-string"
PORT=3000
NODE_ENV=development
```

### 4. Run the API locally

The backend serverless functions are located in `/api` and run locally on port `3000`.

```bash
npm run server
```

### 5. Run the Angular frontend locally

Start the Angular app on port `4200` via proxy configurations and proxy `/api` calls to the local backend.

```bash
npm run start:proxy
```

### 6. Verify local setup

Open the app in your browser:

- Frontend: `http://localhost:4200`
- API health or endpoints: `http://localhost:3000/api/[ENDPOINT]` (as configured)

---

## 💡 Notes

- The `/api` directory is treated as Vercel Serverless Functions, so local development should mirror the deployed environment.
- Ensure the MongoDB Atlas URI is valid and accessible from your network.
- If you need to update proxy settings, check `proxy.conf.json` and `vercel.json`.
