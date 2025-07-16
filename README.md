# TODO APP Setup Guide

This project consists of a **client** (frontend) and a **server** (backend). Follow the steps below to configure and run the application locally.

---

## Environment Configuration

### Client `.env` (inside `/client` folder)

Create a `.env` file inside the `client` directory with the following:

```env
VITE_API_URL
```

### Server `.env` (inside `/server` folder)

Create a `.env` file inside the `server` directory with the following:

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

---

## Installation & Development

### Start the Client

```bash
cd client
npm install
npm run dev
```

### Start the Server

```bash
cd server
npm install
npm run devStart
```

---

## You're all set!

Make sure all environment variables are correctly filled out for full functionality.
