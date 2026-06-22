export type PricingFormData = {
  fullName: string
  phone: string
  email: string
  course: string
}

type SubmitResult = {
  success: boolean
  message?: string
}

export async function submitPricingForm(
  data: PricingFormData,
): Promise<SubmitResult> {
  const webAppUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL

  if (!webAppUrl) {
    return {
      success: false,
      message:
        'Form submission is not configured. Add VITE_GOOGLE_SHEETS_WEB_APP_URL to your environment.',
    }
  }

  try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    })

    const result = (await response.json()) as SubmitResult

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message ?? 'Unable to submit the form. Please try again.',
      }
    }

    return { success: true }
  } catch {
    return {
      success: false,
      message: 'Unable to submit the form. Please try again.',
    }
  }
}
