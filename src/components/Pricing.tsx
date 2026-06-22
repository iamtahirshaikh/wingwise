import { useState, type FormEvent } from 'react'
import { submitPricingForm } from '../services/submitPricingForm'

const COURSES = [
  'Cabin Crew Training',
  'CPL Ground Classes',
  'Both Courses',
] as const

type Course = (typeof COURSES)[number]

type PricingFormState = {
  fullName: string
  phone: string
  email: string
  course: Course
}

const initialFormState: PricingFormState = {
  fullName: '',
  phone: '',
  email: '',
  course: COURSES[0],
}

function Pricing() {
  const [formData, setFormData] = useState<PricingFormState>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage('')
    setIsSuccess(false)
    setIsSubmitting(true)

    const result = await submitPricingForm(formData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      setStatusMessage('Thank you! We will send pricing details to you shortly.')
      setFormData(initialFormState)
      return
    }

    setStatusMessage(result.message ?? 'Something went wrong. Please try again.')
  }

  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <h2 className="mb-6 text-5xl font-bold">
            Course Duration & Fees
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-300">
            We provide premium aviation training with flexible
            learning structures and industry-focused mentorship.
          </p>

          <div className="space-y-6">

            <div className="flex items-center justify-between border-b border-slate-700 py-5">

              <span className="text-lg font-semibold">
                Cabin Crew Program
              </span>

              <span className="text-slate-400">
                3 Months
              </span>

            </div>

            <div className="flex items-center justify-between border-b border-slate-700 py-5">

              <span className="text-lg font-semibold">
                CPL Ground Classes
              </span>

              <span className="text-slate-400">
                Coming Soon
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="rounded-lg bg-white p-10 text-slate-900">

          <h3 className="mb-4 text-center text-3xl font-bold">
            Get Detailed Pricing
          </h3>

          <p className="mb-8 text-center text-slate-600">
            Fill your details to receive brochure and pricing information.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <div>

              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-bold uppercase tracking-widest"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    fullName: event.target.value,
                  }))
                }
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-slate-900"
              />

            </div>

            <div>

              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-bold uppercase tracking-widest"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
                placeholder="+91 98765 43210"
                className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-slate-900"
              />

            </div>

            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold uppercase tracking-widest"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-slate-900"
              />

            </div>

            <div>

              <label
                htmlFor="course"
                className="mb-2 block text-sm font-bold uppercase tracking-widest"
              >
                Course
              </label>

              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    course: event.target.value as Course,
                  }))
                }
                className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-slate-900"
              >
                {COURSES.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>

            </div>

            {statusMessage && (
              <p
                className={`rounded-lg px-4 py-3 text-sm ${
                  isSuccess
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
                role="status"
              >
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-slate-900 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            <a
              href="https://calendar.app.google/7g82BA5CYTCJTc7v7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg border-2 border-slate-900 px-6 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              Book Consultation
            </a>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Pricing
