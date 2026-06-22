import heroImage from '../assets/images/hero.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src={heroImage}
          alt="Aviation Training"
          className="h-full w-full object-cover opacity-70"
        />

      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-slate-950/35"></div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="max-w-2xl">

          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-slate-300">
            Elevate Your Career
          </span>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Master the Skies with Professional Excellence
          </h1>

          <p className="mb-10 text-lg leading-8 text-slate-300">
            Join the elite ranks of aviation professionals
            through industry-leading aviation training programs.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="#courses"
              className="bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-200"
            >
              Explore Courses
            </a>

            <a
              href="https://calendar.app.google/7g82BA5CYTCJTc7v7"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Book Consultation
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero