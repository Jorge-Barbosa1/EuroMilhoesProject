# Euromilhões Key Generator

> **Suggested repo description:** *Tiny Express app that generates random Euromillions keys (5 numbers + 2 stars) and displays them in the browser.*
>
> **Suggested topics:** `express`, `javascript`, `random-generator`, `nodejs`, `euromillions`
>
> **Suggested website:** `https://euromilhoesproject.onrender.com`

A minimal web app that generates a random Euromillions key — 5 unique numbers between 1 and 50 and 2 unique stars between 1 and 12 — at the click of a button. Built as a small exercise in serving a static frontend from a Node/Express backend.

🔗 **Live demo:** https://euromilhoesproject.onrender.com

## How it works

- The frontend (`public/index.html` + `public/script.js`) renders a button and two `<ul>` slots for numbers and stars.
- On click, `genRandomNumbers()` uses a `Set` to draw unique values in the right ranges, packages them into a JSON object with a timestamp, and renders them as list items.
- Express serves the `public/` folder as static files and falls back to `index.html` on the root route.

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Stack

- **Backend:** Node.js, Express 4
- **Frontend:** Vanilla JavaScript, HTML, CSS
- **Hosting:** Render

## Status

Single-page toy project — useful as a simple Express + static-frontend reference. No persistence, no authentication, no API.
