import { useState } from 'react'
import DialogBox from './DialogBox'
import airlineLogos from '../assets/airline_logos.png'

import {
  Plane,
  Users,
  BadgeCheck,
  Briefcase,
} from 'lucide-react'

function WhyChooseUs() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState('')
  const [selectedDescription, setSelectedDescription] = useState('')

  const openDialog = (title: string, description: string) => {
    setSelectedTitle(title)
    setSelectedDescription(description)
    setIsOpen(true)
  }

  return (
    <>
      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">

            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              Why WingWise
            </span>

            <h2 className="text-5xl font-bold text-slate-900">
              Aviation Training That Builds Careers
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* CARD 1 */}
            <div
              onClick={() =>
                openDialog(
                  'Direct Access To Mentors Actively Working In The Industry',
                  'Learn From Crew Who Flew Today\n\nGet trained by active IndiGo, Vistara and Emirates crew, not retired trainers reading PDFs.\n\nDoubts at 10pm before your interview? Your mentor picks up the call.\n\nLifetime support means we are with you till your first salary and after.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
                <Plane className="h-8 w-8 text-slate-900" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Industry Mentors
              </h3>

              <p className="leading-7 text-slate-600">
                Learn from active airline professionals.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              onClick={() =>
                openDialog(
                  'DGCA-Based Portion',
                  'Study What Airlines Actually Test\n\n100% DGCA-aligned syllabus covering Safety, SEP Basics, Aviation Meteorology and Air Regulations.\n\nNo fluff. No outdated topics.\n\nWe teach to crack airline entrances, not just hand out certificates.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
                <Users className="h-8 w-8 text-slate-900" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                DGCA-Based Portion
              </h3>

              <p className="leading-7 text-slate-600">
                Airline-focused DGCA syllabus.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              onClick={() =>
                openDialog(
                  'Batch Timing Flexibility',
                  'Your Dream, Your Schedule\n\nCollege, part-time job, or family duties? Pick morning, evening, or weekend batches.\n\nMiss a class? Get recordings and one-on-one catch-up sessions.\n\nLearn from anywhere in India without relocation or travel expenses.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
                <BadgeCheck className="h-8 w-8 text-slate-900" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Flexible Batches
              </h3>

              <p className="leading-7 text-slate-600">
                Morning, evening and weekend options.
              </p>
            </div>

            {/* CARD 4 */}
            <div
              onClick={() =>
                openDialog(
                  'Affordable Fees',
                  'Wings Should Not Cost A Fortune\n\nAt one-third the cost of many Delhi and Mumbai institutes.\n\nNo hidden charges for uniforms, kits or mock interviews.\n\nGet real airline training, real mentors and real support at a price parents can actually afford.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
                <Briefcase className="h-8 w-8 text-slate-900" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Affordable Fees
              </h3>

              <p className="leading-7 text-slate-600">
                Premium aviation training at affordable pricing.
              </p>
            </div>

          </div>

          <div className="mt-20 flex justify-center">
            <img
              src={airlineLogos}
              alt="Air India, IndiGo, Emirates, and Etihad Airways logos"
              className="max-w-full object-contain"
            />
          </div>

        </div>

      </section>

      <DialogBox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={selectedTitle}
        description={selectedDescription}
      />
    </>
  )
}

export default WhyChooseUs