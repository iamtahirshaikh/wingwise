import { useState } from 'react'
import DialogBox from './DialogBox'
import modules from '../Modules'
function CabinCrew() {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedModule, setSelectedModule] = useState({
    title: '',
    description: '',
  })

  return (
    <>
      <section
        id="courses"
        className="bg-white py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER */}
          <div className="mx-auto mb-20 max-w-4xl text-center">

            <span className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3 MONTHS DURATION
            </span>

            <h2 className="mb-6 text-5xl font-bold text-slate-900">
              Cabin Crew Training
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
              Launch your career in the clouds. Our intensive
              training program transforms aspiring candidates
              into world-class flight attendants ready for
              domestic and international airlines.
            </p>

          </div>

          {/* MODULE GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {modules.map((module, index) => {
              const isLastOrphan = index === modules.length - 1 && modules.length % 3 === 1

              return (
              <div
                key={module.title}
                onClick={() => {
                  setSelectedModule(module)
                  setIsOpen(true)
                }}
                className={`cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl${isLastOrphan ? ' lg:col-start-2' : ''}`}
              >

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {module.title}
                </h3>

                <p className="text-slate-600">
                  Click to learn more
                </p>

              </div>
              )
            })}

          </div>

          {/* CTA BUTTON */}
          <div className="mt-12 flex justify-center">

            <a
              href="https://calendar.app.google/7g82BA5CYTCJTc7v7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-slate-700"
            >
              Free Consultation
            </a>

          </div>

        </div>
      </section>

      <DialogBox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={selectedModule.title}
        description={selectedModule.description}
      />
    </>
  )
}

export default CabinCrew