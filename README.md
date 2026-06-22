# WingWise

Marketing site for WingWise Aviation Academy, built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Other scripts:

- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Pricing form → Google Sheets

The **Get Detailed Pricing** form in `src/components/Pricing.tsx` sends submissions to a Google Sheet through a Google Apps Script web app.

This is a static frontend, so Google credentials are **not** stored in the React app. Instead:

1. The browser POSTs form data to a public Apps Script URL.
2. Apps Script appends a row to the spreadsheet using the Google Sheets API via `SpreadsheetApp`.

### Related files

| File | Purpose |
| --- | --- |
| `src/components/Pricing.tsx` | Pricing form UI |
| `src/services/submitPricingForm.ts` | Sends form data to the Apps Script web app |
| `google-apps-script/pricing-form.gs` | Apps Script that writes rows to the sheet |
| `.env.example` | Example environment variable for local setup |

### 1. Create the Google Sheet

1. Create a new Google Sheet.
2. Add these column headers in **row 1**:

   | A | B | C | D | E |
   | --- | --- | --- | --- | --- |
   | Timestamp | Full Name | Phone | Email | Course |

3. Copy the spreadsheet ID from the URL:

   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```

### 2. Add the Apps Script

1. In the Google Sheet, go to **Extensions → Apps Script**.
2. Replace the default code with the contents of `google-apps-script/pricing-form.gs`.
3. Update these values at the top of the script:
   - `SHEET_ID` — your spreadsheet ID from step 1
   - `SHEET_NAME` — the tab name (default is `Sheet1`)
4. Save the project.

### 3. Deploy the web app

1. Click **Deploy → New deployment**.
2. Select type **Web app**.
3. Use these settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorize the script when prompted.
5. Copy the **Web app URL**. It will look like:

   ```
   https://script.google.com/macros/s/DEPLOYMENT_ID/exec
   ```

### 4. Configure the frontend

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Set the web app URL in `.env`:

   ```env
   VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

3. Restart the dev server so Vite loads the new env variable:

   ```bash
   npm run dev
   ```

`.env` is gitignored. Do not commit it.

### 5. Test the integration

1. Open the site and scroll to **Get Detailed Pricing**.
2. Submit the form with test data.
3. Confirm a new row appears in the Google Sheet.

You can also verify the endpoint directly by opening the web app URL in a browser. A successful response looks like:

```json
{ "success": true, "message": "WingWise pricing form endpoint is active." }
```

### Updating the Apps Script later

If you change `google-apps-script/pricing-form.gs`:

1. Paste the updated code into Apps Script and save.
2. Go to **Deploy → Manage deployments**.
3. Edit the existing deployment and choose **New version**.
4. Deploy again.

The web app URL usually stays the same unless you create a brand-new deployment.

### Production deployment

Set the same environment variable in your hosting provider:

```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Then rebuild and redeploy the site. Vite injects `VITE_*` variables at build time, so the variable must be present when running `npm run build`.

### Troubleshooting

| Issue | What to check |
| --- | --- |
| Form says submission is not configured | `VITE_GOOGLE_SHEETS_WEB_APP_URL` is missing from `.env`, or the dev server was not restarted |
| Submission fails in the browser | Web app deployment access is set to **Anyone** |
| Rows are not appearing in the sheet | `SHEET_ID` and `SHEET_NAME` in Apps Script match the target spreadsheet |
| Changes to Apps Script have no effect | Deploy a **new version** of the web app |
| CORS or network errors | The frontend uses `Content-Type: text/plain` on purpose to avoid preflight issues with Apps Script |

### Form payload

Each submission sends this JSON body:

```json
{
  "fullName": "John Doe",
  "phone": "+91 98765 43210",
  "email": "you@example.com",
  "course": "Cabin Crew Training"
}
```

Apps Script stores it as:

| Timestamp | Full Name | Phone | Email | Course |
| --- | --- | --- | --- | --- |
| auto-generated | from form | from form | from form | from form |
