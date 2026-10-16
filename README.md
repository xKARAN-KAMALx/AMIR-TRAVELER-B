# Amir Travelers Website · Final v3

A responsive, static HTML/CSS/JavaScript website. It does not require a build step or paid service. Keep the folder structure unchanged when uploading it to GitHub Pages, Netlify, or another static host.

## How to publish

1. Extract this ZIP.
2. Upload `index.html`, `style.css`, `script.js`, and the whole `assets` folder to the same website root.
3. Open the deployed website and test Booking, Share, language switch, theme switch, offer arrows, floating call/WhatsApp links, and Back to top.

## Image and icon file map

All image assets are inside `assets/images/`. Keep these exact names and extensions, or update the corresponding `src` / CSS path in `index.html` or `style.css`.

| File path | Used for | Replacement guidance |
|---|---|---|
| `assets/images/hero-background.jpg` | Large hero-section background | Use a wide car/fleet photo. Recommended landscape image, around 1600×900 or wider. |
| `assets/images/logo.svg` | Header logo and browser favicon | Custom vector logo. Replace with a new SVG using the same name to keep the website references working. |
| `assets/images/whatsapp-icon.svg` | Floating WhatsApp button and contact link | Custom vector WhatsApp-style icon. Replace with another SVG of the same name if required. |
| `assets/images/qr.png` | Google Pay payment QR section | **Placeholder only, not a real payment QR.** Replace it with your actual square Google Pay QR image, keeping the filename `qr.png`. Suggested size: 600×600 px or larger. |
| `assets/images/eeco.jpg` | Eeco car card | Replace with an Eeco photo. |
| `assets/images/xl6.jpg` | XL6 car card | Replace with an XL6 photo. |
| `assets/images/vitara-brezza.jpg` | Vitara Brezza car card | Replace with a Vitara Brezza photo. |
| `assets/images/brezza.jpg` | Brezza car card | Replace with a Brezza photo. |
| `assets/images/ertiga.jpg` | Ertiga car card | Replace with an Ertiga photo. |
| `assets/images/rumion.jpg` | Rumion car card | Replace with a Rumion photo. |
| `assets/images/agra.jpg` | Agra destination tile | Replace with a Taj Mahal / Agra travel photo. |
| `assets/images/mathura.jpg` | Mathura destination tile | Replace with a Mathura travel photo. |
| `assets/images/vrindavan.jpg` | Vrindavan destination tile | Replace with a Vrindavan travel photo. |
| `assets/images/varanasi.jpg` | Varanasi destination tile | Replace with a Varanasi / Ganga ghat photo. |
| `assets/images/dwarka.jpg` | Dwarka destination tile | Replace with a Dwarka travel photo. |
| `assets/images/haridwar.jpg` | Haridwar destination tile | Replace with a Haridwar / Ganga ghat photo. |
| `assets/images/rishikesh.jpg` | Rishikesh destination tile | Replace with a Rishikesh travel photo. |
| `assets/images/kanpur.jpg` | Kanpur destination tile | Replace with a Kanpur travel photo. |
| `assets/images/etawah.jpg` | Etawah destination tile | Replace with an Etawah travel photo. |

**Other icons:** the phone/call icon and Back-to-top arrow are inline SVG inside `index.html`, so they do not need separate image files. The logo and WhatsApp icon are handwritten SVG vector assets; no image generator is required to change the website content.

## Business details already added

- Owner: Amir Khan
- Father's name: Riyasat Khan
- Owner location: Mangupur, Bharthana, Etawah, Uttar Pradesh
- Developer: Karan Kamal
- Developer location: Mangupur, Bharthana, Etawah, Uttar Pradesh
- Developer contact: `9870931288`
- Owner Instagram: `@amir_7451_`

These details are displayed in the footer. Main base location is also shown in the header.

## Functionality notes

- English/Hindi toggle translates the principal UI labels, banners, payment section, destination descriptions, and booking modal.
- The Theme button switches the site to a genuinely black theme.
- The offer panel rotates automatically and includes previous/next controls. Selecting the banner opens the booking form with a potential discount estimate.
- Booking form opens WhatsApp with the booking details prepared. The visitor must press **Send** in WhatsApp to submit the request.
- Share opens a phone-number field and opens WhatsApp to the chosen number with the site URL ready to send.
- Floating Call, WhatsApp, and Back-to-top controls are on the right side.
- Rates are estimates as currently configured in `script.js`. Confirm actual prices before publishing them to customers.
- The “live active users” value is a demo animation, **not** a real visitor analytics counter.
- The 25% advance and 15% refundable policy lines are static site text. No payment is collected and no refund is automatically calculated by this website.
