var map = L.map('map').setView([24.28, -102.12], 5);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

/*var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map).bindPopup('I am a circle.');

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup('I am a polygon.');*/

var islaCozumel = L.polygon([
    [20.26, -86.98],
    [20.37, -87.03],
    [20.50, -86.97],
    [20.56, -86.90],
    [20.56, -86.80],
    [20.59, -86.72],
    [20.49, -86.76],
    [20.36, -86.86]
]).addTo(map).bindPopup('Isla Cozumel');
var arrecifeCozumel = L.polygon([
    [20.511636, -86.95646],
    [20.52, -86.99],
    [20.46, -87.04],
    [20.39, -87.05],
    [20.34, -87.08],
    [20.28, -87.07],
    [20.24, -87.01],
    [20.24, -86.92],
    [20.32, -86.86],
    [20.332917, -86.89235],
    [20.259963, -86.979972],
    [20.37, -87.03],
    [20.50, -86.97]
]).addTo(map).bindPopup('Arrecife de Cozumel');
var arrecifePuertoMorelos = L.polygon([
    [20.829293, -86.887093],
    [20.841166, -86.877136],
    [20.843091, -86.878767],
    [20.892133, -86.86012],
    [20.893657, -86.857245],
    [20.899711, -86.851537],
    [20.894138, -86.844349],
    [20.860015, -86.819887],
    [20.812606, -86.855507]
]).addTo(map).bindPopup('Arrecife de Puerto Morelos');

// Coloración del mapeado 20.511445, -86.957817
islaCozumel.setStyle({color: 'red', fillColor: 'red'});
arrecifeCozumel.setStyle({color: 'orange', fillColor: 'orange'});
arrecifePuertoMorelos.setStyle({color: 'orange', fillColor: 'orange'});


var popup = L.popup()
    .setLatLng([24.28, -102.12])
    .setContent('I am a standalone popup.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

