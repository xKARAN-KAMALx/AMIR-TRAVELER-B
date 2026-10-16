const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let lang = "en";
let offerMode = false;
let selectedOffer = 0;
let currentOffer = 0;

const SITE_URL = "https://xkaran-kamalx.github.io/AMIR-TRAVELER-B/#home";
const WHATSAPP_BOOKING_NUMBER = "917451952707";

const translations = {
  en: {
    tagline: "Your journey, our responsibility", baseLabel: "Base:", home: "Home", carsNav: "Cars", destNav: "Destinations", paymentNav: "Payment",
    changeLanguage: "Change language", changeTheme: "Change theme", theme: "Theme", welcome: "WELCOME TO AMIR TRAVELERS",
    heroTitle: "WELCOME TO<br><em>AMIR TRAVELERS</em>", heroSub: "Reliable rides for family trips, city travel and spiritual journeys across India.",
    booking: "Booking", share: "Share", safe: "Comfortable travel", timely: "Trusted service", available: "24×7 Availability", liveUsers: "live active users",
    firstTrip: "FIRST TRIP OFFER", heroFoot: "MADE FOR THE MILES THAT MATTER", trust1Title: "Available 24×7", trust1Desc: "Plan your ride anytime", trust2Title: "Comfort first", trust2Desc: "Family-friendly travel", trust3Title: "From Mangupur", trust3Desc: "Bharthana, Etawah, UP",
    paymentTitle: "PAYMENT INFORMATION", qrHeading: "Google Pay payment QR", qrDesc: "Confirm your booking details with Amir Travelers before making a payment.",
    advance: "25% advance payment is required to confirm your booking.", refund: "Only 15% is refundable if you cancel your booking.", replaceQR: "Put your own square Google Pay QR image at assets/images/qr.png.",
    ourFleet: "OUR FLEET", carsHeading: "Choose your <em>travel car</em>", eecoDesc: "Non-AC · Economy", driver800: "+ ₹800 driver charge", driver1000: "+ ₹1,000 driver charge", acFamily: "AC · Family MPV", acSuv: "AC · SUV", ac7: "AC · 7-seater",
    destEyebrow: "PLACES TO EXPLORE", destHeading: "Journeys to <em>remember</em>", agraNote: "Taj Mahal & heritage", mathuraNote: "Krishna Janmabhoomi", vrindavanNote: "Temples & spiritual visits", varanasiNote: "Ghats of the Ganga", dwarkaNote: "Coastal pilgrimage", haridwarNote: "Ganga ghats", rishikeshNote: "River & hill views", kanpurNote: "City travel", etawahNote: "Local rides",
    contactUs: "CONTACT US", readyTrip: "Ready for your next trip?", ownerDetails: "Owner details", ownerName: "Name:", fatherName: "Father's name:", address: "Address:", developerDetails: "Developer details", callWhatsapp: "Call / WhatsApp:", ratesNote: "Rates may change. Toll and parking extra.",
    shareTitle: "Share Amir Travelers", shareDesc: "Enter the receiver's WhatsApp number to share our website.", phoneNumber: "WhatsApp number", shareWhatsApp: "Share to WhatsApp ↗", shareHint: "WhatsApp opens with the website link ready to send.",
    bookingEyebrow: "TRIP ENQUIRY", bookingTitle: "Booking details", name: "Name *", mobile: "Mobile number *", pickup: "Pickup location *", destination: "Destination *", tripType: "Trip type", distance: "Total trip distance (km) *", carCount: "Number of cars *", passengers: "Passengers (optional)", travelDate: "Travel date (optional)", extra: "Additional info (optional)", estimatedFare: "Estimated total fare", potentialPrice: "Potential price if eligible", continueWhatsApp: "Continue with WhatsApp ↗", formGuide: "Check all booking details when WhatsApp opens, then press Send to deliver your request.",
    oneway: "One-way", fullroute: "Full route / round trip", discountNone: "No distance-based discount for 0–99 km.", discountOffer: "Potential first-trip discount: ₹{amount}. Eligibility must be confirmed by the owner.", shareError: "Enter a valid WhatsApp number with country code if needed.", distHint: "The total distance is counted once for the whole trip.", perCar: "Car", noDistance: "Enter distance and choose vehicles.", bookingRequest: "Hello Amir Travelers! I would like to request a trip booking."
  },
  hi: {
    tagline: "आपका सफर, हमारी ज़िम्मेदारी", baseLabel: "बेस:", home: "होम", carsNav: "गाड़ियाँ", destNav: "जगहें", paymentNav: "पेमेंट",
    changeLanguage: "भाषा बदलें", changeTheme: "थीम बदलें", theme: "थीम", welcome: "AMIR TRAVELERS में आपका स्वागत है",
    heroTitle: "WELCOME TO<br><em>AMIR TRAVELERS</em>", heroSub: "परिवार की यात्राओं, शहर के सफर और भारत की धार्मिक यात्राओं के लिए भरोसेमंद राइड।",
    booking: "बुकिंग", share: "शेयर करें", safe: "आरामदायक सफर", timely: "भरोसेमंद सेवा", available: "24×7 उपलब्ध", liveUsers: "लाइव एक्टिव यूज़र्स",
    firstTrip: "पहली ट्रिप का ऑफर", heroFoot: "हर ज़रूरी सफर के लिए", trust1Title: "24×7 उपलब्ध", trust1Desc: "कभी भी राइड प्लान करें", trust2Title: "आराम सबसे पहले", trust2Desc: "परिवार के लिए सुविधाजनक", trust3Title: "मंगूपुर से सेवा", trust3Desc: "भरथना, इटावा, उत्तर प्रदेश",
    paymentTitle: "पेमेंट की जानकारी", qrHeading: "Google Pay पेमेंट QR", qrDesc: "पेमेंट करने से पहले Amir Travelers से बुकिंग की जानकारी कन्फर्म करें।",
    advance: "बुकिंग कन्फर्म करने के लिए 25% एडवांस पेमेंट ज़रूरी है।", refund: "बुकिंग कैंसल करने पर केवल 15% रिफंडेबल है।", replaceQR: "अपना square Google Pay QR assets/images/qr.png नाम से रखें।",
    ourFleet: "हमारी गाड़ियाँ", carsHeading: "अपनी <em>यात्रा की गाड़ी</em> चुनें", eecoDesc: "नॉन-AC · किफायती", driver800: "+ ₹800 ड्राइवर चार्ज", driver1000: "+ ₹1,000 ड्राइवर चार्ज", acFamily: "AC · फैमिली MPV", acSuv: "AC · SUV", ac7: "AC · 7 सीटर",
    destEyebrow: "घूमने की जगहें", destHeading: "यादगार <em>सफर</em>", agraNote: "ताजमहल और ऐतिहासिक स्थल", mathuraNote: "कृष्ण जन्मभूमि", vrindavanNote: "मंदिर और धार्मिक यात्रा", varanasiNote: "गंगा के घाट", dwarkaNote: "समुद्र किनारे तीर्थ", haridwarNote: "गंगा के घाट", rishikeshNote: "नदी और पहाड़ी नज़ारे", kanpurNote: "शहर की यात्रा", etawahNote: "स्थानीय यात्रा",
    contactUs: "संपर्क करें", readyTrip: "अगली यात्रा के लिए तैयार हैं?", ownerDetails: "ओनर की जानकारी", ownerName: "नाम:", fatherName: "पिता का नाम:", address: "पता:", developerDetails: "डेवलपर की जानकारी", callWhatsapp: "कॉल / WhatsApp:", ratesNote: "किराया बदल सकता है। टोल और पार्किंग अलग।",
    shareTitle: "Amir Travelers शेयर करें", shareDesc: "वेबसाइट शेयर करने के लिए सामने वाले का WhatsApp नंबर डालें।", phoneNumber: "WhatsApp नंबर", shareWhatsApp: "WhatsApp पर शेयर करें ↗", shareHint: "WhatsApp में वेबसाइट लिंक भेजने के लिए तैयार मिलेगा।",
    bookingEyebrow: "यात्रा की जानकारी", bookingTitle: "बुकिंग की जानकारी", name: "नाम *", mobile: "मोबाइल नंबर *", pickup: "पिकअप की जगह *", destination: "मंज़िल *", tripType: "यात्रा का प्रकार", distance: "पूरी यात्रा की दूरी (km) *", carCount: "कितनी गाड़ियाँ चाहिए *", passengers: "यात्रियों की संख्या (वैकल्पिक)", travelDate: "यात्रा की तारीख (वैकल्पिक)", extra: "अन्य जानकारी (वैकल्पिक)", estimatedFare: "कुल अनुमानित किराया", potentialPrice: "पात्र होने पर संभावित कीमत", continueWhatsApp: "WhatsApp पर आगे बढ़ें ↗", formGuide: "WhatsApp खुलने पर बुकिंग की जानकारी जाँचें और रिक्वेस्ट भेजने के लिए Send दबाएँ।",
    oneway: "वन-वे", fullroute: "पूरा रूट / आने-जाने की यात्रा", discountNone: "0–99 km पर दूरी के आधार पर छूट नहीं है।", discountOffer: "पहली ट्रिप की संभावित छूट: ₹{amount}। ओनर पात्रता कन्फर्म करेंगे।", shareError: "सही WhatsApp नंबर डालें। ज़रूरत हो तो country code भी डालें।", distHint: "पूरी ट्रिप की कुल दूरी एक बार गिनी जाएगी।", perCar: "गाड़ी", noDistance: "दूरी डालें और गाड़ियाँ चुनें।", bookingRequest: "नमस्ते Amir Travelers! मुझे ट्रिप बुकिंग की जानकारी चाहिए।"
  }
};

const offers = [
  { amount: 100, min: 200, max: 299, en: "₹100 OFF on your first 200–299 km trip", hi: "पहली 200–299 km की ट्रिप पर ₹100 OFF", subEn: "Plan your first journey with us", subHi: "हमारे साथ अपनी पहली यात्रा प्लान करें" },
  { amount: 50, min: 100, max: 199, en: "₹50 OFF on your first 100–199 km trip", hi: "पहली 100–199 km की ट्रिप पर ₹50 OFF", subEn: "A little saving for your first ride", subHi: "आपकी पहली राइड पर थोड़ी बचत", },
  { amount: 150, min: 300, max: Infinity, en: "₹150 OFF on your first 300+ km trip", hi: "पहली 300+ km की ट्रिप पर ₹150 OFF", subEn: "Longer journey, extra savings", subHi: "लंबी यात्रा पर ज़्यादा बचत" }
];

function renderOffer(index) {
  currentOffer = (index + offers.length) % offers.length;
  const offer = offers[currentOffer];
  const banner = $(".offer-banner");
  banner.dataset.offer = String(offer.amount);
  banner.dataset.min = String(offer.min);
  banner.dataset.max = String(offer.max);
  banner.querySelector("strong").textContent = lang === "hi" ? offer.hi : offer.en;
  banner.querySelector("small").textContent = lang === "hi" ? offer.subHi : offer.subEn;
  banner.classList.add("active");
  banner.setAttribute("aria-label", (lang === "hi" ? offer.hi : offer.en) + ". Click to open booking.");
}

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  $$('[data-i18n]').forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  $("#langToggle").textContent = lang === "en" ? "हिन्दी" : "English";
  renderOffer(currentOffer);
  renderCarChoices();
  updateFare();
}

$("#langToggle").addEventListener("click", () => setLanguage(lang === "en" ? "hi" : "en"));
$("#menuLang").addEventListener("click", () => {
  setLanguage(lang === "en" ? "hi" : "en");
  $("#menuPanel").hidden = true;
  $("#menuBtn").setAttribute("aria-expanded", "false");
});

function toggleTheme() {
  const isBlack = document.body.classList.toggle("black-theme");
  const label = isBlack ? (lang === "hi" ? "● ब्लैक" : "● Black") : (lang === "hi" ? "◐ थीम" : "◐ Theme");
  $("#themeToggle").innerHTML = `<span aria-hidden="true">${isBlack ? "●" : "◐"}</span> <span>${label.replace(/^● |^◐ /, "")}</span>`;
  $("#themeToggle").setAttribute("aria-label", isBlack ? "Switch to navy and gold theme" : "Switch to full black theme");
}
$("#themeToggle").addEventListener("click", toggleTheme);
$("#menuTheme").addEventListener("click", () => {
  toggleTheme();
  $("#menuPanel").hidden = true;
  $("#menuBtn").setAttribute("aria-expanded", "false");
});
$("#menuBtn").addEventListener("click", () => {
  $("#menuPanel").hidden = !$("#menuPanel").hidden;
  $("#menuBtn").setAttribute("aria-expanded", String(!$("#menuPanel").hidden));
});
$$("#menuPanel a").forEach(link => link.addEventListener("click", () => {
  $("#menuPanel").hidden = true;
  $("#menuBtn").setAttribute("aria-expanded", "false");
}));

function openModal(id) {
  $("#" + id).hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  $("#" + id).hidden = true;
  document.body.style.overflow = "";
}
$$('[data-close]').forEach(button => button.addEventListener("click", () => closeModal(button.dataset.close)));
$$(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => {
  if (event.target === backdrop) closeModal(backdrop.id);
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") $$(".modal-backdrop").forEach(modal => { if (!modal.hidden) closeModal(modal.id); });
});

$("#bookingBtn").addEventListener("click", () => openBooking(false, 0));
$("#shareBtn").addEventListener("click", () => openModal("shareModal"));
$(".offer-banner").addEventListener("click", () => openBooking(true, offers[currentOffer].amount));
$("#prevOffer").addEventListener("click", () => renderOffer(currentOffer - 1));
$("#nextOffer").addEventListener("click", () => renderOffer(currentOffer + 1));
setInterval(() => renderOffer(currentOffer + 1), 4200);

function openBooking(fromOffer, amount) {
  offerMode = fromOffer;
  selectedOffer = amount;
  $("#offerNote").hidden = !fromOffer;
  $("#discountBox").hidden = !fromOffer;
  if (fromOffer) {
    $("#offerNote").textContent = lang === "hi"
      ? "पहली ट्रिप का ऑफर पात्रता कन्फर्म होने पर ही लागू होगा। कुल दूरी के अनुसार छूट अनुमानित दिखाई जाएगी।"
      : "First-trip offer is subject to eligibility confirmation. The estimated discount is based on total trip distance.";
  }
  renderCarChoices();
  updateFare();
  openModal("bookingModal");
}

const rate = { eeco: 8, xl6: 10, vitara: 10, brezza: 10, ertiga: 10, rumion: 10 };
const driver = { eeco: 800, xl6: 1000, vitara: 1000, brezza: 1000, ertiga: 1000, rumion: 1000 };
const vehicleNames = { eeco: "Maruti Suzuki Eeco", xl6: "Maruti Suzuki XL6", vitara: "Vitara Brezza", brezza: "Maruti Suzuki Brezza", ertiga: "Maruti Suzuki Ertiga", rumion: "Toyota Rumion" };
const vehicleLabels = [
  ["eeco", "Eeco · ₹8/km + ₹800"], ["xl6", "XL6 · ₹10/km + ₹1,000"], ["vitara", "Vitara Brezza · ₹10/km + ₹1,000"],
  ["brezza", "Brezza · ₹10/km + ₹1,000"], ["ertiga", "Ertiga · ₹10/km + ₹1,000"], ["rumion", "Rumion · ₹10/km + ₹1,000"]
];

function renderCarChoices() {
  if (!$("#carChoices")) return;
  const numberOfCars = Number($("#carCount").value) || 1;
  const previous = $$(".car-select").map(select => select.value);
  $("#carChoices").innerHTML = Array.from({ length: numberOfCars }, (_, index) => {
    const selected = previous[index] || "eeco";
    const options = vehicleLabels.map(([value, label]) => `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`).join("");
    return `<div class="car-choice"><label>${translations[lang].perCar} ${index + 1}</label><select class="car-select" aria-label="Vehicle ${index + 1}">${options}</select></div>`;
  }).join("");
  $$(".car-select").forEach(select => select.addEventListener("change", updateFare));
  updateFare();
}
$("#carCount").addEventListener("change", renderCarChoices);
$("#distance").addEventListener("input", updateFare);

function formatCurrency(amount) {
  return new Intl.NumberFormat(lang === "hi" ? "hi-IN" : "en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}
function discountFor(km) { return km < 100 ? 0 : km < 200 ? 50 : km < 300 ? 100 : 150; }
function updateFare() {
  if (!$("#carChoices")) return;
  const km = Number($("#distance").value) || 0;
  let total = 0;
  const breakdown = [];
  $$(".car-select").forEach((select, index) => {
    const subtotal = km * rate[select.value] + driver[select.value];
    total += subtotal;
    breakdown.push(`${index + 1}. ${vehicleNames[select.value]}: ${formatCurrency(subtotal)}`);
  });
  $("#fareTotal").textContent = formatCurrency(total);
  $("#fareBreakdown").textContent = km > 0 ? breakdown.join(" · ") : translations[lang].noDistance;
  if (offerMode) {
    const discount = discountFor(km);
    $("#discountBox").hidden = false;
    $("#discountedFare").textContent = formatCurrency(Math.max(0, total - discount));
    $("#discountText").textContent = discount ? translations[lang].discountOffer.replace("{amount}", discount) : translations[lang].discountNone;
  } else {
    $("#discountBox").hidden = true;
  }
}

$("#shareWhatsApp").addEventListener("click", () => {
  let digits = $("#shareNumber").value.trim().replace(/\D/g, "");
  if (digits.length === 10) digits = "91" + digits;
  else if (digits.length === 11 && digits.startsWith("0")) digits = "91" + digits.slice(1);
  if (digits.length < 10 || digits.length > 15) {
    alert(translations[lang].shareError);
    $("#shareNumber").focus();
    return;
  }
  const message = lang === "hi"
    ? `Amir Travelers के साथ अपनी अगली यात्रा प्लान करें: ${SITE_URL}`
    : `Plan your next trip with Amir Travelers: ${SITE_URL}`;
  const url = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  closeModal("shareModal");
});

$("#bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const km = Number($("#distance").value);
  if (!Number.isFinite(km) || km < 1) {
    alert(lang === "hi" ? "कृपया यात्रा की दूरी दर्ज करें।" : "Please enter the trip distance.");
    $("#distance").focus();
    return;
  }
  let total = 0;
  const lines = [];
  $$(".car-select").forEach((select, index) => {
    const subtotal = km * rate[select.value] + driver[select.value];
    total += subtotal;
    lines.push(`${index + 1}. ${vehicleNames[select.value]}: ${km} km × ₹${rate[select.value]} + driver ₹${driver[select.value]} = ₹${subtotal}`);
  });
  const discount = offerMode ? discountFor(km) : 0;
  const pieces = [
    translations[lang].bookingRequest,
    `Name: ${$("#custName").value}`,
    `Mobile: ${$("#custMobile").value}`,
    `Pickup: ${$("#pickup").value}`,
    `Destination: ${$("#destination").value}`,
    `Trip type: ${$("#tripType").selectedOptions[0].textContent}`,
    `Total trip distance: ${km} km`,
    `Cars:\n${lines.join("\n")}`,
    `Passengers: ${$("#passengers").value || "Not specified"}`,
    `Date: ${$("#travelDate").value || "Not specified"}`,
    `Extra: ${$("#extra").value || "None"}`,
    `Estimated total: ₹${total}`
  ];
  if (offerMode) pieces.push(`Potential discount if eligible: ₹${discount}`, `Potential price if eligible: ₹${Math.max(0, total - discount)}`, "First-trip offer eligibility to be confirmed.");
  pieces.push("Toll and parking extra.", "Please confirm availability and final fare. I will press Send in WhatsApp to submit this booking request.");
  const message = pieces.join("\n");
  window.open(`https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  closeModal("bookingModal");
});

window.addEventListener("scroll", () => $("#backTop").classList.toggle("show", window.scrollY > 260), { passive: true });
$("#backTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
$("#year").textContent = new Date().getFullYear();
let demoCount = 128;
setInterval(() => {
  demoCount = 50 + Math.floor(Math.random() * 451);
  $("#userCount").textContent = String(demoCount);
}, 4000);

renderOffer(0);
renderCarChoices();
