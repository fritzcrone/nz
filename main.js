/*
Skript für die Neuseelandreise
*/
// Karte initialiesieren
let lat = -45.874167;
let lng = 170.503611;
let zoom = 13;

let stop = {
    nr: 23,
    title: "Dunedin",
    user: "fritzcrone",
    lat: -45.874167,
    lng: 170.503611,
    zoom: 13
};

let map = L.map('map').setView([lat, lng], zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup(`
    <h2>Dunedin</h2>
    <ul>
        <li>Geogr. Breite: ${lat.toFixed(3)}°</li>
        <li>Geogr. Länge: ${lng.toFixed(3)}°</li>
    </ul>
`).openPopup();

let course = {
    title: "Webmapping",
    semester: "25S",
    stunden: 3,
    typ: "VU"
};

console.log("title", course.title);
console.log("semester", course.semester);
console.log("stunden", course.stunden);
console.log("typ", course.typ);
