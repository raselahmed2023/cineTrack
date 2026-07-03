
````md
# CineTrack

CineTrack is a responsive and minimalist Movie Watchlist & Review interface built with React.js and Tailwind CSS. It allows users to manage a dynamic movie collection, add new movies, search by title, filter by watched status, toggle watched/unwatched state, and delete movies.

## Live Demo

Live URL: https://cine-track-nine.vercel.app


## Features

- Responsive movie dashboard with premium card layout
- Add new movie using modal form
- Client-side form validation
- Search movies by title in real time
- Filter movies by status:
  - All Movies
  - Watched
  - Unwatched
- Toggle movie status between watched and unwatched
- Delete movies from the collection
- LocalStorage persistence
- Artificial loading spinner on initial load
- Broken poster image fallback
- Reset collection option

## Technologies Used

- React.js
- JavaScript
- Vite
- Tailwind CSS
- LocalStorage

## Project Structure

```txt
cinetrack/
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
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
````

## Installation and Local Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/raselahmed2023/cineTrack
```

### 2. Go to the project folder

```bash
cd cinetrack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the app in browser

```txt
http://localhost:5173
```

## Data Management

This project uses hardcoded initial movie data and browser LocalStorage for client-side persistence. When users add, delete, or update watched status, the changes are saved in LocalStorage and remain available after page refresh.





