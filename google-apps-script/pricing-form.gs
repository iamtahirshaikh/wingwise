/**
 * Google Apps Script for WingWise pricing form submissions.
 *
 * Setup:
 * 1. Create a Google Sheet with headers in row 1:
 *    Timestamp | Full Name | Phone | Email | Course
 * 2. Open Extensions > Apps Script and paste this file.
 * 3. Replace SHEET_ID with your spreadsheet ID from the sheet URL.
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL into .env as VITE_GOOGLE_SHEETS_WEB_APP_URL
 */

const SHEET_ID = '1C_lofIzzMfmY6_VJouDkjVP-Fw0pTXpkeHKrzviarKo'
const SHEET_NAME = 'Leads'

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME)

    sheet.appendRow([
      new Date(),
      payload.fullName || '',
      payload.phone || '',
      payload.email || '',
      payload.course || '',
    ])

    return jsonResponse({ success: true })
  } catch (error) {
    return jsonResponse({
      success: false,
      message: error.message || 'Failed to save submission.',
    })
  }
}

function doGet() {
  return jsonResponse({ success: true, message: 'WingWise pricing form endpoint is active.' })
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
