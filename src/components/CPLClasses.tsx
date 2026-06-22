function CPLClasses() {
  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* TOP SECTION */}
        <div className="mb-20 text-center">

          <span className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
            Offline Intensive
          </span>

          <h2 className="mb-6 text-5xl font-bold text-white">
            CPL Ground Classes
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            Ace your DGCA examinations with comprehensive classroom training
            designed to build strong theoretical knowledge and aviation expertise.
          </p>

        </div>

        {/* SUBJECTS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-bold text-white">
              Air Navigation
            </h3>

            <p className="leading-7 text-slate-300">
              Flight planning, navigation systems, charts, and operational procedures.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-bold text-white">
              Aviation Meteorology
            </h3>

            <p className="leading-7 text-slate-300">
              Weather systems, forecasting, aviation weather reports, and flight safety.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-bold text-white">
              Air Regulations
            </h3>

            <p className="leading-7 text-slate-300">
              ICAO regulations, DGCA requirements, aviation law, and compliance.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-bold text-white">
              Technical General
            </h3>

            <p className="leading-7 text-slate-300">
              Aircraft systems, engines, aerodynamics, and aviation fundamentals.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-bold text-white">
              Technical Specific
            </h3>

            <p className="leading-7 text-slate-300">
              Aircraft-specific technical knowledge and operational procedures.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="mb-4 text-2xl font-bold text-white">
              RTR (Radio Telephony Restricted)
            </h3>

            <p className="leading-7 text-slate-300">
              Aviation radio communication procedures, phraseology, and RTR preparation.
            </p>

          </div>

        </div>

        {/* COMING SOON */}
        <div className="mt-12 flex justify-center">

          <div className="rounded-full border border-slate-700 bg-slate-100 px-10 py-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-900">
            Coming Soon!
          </div>

        </div>

      </div>

    </section>
  )
}

export default CPLClasses