// Inicializar mapa
var map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: false
}).setView([40.4168, -3.7038], 6);

// Capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 18,
}).addTo(map);

// Marcadores de ejemplo (España)
const locations = [
    { coords: [40.4168, -3.7038], name: "Madrid" },
    { coords: [43.3623, -8.4115], name: "A Coruña" },
    { coords: [39.4699, -0.3763], name: "Valencia" },
];

locations.forEach(loc => {
    L.marker(loc.coords).addTo(map).bindPopup(loc.name);
});

