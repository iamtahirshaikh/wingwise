interface DialogBoxProps {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
}

function DialogBox({
  title,
  description,
  isOpen,
  onClose,
}: DialogBoxProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-200 p-6">

          <h2 className="text-3xl font-bold text-slate-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-2xl font-bold text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            ×
          </button>

        </div>

        <div className="max-h-[70vh] overflow-y-auto p-8">

          <p className="whitespace-pre-line text-lg leading-8 text-slate-600">
            {description}
          </p>

        </div>

      </div>

    </div>
  )
}

export default DialogBox