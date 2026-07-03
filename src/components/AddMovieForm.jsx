import { useState } from 'react'

function AddMovieForm({ isOpen, onClose, onAddMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    posterUrl: '',
  })

  const [error, setError] = useState('')

  if (!isOpen) {
    return null
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'releaseYear') {
      const onlyPositiveNumber = value.replace(/\D/g, '')

      setFormData({
        ...formData,
        [name]: onlyPositiveNumber,
      })

      return
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleClose = () => {
    setError('')
    onClose()
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const title = formData.title.trim()
    const genre = formData.genre.trim()
    const posterUrl = formData.posterUrl.trim()
    const releaseYear = Number(formData.releaseYear)
    const currentYear = new Date().getFullYear()

    if (!title || !genre || !posterUrl || !formData.releaseYear) {
      setError('Please fill in all fields.')
      return
    }

    if (releaseYear < 1900 || releaseYear > currentYear + 5) {
      setError(`Please enter a valid release year between 1900 and ${currentYear + 5}.`)
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
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-black/50">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Add New Movie</h2>
            <p className="mt-1 text-sm text-slate-400">
              Add a movie to your personal watchlist.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm font-bold text-slate-300 transition hover:border-rose-400 hover:text-rose-300"
          >
            ✕
          </button>
        </div>

        {error && (
          <p className="mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-300">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Movie title"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
          />

          <div className="grid gap-4 sm:grid-cols-2">
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
              onKeyDown={(event) => {
                if (['-', '+', 'e', 'E', '.'].includes(event.key)) {
                  event.preventDefault()
                }
              }}
              min="1900"
              max={new Date().getFullYear() + 5}
              placeholder="Release year"
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <input
            type="url"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            placeholder="Poster URL"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
          />

          <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMovieForm