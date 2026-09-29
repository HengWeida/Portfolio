# Sergio's Portfolio (React + Tailwind)

## Setup (one time)
1. Install Node.js (free): https://nodejs.org (choose LTS)
2. Open a terminal and run:
   npm create vite@latest sergio-portfolio -- --template react
   cd sergio-portfolio
   npm install
   npm install tailwindcss @tailwindcss/vite
3. Copy the files from this folder into your new project and replace
   the ones with the same name: index.html, vite.config.js, public/, src/
   (You can delete src/App.css and src/assets)
4. Run it:
   npm run dev
   Then open the link it shows (usually http://localhost:5173)

## Where to edit
- Your text, skills, projects, photo: src/data.js
- Colors and fonts: src/index.css (inside @theme)
- Each section: src/components/

## Put it online for free
1. npm run build   (this makes a "dist" folder)
2. Go to https://app.netlify.com/drop and drag the "dist" folder in.
   You get a free link. Rename it in Site settings, for example sergio-neri.netlify.app
(GitHub Pages, Vercel, and Cloudflare Pages are free too.)
