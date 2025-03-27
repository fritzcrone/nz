/*
Skript für die Neuseelandreise
*/
// Karte initialiesieren
let map = L.map('map').setView([-45.874167, 170.503611], 13);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([-45.874167, 170.503611]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();