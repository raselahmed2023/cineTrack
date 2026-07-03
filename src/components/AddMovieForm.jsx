import { useState } from 'react'

function AddMovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    posterUrl: '',
  })

  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const title = formData.title.trim()
    const genre = formData.genre.trim()
    const posterUrl = formData.posterUrl.trim()
    const releaseYear = Number(formData.releaseYear)

    if (!title || !genre || !posterUrl || !formData.releaseYear) {
      setError('Please fill in all fields.')
      return
    }

    if (releaseYear < 1900 || releaseYear > new Date().getFullYear() + 5) {
      setError('Please enter a valid release year.')
      return
    }

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      releaseYear,
      posterUrl,
      watched: false,
    }

    onAddMovie(newMovie)

    setFormData({
      title: '',
      genre: '',
      releaseYear: '',
      posterUrl: '',
    })

    setError('')
  }

  return (
    <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/20">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-white">Add New Movie</h2>
        <p className="mt-1 text-sm text-slate-400">
          Add a movie to your personal watchlist.
        </p>
      </div>

      {error && (
        <p className="mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-300">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Movie title"
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />

        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />

        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          placeholder="Release year"
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />

        <input
          type="url"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
          placeholder="Poster URL"
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
        />

        <button
          type="submit"
          className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300 md:col-span-2 lg:col-span-4"
        >
          Add Movie
        </button>
      </form>
    </section>
  )
}

export default AddMovieForm