function MovieCard({ movie, onToggleWatched, onDeleteMovie }) {
  const fallbackPoster =
    'https://placehold.co/500x750/0f172a/e2e8f0?text=No+Poster'

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-sky-400/60">
      <div className="relative overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackPoster
          }}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
            movie.watched
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-rose-100 text-rose-700'
          }`}
        >
          {movie.watched ? 'Watched' : 'Unwatched'}
        </span>
      </div>

      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-bold text-white">
          {movie.title}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {movie.genre} • {movie.releaseYear}
        </p>

        <div className="mt-4 grid grid-cols-[1fr_0.75fr] gap-2">
          <button
            type="button"
            onClick={() => onToggleWatched(movie.id)}
            className="rounded-xl bg-sky-400 px-3 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
          >
            {movie.watched ? 'Unwatch' : 'Mark Watched'}
          </button>

          <button
            type="button"
            onClick={() => onDeleteMovie(movie.id)}
            className="rounded-xl bg-rose-400 px-3 py-2 text-sm font-bold text-rose-950 transition hover:bg-rose-300"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard