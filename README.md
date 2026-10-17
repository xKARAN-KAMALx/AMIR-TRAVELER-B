# Amir Travelers Website · Final v4

## Files
- `index.html` — website structure
- `style.css` — styling and responsive layout
- `script.js` — language switch, booking fare calculation, share, and UPI advance
- `assets/images/` — all existing car/place/hero images and icons

## Images kept from previous version
`hero-background.jpg`, `whatsapp-icon.svg`, `qr.png`, `eeco.jpg`, `xl6.jpg`, `vitara-brezza.jpg`, `brezza.jpg`, `ertiga.jpg`, `rumion.jpg`, `agra.jpg`, `mathura.jpg`, `vrindavan.jpg`, `varanasi.jpg`, `dwarka.jpg`, `haridwar.jpg`, `rishikesh.jpg`, `kanpur.jpg`, `etawah.jpg`.

## Logo update
The logo is now referenced as `assets/images/logo.png` instead of `logo.svg`. A PNG copy is included.

## New updates
- Added Download Our App under Booking and Share, linked to the provided Google Drive URL.
- Added PAY HERE below the QR, opening a UPI intent for `7451952707@ptsbi`.
- Booking button now says Book Here.
- Distance placeholder is translated: English “Round-trip total distance”, Hindi “आने-जाने की कुल दूरी”.
- A 25% advance payment amount is calculated from the current estimated fare and a UPI button opens with that amount prefilled. If an eligible first-trip discount is active, the advance is calculated from the discounted estimate.
- Added Hindi translations for all newly added labels.

## Important payment note
UPI app opening and support for prefilled amounts depend on the user's phone and payment app. The website cannot verify whether a payment succeeded. The QR image is carried forward from the previous version and should be replaced with the owner's actual square QR if needed.

## Publish
Keep `index.html`, `style.css`, `script.js`, and the complete `assets` folder together in the repository root.
