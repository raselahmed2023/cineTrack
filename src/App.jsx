import { useEffect, useState } from 'react'
import initialMovies from './data/initialMovies'
import AddMovieForm from './components/AddMovieForm'
import MovieCard from './components/MovieCard'
import MovieControls from './components/MovieControls'
import Loader from './components/Loader'

const STORAGE_KEY = 'cinetrack_movies'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      try {
        const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY))

        if (Array.isArray(savedMovies)) {
          setMovies(savedMovies)
        } else {
          setMovies(initialMovies)
        }
      } catch {
        setMovies(initialMovies)
      }
      setIsLoading(false)
    }, 900)
    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies))
    }
  }, [movies, isLoading])
  const handleAddMovie = (newMovie) => {
    setMovies([newMovie, ...movies])
  }

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

  const handleResetMovies = () => {
    setMovies(initialMovies)
    setSearchTerm('')
    setStatusFilter('all')
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'watched' && movie.watched) ||
      (statusFilter === 'unwatched' && !movie.watched)

    return matchesSearch && matchesStatus
  })

  if (isLoading) {
    return <Loader />
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

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            <span>Total: {movies.length}</span>
            <span>Watched: {movies.filter((movie) => movie.watched).length}</span>
            <span>Unwatched: {movies.filter((movie) => !movie.watched).length}</span>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="rounded-2xl bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              + Add Movie
            </button>

            <button
              type="button"
              onClick={handleResetMovies}
              className="rounded-2xl border border-slate-700 px-6 py-3 text-sm font-bold text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-white"
            >
              Reset Collection
            </button>
          </div>
        </div>

        <MovieControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
        />

        {filteredMovies.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleWatched={handleToggleWatched}
                onDeleteMovie={handleDeleteMovie}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-center">
            <h2 className="text-2xl font-bold">No movies found</h2>
            <p className="mt-2 text-slate-400">
              Try changing your search text or filter option.
            </p>
          </div>
        )}

        <AddMovieForm
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddMovie={handleAddMovie}
        />
      </section>
    </main>
  )
}

export default App