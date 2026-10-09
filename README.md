# Gowtham ❤️ Nandhini

A wedding invitation site for Gowtham and Nandhini. Wedding details live in one file, `src/data/wedding.ts`. Colours live in `src/theme/theme.ts`.

Replace the photographs in `public/images/` without renaming them. Wedding music is set in `src/data/wedding.ts` (`musicSrc`, currently `public/audio/Nayanthara-Intro-BGM.mp3`). The music button never autoplays.

## Update the invitation

Edit `src/data/wedding.ts`:

- Names and parents
- Hero date and location labels
- `weddingDateTime` as an ISO 8601 datetime, for example `2026-12-12T09:30:00+05:30`
- Reception and muhurtham date, time, venue, address, `isoStart`, and `mapsUrl`
- `googleMapsUrl`
- Story captions

## Local development with Docker

Node runs inside Docker so the machine does not need a local Node install.

```bash
chmod +x scripts/docker.sh
./scripts/docker.sh install
./scripts/docker.sh run build
./scripts/docker.sh up
```

Open [http://localhost:3000](http://localhost:3000).

## Vercel

This is a standard Next.js app. Import the GitHub repository in Vercel and deploy. No custom server is required.

```bash
npm run dev
npm run build
npm run start
```
