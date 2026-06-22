import { useState } from 'react'
import DialogBox from './DialogBox'

import {
  Users,
  BookOpen,
  FileText,
  Briefcase,
  GraduationCap,
  UserCheck,
  Video,
  ClipboardCheck,
} from 'lucide-react'

function TrainingModules() {
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
              Our Training Methodology
            </span>

            <h2 className="mb-6 text-5xl font-bold text-slate-900">
              How We Train Future Aviation Professionals
            </h2>

            <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
              At WingWise Aviation Academy, we believe every student deserves
              personalized guidance and industry-relevant training.
              Our online training program is designed to provide individual
              attention, structured learning, and continuous performance monitoring.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div
              onClick={() =>
                openDialog(
                  'Personal Mentorship',
                  'Every student receives dedicated attention through weekly one-on-one video calls to discuss progress, strengths, and areas for improvement.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Users className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Personal Mentorship
              </h3>
              <p className="text-slate-600">
                Weekly one-on-one guidance.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'Airline-Standard Curriculum',
                  'Our syllabus is continuously updated and aligned with current airline recruitment and industry standards.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <BookOpen className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Airline-Standard Curriculum
              </h3>
              <p className="text-slate-600">
                Industry-aligned training.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'Professional Resume Building',
                  'Students are guided in creating airline-ready resumes that highlight their strengths and improve recruitment prospects.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <FileText className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Resume Building
              </h3>
              <p className="text-slate-600">
                Airline-ready resume creation.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'Comprehensive Interview Preparation',
                  'All airline interview rounds, including HR interviews, group discussions, and screening rounds, are practiced before actual airline recruitment.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Briefcase className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Interview Preparation
              </h3>
              <p className="text-slate-600">
                Airline recruitment readiness.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'DGCA-Focused Training',
                  'All DGCA subjects are covered in detail, with assessments and evaluations conducted according to DGCA examination standards.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <GraduationCap className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                DGCA-Focused Training
              </h3>
              <p className="text-slate-600">
                DGCA-standard assessments.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'Parent Progress Updates',
                  'Monthly performance reports are shared with parents or guardians to ensure transparency and consistent student development.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <UserCheck className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Parent Progress Updates
              </h3>
              <p className="text-slate-600">
                Monthly performance reports.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'Recorded Live Sessions',
                  'Students receive access to recorded classes, allowing them to revise lessons anytime and learn at their own pace.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Video className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Recorded Live Sessions
              </h3>
              <p className="text-slate-600">
                Learn anytime.
              </p>
            </div>

            <div
              onClick={() =>
                openDialog(
                  'Extensive Question Bank',
                  'More than 200 frequently asked airline interview questions are discussed, practiced, and solved to maximize interview success.'
                )
              }
              className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <ClipboardCheck className="mb-6 h-12 w-12 text-slate-900" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                200+ Interview Questions
              </h3>
              <p className="text-slate-600">
                Real airline interview practice.
              </p>
            </div>

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

export default TrainingModules