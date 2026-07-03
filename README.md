# 🎬 CineTrack

A modern and responsive **Movie Watchlist & Review** application built with **React.js**, **Vite**, and **Tailwind CSS**. CineTrack allows users to manage their personal movie collection, track watched movies, search and filter titles, and save data locally for a seamless experience.

---

## 📸 Preview

```text
<img width="1836" height="854" alt="Screenshot 2026-07-03 194129" src="https://github.com/user-attachments/assets/7a2c68c0-dd4d-4b09-80a5-f79e8ec33900" />
```

## 🚀 Live Demo

🔗 **Live Site:** https://cine-track-nine.vercel.app

---

## 📂 Repository

GitHub: https://github.com/raselahmed2023/cineTrack

---

## ✨ Features

-  Responsive movie dashboard with a clean and modern UI
-  Add new movies using a modal form
-  Client-side form validation
-  Real-time movie search by title
-  Filter movies by status:
  - All Movies
  - Watched
  - Unwatched
-  Toggle movie status between watched and unwatched
-  Delete movies from the collection
-  LocalStorage persistence
-  Artificial loading spinner on initial load
-  Graceful fallback for broken movie poster images
-  Reset movie collection to default data
-  Fully responsive design for desktop, tablet, and mobile devices

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- LocalStorage API

---

## 📁 Project Structure

```text
cineTrack/
├── public/
├── src/
│   ├── components/
│   │   ├── AddMovieForm.jsx
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieControls.jsx
│   ├── data/
│   │   └── initialMovies.js
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/raselahmed2023/cineTrack.git
```

### 2. Navigate to the project folder

```bash
cd cineTrack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

```text
http://localhost:5173
```

---

## 💾 Data Management

This project uses hardcoded initial movie data together with the browser's **LocalStorage API** for client-side persistence.

Users can:

- Add new movies
- Update watched/unwatched status
- Delete movies
- Reset the movie collection

All changes are automatically saved to LocalStorage and remain available even after refreshing the page.

---

