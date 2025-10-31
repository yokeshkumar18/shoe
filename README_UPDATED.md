# Shoe Collection (React + Vite + Tailwind)

A small React app that fetches shoe data from the "Shoe Collection" API on RapidAPI and provides two routes:

- `/` — Home page showing the catalog of shoes
- `/product/:id` — Product details page for a specific shoe

Tech stack

- React 18 (Vite)
- Tailwind CSS
- react-router-dom
- axios

Quick start (Windows / PowerShell)

1. Open this project folder and install dependencies:

```powershell
cd "C:\Users\Yokesh kumar\OneDrive\Desktop\shoe"
npm install
```

2. Create a `.env` file from the example and add your RapidAPI credentials (Vite requires vars to start with `VITE_`):

```powershell
copy .env.example .env
# then open .env and fill values
```

Example `.env` values:

```text
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=shoes-collections.p.rapidapi.com
```

3. Start the dev server:

```powershell
npm run dev
```

4. Open the URL Vite prints (usually http://localhost:5173).

Project structure (important files)

- `index.html` — Vite entry
- `vite.config.js` — Vite config
- `src/main.jsx` — app entry (react + router)
- `src/App.jsx` — routes and layout wrapper
- `src/pages/Home.jsx` — fetches and displays all shoes
- `src/pages/Product.jsx` — fetches and displays a single shoe
- `src/components/Navbar.jsx` — top navigation and dark/light toggle
- `src/components/ShoeCard.jsx` — reusable product card
- `src/components/Loader.jsx` — loading spinner
- `src/api/shoes.js` — API wrapper using axios
- `tailwind.config.cjs` / `postcss.config.cjs` / `src/index.css` — Tailwind setup

API usage notes

- This project uses the "Shoe Collection" API on RapidAPI. You must subscribe (free plan) on RapidAPI and copy the provided `X-RapidAPI-Key` and `X-RapidAPI-Host` into your `.env` as `VITE_RAPIDAPI_KEY` and `VITE_RAPIDAPI_HOST`.
- The free RapidAPI plan may have strict rate limits (for example, ~1000 requests/hour). When you see API errors like 429 or an error mentioning rate limits, wait or reduce request frequency.
- The app calls two endpoints via `src/api/shoes.js`:
  - GET /all — fetch all shoes (used by Home page)
  - GET /shoe/{id} — fetch a single shoe by id (used by Product page)

Environment and security

- Do not commit your `.env` with real keys. The repository has `.env.example` and `.gitignore` already configured to ignore `.env`.

Error handling & UX

- The app shows a spinner (`Loader`) while fetching data.
- If an API call fails, the app shows a friendly error message. If you hit an API limit, that error will be shown in the UI.

Common commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — create a production build
- `npm run preview` — preview production build locally

Troubleshooting

- If `npm install` fails with a tailwind/npm registry error, try:

```powershell
npm cache clean --force
Remove-Item -Recurse -Force .\node_modules -ErrorAction SilentlyContinue
Remove-Item -Force .\package-lock.json -ErrorAction SilentlyContinue
npm install
```

- If you see CORS or network issues when fetching the API, ensure the `VITE_RAPIDAPI_KEY` and `VITE_RAPIDAPI_HOST` are correct in `.env` and that your IP/network allows outbound requests to RapidAPI.

Customization and next steps

- Add search, filtering, or pagination to the Home page
- Add a shopping-cart or favorites feature (localStorage)
- Add unit tests for components and API wrapper
- Add small UI polish: hover transitions and responsive tweaks

License

This project is provided as-is for learning and demo purposes.

If you'd like, I can also:

- Start the dev server on a persistent terminal here and stream logs,
- Add a small test or CI config,
- Improve the UI (animations, card layout),
  or any other change — tell me which and I'll implement it.
