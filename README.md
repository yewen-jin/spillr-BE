# SpillR — Backend

Real-time backend for SpillR, a time-synced live TV commentary app. Every comment, reply, and emoji reaction is anchored to the show's timeline so premiere and catchup viewers share the same conversation without spoilers.

## Demo

[Watch the demo on Vimeo](https://vimeo.com/1177638431)

## Front-end repo

[→ View Frontend Repo](https://github.com/Ines1299/SpillR-app)

## Architecture

```
React Native (Expo)
    ├── Supabase REST API ──→ PostgreSQL (direct reads)
    └── Socket.io ──→ Express Server (real-time events)
                          ├── Custom API endpoints
                          └── External TV database API
```

**Dual data layer:** The frontend reads directly from Supabase for immediate data access, while the Express server handles real-time broadcasting via Socket.io and serves custom endpoints. This let the frontend team build without waiting for backend routes.

## How timeline sync works

Comments are stored with a `timestamp` property — the relative second in the show when they were posted. The server broadcasts all events via Socket.io, but each client only displays them when its local timer reaches the matching timestamp. The server handles delivery; the client handles display timing.

## Tech stack

- **Runtime:** Node.js, Express
- **Real-time:** Socket.io (rooms, namespaced events)
- **Database:** Supabase (PostgreSQL + REST API)
- **External data:** TV show metadata API
- **Deployment:** Render (free tier with GitHub Actions cron keep-alive)

## Getting started

```bash
git clone https://github.com/yewen-jin/spillr-BE.git
cd spillr-BE
npm install
```

Create a `.env` file:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
PORT=3000
```

```bash
npm run dev
```


## Team

Ines Cadete, Oliver Foere, Emmanuella Itopa, Yewen Jin, Jinson Pulikudan Jose, Zhengnan Sun

Built in 2 weeks during a coding bootcamp.



