/* Product, store and gallery data for Alberto Watch Company */

var LINEUPS = [
  { key: 'vintage', name: 'Vintage', tagline: 'Timeless classics with hand-wound heritage.' },
  { key: 'luxury',  name: 'Luxury',  tagline: 'Fine timepieces crafted for those who demand the best.' },
  { key: 'smart',   name: 'Smart Watches', tagline: 'Connected, intelligent and always on your wrist.' },
  { key: 'sports',  name: 'Sports', tagline: 'Built tough for water, track and trail.' },
  { key: 'clocks',  name: 'Clocks', tagline: 'Table, wall and mantel clocks for every room.' }
];

/* dial / case / strap colours are used by the SVG generator in main.js */
var PRODUCTS = [
  // ---- Vintage
  { id: 1,  line: 'vintage', brand: 'Bulova',  name: 'Heritage Hand-Wound',   price: 450,  movement: 'Manual winding', caseSize: '36 mm', strap: 'Brown leather', water: '30 m', dial: '#f3e9cf', metal: '#b08d57', band: '#6b4a2b', desc: 'A faithful revival of a 1960s dress watch with a cream dial, slim case and domed crystal.' },
  { id: 2,  line: 'vintage', brand: 'Citizen', name: 'Classic Automatic 1972', price: 520, movement: 'Automatic',      caseSize: '38 mm', strap: 'Tan leather',   water: '50 m', dial: '#e7dcc0', metal: '#a58a5a', band: '#8a5a33', desc: 'Self-winding movement with day-date display and a warm, aged-look dial.' },
  { id: 3,  line: 'vintage', brand: 'Alberto', name: 'Pocket Chronometer',     price: 640, movement: 'Manual winding', caseSize: '47 mm', strap: 'Gold-tone chain', water: 'Splash proof', dial: '#f7f1dd', metal: '#c9a24b', band: '#c9a24b', desc: 'An open-face pocket watch with Roman numerals and a hand-engraved case back.' },
  { id: 4,  line: 'vintage', brand: 'Bulova',  name: 'Railroad Officer',       price: 390, movement: 'Quartz',         caseSize: '40 mm', strap: 'Black leather', water: '30 m', dial: '#faf6ea', metal: '#8d8d8d', band: '#222222', desc: 'Bold railroad-style numerals for clear legibility, wrapped in a stainless steel case.' },
  // ---- Luxury
  { id: 5,  line: 'luxury',  brand: 'Rolex',   name: 'Datejust 41',            price: 9800, movement: 'Automatic',     caseSize: '41 mm', strap: 'Oyster steel',  water: '100 m', dial: '#0b3d2e', metal: '#d8d8d8', band: '#cfcfcf', desc: 'Iconic date window under a cyclops lens, with a fluted bezel and polished-brushed bracelet.' },
  { id: 6,  line: 'luxury',  brand: 'Rolex',   name: 'Submariner Date',        price: 10500, movement: 'Automatic',    caseSize: '41 mm', strap: 'Oyster steel',  water: '300 m', dial: '#111111', metal: '#d4d4d4', band: '#c4c4c4', desc: 'The benchmark dive watch with a unidirectional ceramic bezel and luminous markers.' },
  { id: 7,  line: 'luxury',  brand: 'Michael Kors', name: 'Lexington Gold',    price: 295,  movement: 'Quartz',         caseSize: '44 mm', strap: 'Gold-tone steel', water: '50 m', dial: '#2a2a2a', metal: '#c9a24b', band: '#c9a24b', desc: 'Oversized chronograph styling with a bold gold-tone bracelet for a statement look.' },
  { id: 8,  line: 'luxury',  brand: 'Alberto', name: 'Emerald Tourbillon',     price: 15400, movement: 'Tourbillon',    caseSize: '42 mm', strap: 'Green alligator', water: '30 m', dial: '#0f5a42', metal: '#c9a24b', band: '#12392c', desc: 'Our signature piece: a visible tourbillon cage beneath an emerald guilloche dial.' },
  // ---- Smart
  { id: 9,  line: 'smart',   brand: 'Alberto', name: 'Connect S1',             price: 249,  movement: 'Digital',        caseSize: '44 mm', strap: 'Silicone',      water: '50 m', dial: '#101820', metal: '#4a4a4a', band: '#1b1b1b', desc: 'AMOLED display, heart-rate tracking, sleep analysis and 5-day battery life.' },
  { id: 10, line: 'smart',   brand: 'Citizen', name: 'CZ Smart Eco',           price: 349,  movement: 'Digital',        caseSize: '46 mm', strap: 'Stainless steel', water: '50 m', dial: '#0e1a2b', metal: '#9aa3ad', band: '#9aa3ad', desc: 'Wear OS smartwatch with GPS, NFC payments and a high-contrast always-on screen.' },
  { id: 11, line: 'smart',   brand: 'Michael Kors', name: 'Access Gen 5',      price: 299,  movement: 'Digital',        caseSize: '44 mm', strap: 'Rose-gold steel', water: '30 m', dial: '#161616', metal: '#d29d8c', band: '#d29d8c', desc: 'Fashion-forward smartwatch with notifications, music control and interchangeable faces.' },
  { id: 12, line: 'smart',   brand: 'Bulova',  name: 'Precisionist Link',      price: 275,  movement: 'Hybrid',         caseSize: '42 mm', strap: 'Black leather', water: '100 m', dial: '#1d2733', metal: '#7f8b97', band: '#222222', desc: 'Hybrid analogue smartwatch with activity tracking and a smooth sweeping second hand.' },
  // ---- Sports
  { id: 13, line: 'sports',  brand: 'Citizen', name: 'Promaster Diver Eco-Drive', price: 325, movement: 'Eco-Drive',   caseSize: '44 mm', strap: 'Rubber',        water: '200 m', dial: '#0a2a5e', metal: '#9aa0a6', band: '#14213d', desc: 'Light-powered, never needs a battery. ISO-certified diver with luminous hands and markers.' },
  { id: 14, line: 'sports',  brand: 'Bulova',  name: 'Marine Star Chronograph', price: 425, movement: 'Quartz',        caseSize: '45 mm', strap: 'Steel bracelet', water: '100 m', dial: '#142b46', metal: '#c0c4c8', band: '#c0c4c8', desc: 'Three sub-dials, tachymeter bezel and a sapphire-coated crystal for race-day timing.' },
  { id: 15, line: 'sports',  brand: 'Michael Kors', name: 'Bradshaw Chrono',   price: 275,  movement: 'Quartz',         caseSize: '43 mm', strap: 'Silicone',      water: '100 m', dial: '#1b1b1b', metal: '#c9a24b', band: '#2a2a2a', desc: 'Sporty chronograph with a bold bezel and a comfortable silicone strap.' },
  { id: 16, line: 'sports',  brand: 'Alberto', name: 'Trail Master GMT',       price: 380,  movement: 'Automatic',     caseSize: '43 mm', strap: 'Nylon NATO',    water: '100 m', dial: '#2f3b2f', metal: '#8a8f8a', band: '#4b5a3c', desc: 'Dual time-zone GMT hand and a rugged case designed for long expeditions.' },
  // ---- Clocks
  { id: 17, line: 'clocks',  brand: 'Alberto', name: 'Mantel Westminster',     price: 220,  movement: 'Quartz chime',   caseSize: '28 cm', strap: 'Walnut wood',   water: 'n/a',  dial: '#f6efdc', metal: '#5a3b22', band: '#5a3b22', desc: 'Walnut mantel clock that plays the Westminster chime on each quarter hour.' },
  { id: 18, line: 'clocks',  brand: 'Bulova',  name: 'Brass Table Clock',      price: 135,  movement: 'Quartz',         caseSize: '14 cm', strap: 'Polished brass', water: 'n/a', dial: '#fffaf0', metal: '#c9a24b', band: '#c9a24b', desc: 'Compact desk clock with a brass finish and a silent sweep movement.' },
  { id: 19, line: 'clocks',  brand: 'Citizen', name: 'Wall Clock Eco-Drive',   price: 180,  movement: 'Eco-Drive',      caseSize: '35 cm', strap: 'Stainless steel', water: 'n/a', dial: '#ffffff', metal: '#8d8d8d', band: '#8d8d8d', desc: 'Large wall clock with bold numerals; light-powered so batteries are never needed.' },
  { id: 20, line: 'clocks',  brand: 'Alberto', name: 'Grandfather Heritage',   price: 1850, movement: 'Weight-driven',  caseSize: '190 cm', strap: 'Mahogany',     water: 'n/a', dial: '#f2e8c9', metal: '#4a2c17', band: '#4a2c17', desc: 'Floor-standing longcase clock with a brass pendulum and a hand-polished mahogany cabinet.' }
];

var TECHNOLOGY = [
  { icon: '⚙️', title: 'Automatic Movement', text: 'A rotor winds the mainspring from the motion of your wrist, so there is no battery and no manual winding.' },
  { icon: '🔋', title: 'Quartz Precision', text: 'A battery-driven quartz crystal vibrates 32,768 times a second, keeping time to within seconds per month.' },
  { icon: '☀️', title: 'Eco-Drive Solar', text: 'Light from any source is converted to energy and stored, powering the watch for months in total darkness.' },
  { icon: '💎', title: 'Sapphire Crystal', text: 'Scratch-resistant synthetic sapphire protects the dial and stays clear for decades.' },
  { icon: '🌊', title: 'Water Resistance', text: 'Gaskets, screw-down crowns and pressure-tested cases give protection from splashes up to deep-sea dives.' },
  { icon: '📱', title: 'Smart Connectivity', text: 'Bluetooth, GPS, NFC and optical heart-rate sensors bring notifications and health tracking to your wrist.' }
];

var STORES = [
  { city: 'Karachi',  name: 'Alberto Flagship - Clifton', address: 'Block 4, Clifton, Karachi', phone: '+92 21 3555 0101', hours: 'Mon-Sat 11:00 - 21:00' },
  { city: 'Karachi',  name: 'Alberto Dolmen Mall',        address: 'Dolmen Mall, Tariq Road, Karachi', phone: '+92 21 3555 0102', hours: 'Daily 12:00 - 22:00' },
  { city: 'Lahore',   name: 'Alberto Gulberg',            address: 'MM Alam Road, Gulberg III, Lahore', phone: '+92 42 3555 0103', hours: 'Mon-Sat 11:00 - 21:00' },
  { city: 'Islamabad', name: 'Alberto Centaurus',         address: 'Centaurus Mall, F-8, Islamabad', phone: '+92 51 3555 0104', hours: 'Daily 12:00 - 22:00' },
  { city: 'Dubai',    name: 'Alberto Gold Souk',          address: 'Gold Souk, Deira, Dubai, UAE', phone: '+971 4 555 0105', hours: 'Daily 10:00 - 23:00' }
];

var SUPPORT_FAQ = [
  { q: 'How long is the warranty?', a: 'Every new watch carries a 2-year international warranty covering manufacturing defects. Luxury pieces include 5 years.' },
  { q: 'Do you repair watches bought elsewhere?', a: 'Yes. Our workshop services mechanical, quartz and smart watches of all major brands. Bring it in for a free estimate.' },
  { q: 'Can you appraise my watch?', a: 'Our certified appraisers provide written valuations for insurance or resale. Appointments take about 30 minutes.' },
  { q: 'How often should a mechanical watch be serviced?', a: 'We recommend a full service every 4 to 5 years to keep the movement accurate and the seals intact.' },
  { q: 'What is your return policy?', a: 'Unworn watches with original packaging can be returned within 14 days for a full refund.' }
];
