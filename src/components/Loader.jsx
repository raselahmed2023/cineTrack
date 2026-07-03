function Loader() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-sky-400"></div>

        <h1 className="mt-6 text-3xl font-bold">CineTrack</h1>

        <p className="mt-2 text-sm text-slate-400">
          Loading your movie collection...
        </p>
      </div>
    </main>
  )
}

export default Loader