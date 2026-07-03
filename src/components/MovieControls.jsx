function MovieControls({ searchTerm, onSearchChange, statusFilter, onStatusChange }) {
  return (
    <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/20">
      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search movie by title..."
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />

        <select
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
        >
          <option value="all">All Movies</option>
          <option value="watched">Watched</option>
          <option value="unwatched">Unwatched</option>
        </select>
      </div>
    </section>
  )
}

export default MovieControls
