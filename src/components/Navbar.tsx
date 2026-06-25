import logo from '../assets/mainlogo.jpeg'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div className="flex items-center gap-4">
          <img src={logo} alt="WingWise Logo" className="h-20 w-20 object-contain" />

          <div>
            <h1 className="text-3xl font-black uppercase tracking-[0.08em] text-[#07142b] md:text-4xl">
              WingWise
            </h1>

            <span className="block text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Aviation Academy
            </span>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-wider text-slate-700 transition hover:text-slate-900"
          >
            Home
          </a>

          <a
            href="#courses"
            className="text-sm font-semibold uppercase tracking-wider text-slate-700 transition hover:text-slate-900"
          >
            Courses
          </a>

          {/* <a
            href="#about"
            className="text-sm font-semibold uppercase tracking-wider text-slate-700 transition hover:text-slate-900"
          >
            About
          </a> */}

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-slate-700"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar