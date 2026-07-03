import { useState } from 'react'
import initialMovies from './data/initialMovies'
import MovieCard from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState(initialMovies)

  const handleToggleWatched = (movieId) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          watched: !movie.watched,
        }
      }

      return movie
    })

    setMovies(updatedMovies)
  }

  const handleDeleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => movie.id !== movieId)
    setMovies(filteredMovies)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Movie Watchlist
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            CineTrack
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Manage your favorite movies, watched status, and personal watchlist.
          </p>

          <div className="mt-6 flex justify-center gap-4 text-sm text-slate-300">
            <span>Total: {movies.length}</span>
            <span>Watched: {movies.filter((movie) => movie.watched).length}</span>
            <span>Unwatched: {movies.filter((movie) => !movie.watched).length}</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={handleToggleWatched}
              onDeleteMovie={handleDeleteMovie}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App