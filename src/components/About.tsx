import sanikaImage from '../assets/images/sanika.jpg'
import anshImage from '../assets/images/ansh.jpg'

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28 text-white"
    >

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <div className="mb-20 text-center">

          <span className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
            About Us
          </span>

          <h2 className="text-5xl font-bold">
            Learn From Industry Professionals
          </h2>

        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* SANIKA */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2">

            <img
              src={sanikaImage}
              alt="Sanika"
              className="h-[700px] w-full object-cover object-top"
            />

            <div className="flex flex-1 flex-col p-10">

              <h3 className="mb-4 text-4xl font-bold">
                Sanika Hajare
              </h3>

              <p className="mb-6 text-lg text-slate-400">
                Experienced cabin crew professional actively working with Indigo Airlines.
              </p>

              <p className="mb-8 flex-1 leading-8 text-slate-300">
                Specialized in grooming, personality development,
                communication training, and airline interview preparation.
              </p>

              <a
                href="https://www.linkedin.com/in/sanika-hajare-198b963aa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit border border-white px-6 py-3 text-sm font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                View LinkedIn
              </a>

            </div>

          </div>

          {/* ANSH */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2">

            <img
              src={anshImage}
              alt="Ansh"
              className="h-[700px] w-full object-cover object-top"
            />

            <div className="flex flex-1 flex-col p-10">

              <h3 className="mb-4 text-4xl font-bold">
                Ansh Tanksale
              </h3>

              <p className="mb-6 text-lg text-slate-400">
                Third Officer in the Merchant Navy with strong leadership,
                safety awareness, and international experience managing operations.
              </p>

              <p className="mb-8 flex-1 leading-8 text-slate-300">
                Specialized in discipline, emergency response, communication,
                confidence building, and professional mentorship for aspiring aviation professionals.
              </p>

              <a
                href="https://www.linkedin.com/in/ansh-tanksale-3685a4227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit border border-white px-6 py-3 text-sm font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                View LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About