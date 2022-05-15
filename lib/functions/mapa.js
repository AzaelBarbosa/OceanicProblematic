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
var YumBalam = L.polygon([
    [21.576996, -87.480011],
    [21.647217, -87.19986],
    [21.645941, -87.092743],
    [21.551453, -87.09137],
    [21.43006, -87.088623],
    [21.389147, -87.278137],
    [21.458181, -87.508163]
]).addTo(map).bindPopup('Yum Balam');
var arrecifeXcalak = L.polygon([
    [18.185527, -87.847495],
    [18.175049, -87.823677],
    [18.318678, -87.790718],
    [18.389063, -87.761021],
    [18.399814, -87.774453],
    [18.361287, -87.801275],
    [18.30564, -87.83432]
]).addTo(map).bindPopup('Arrecifes de Xcalak');
var pntCancunNizuc = L.polygon([
    [21.259221, -86.751051],
    [21.257541, -86.764698],
    [21.204578, -86.760406],
    [21.200737, -86.732941],
    [21.138947, -86.748734],
    [21.123896, -86.75148],
    [21.123256, -86.698952],
    [21.203938, -86.711226],
    [21.203338, -86.714187],
    [21.252902, -86.75148],
    [21.258561, -86.752253]
]).addTo(map).bindPopup('COSTA OCC. DE I MUJERES, PTA CANCUN Y PTA NIZUC');
var islaContoy = L.polygon([
    [21.532292, -86.809845],
    [21.456583, -86.794395],
    [21.457862, -86.771736],
    [21.535166, -86.797485]
]).addTo(map).bindPopup('Isla de los Pajaros - Isla Contoy');
var tulum = L.polygon([
    [20.202279, -87.430229],
    [20.198091, -87.41787],
    [20.166027, -87.450142],
    [20.192532, -87.440314]
]).addTo(map).bindPopup('Tulum');
var arrecifeSiankaan = L.polygon([
    [19.08548, -87.473145],
    [19.304663, -87.415466],
    [19.596019, -87.373581],//punto medio
    [19.778334, -87.435379],
    [19.928814, -87.399673],
    [20.059156, -87.44018],
    [20.126866, -87.434692],
    [20.126141, -87.414308],
    [19.931396, -87.351608],
    [19.596019, -87.373581],
    [19.304663, -87.373581]
]).addTo(map).bindPopup('ARRECIFES DE SIAN KA`AN');
var bancoChinchorro = L.circle([18.59248, -87.333498], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 10000
}).addTo(map).bindPopup('BANCO CHINCHORRO');
var Siankaan = L.polygon([
    [19.085465, -87.473123],
    [19.086692, -87.984733],
    [19.109204, -87.978258],
    [19.121693, -87.99624],
    [19.163654, -88.019199],
    [19.164222, -88.039799],
    [19.188299, -88.036366],
    [19.193, -88.010702],
    [19.908801, -87.769775],
    [20.124932, -87.477951],
    [20.126946, -87.435036],
    [20.059076, -87.440228],
    [19.928809, -87.399695],
    [19.778355, -87.4354],
    [19.596019, -87.373581],
    [19.304825, -87.415895],
]).addTo(map).bindPopup('SIAN KA`AN');
var tiburonBallena = L.polygon([
    [21.589227, -87.091756],
    [21.554007, -87.012405],
    [21.502269, -86.962967],
    [21.564225, -86.818085],
    [21.749296, -86.811218],
    [21.758224, -87.459412],
    [21.577046, -87.479979],
    [21.647232, -87.199844],
    [21.645926, -87.092711]
]).addTo(map).bindPopup('TIBURON BALLENA');
var manglarNichupte = L.polygon([
    [21.034679, -86.81911],
    [21.047016, -86.831818],
    [21.150475, -86.811562],
    [21.136065, -86.749763],
    [21.129881, -86.750493],
    [21.087383, -86.772766],
    [21.04285, -86.783066],
    [21.034359, -86.785469],
    [21.047176, -86.798515]
]).addTo(map).bindPopup('MANGLARES DE NICHUPTE');
var caboSanLucas = L.circle([22.8689, -109.878731], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.7,
    radius: 10000
}).addTo(map).bindPopup('Cabo San Lucas');
var golfoCalifornia = L.polygon([
    [24.066528, -109.885254],
    [24.382124, -110.45105],
    [25.65143, -111.104736],
    [26.170229, -111.313477],
    [27.5375, -112.368164],
    [29.506549, -113.692017],
    [31.704803, -114.807129],
    [31.830899, -114.790649],
    [31.662733, -114.581909],
    [31.620644, -114.647827],
    [29.594954, -113.582153],
    [29.248063, -112.296753],
    [28.933651, -112.153931],
    [28.497661, -112.722473],
    [26.519735, -111.291504],
    [24.171814, -109.775391]
]).addTo(map).bindPopup('ISLAS DEL GOLFO DE CALIFORNIA');
var arrecifeVeracruzano = L.polygon([
    [19.041349, -95.965576],
    [19.047839, -95.787048],
    [19.177598, -95.788422],
    [19.24244, -96.16333],
    [19.221693, -96.14822],
    [19.204835, -96.123505],
    [19.133492, -96.097412],
    [19.05433, -95.998535],
    [19.063091, -95.983086]
]).addTo(map).bindPopup('SISTEMA ARRECIFAL VERACRUZANO');

// Coloración del mapeado
islaCozumel.setStyle({color: 'red', fillColor: 'red', fillOpacity: 0.7});
arrecifeCozumel.setStyle({color: 'orange', fillColor: 'orange', fillOpacity: 0.7});
arrecifePuertoMorelos.setStyle({color: 'orange', fillColor: 'orange', fillOpacity: 0.7});
YumBalam.setStyle({color: 'green', fillColor: 'green', fillOpacity: 0.7});
arrecifeXcalak.setStyle({color: 'orange', fillColor: 'orange', fillOpacity: 0.7});
pntCancunNizuc.setStyle({color: 'red', fillColor: 'red', fillOpacity: 0.7});
islaContoy.setStyle({color: 'red', fillColor: 'red', fillOpacity: 0.7});
tulum.setStyle({color: 'green', fillColor: 'green', fillOpacity: 0.7});
arrecifeSiankaan.setStyle({color: 'orange', fillColor: 'orange', fillOpacity: 0.7});
Siankaan.setStyle({color: 'green', fillColor: 'green', fillOpacity: 0.7});
tiburonBallena.setStyle({color: 'purple', fillColor: 'purple', fillOpacity: 0.7});
manglarNichupte.setStyle({color: 'green', fillColor: 'green', fillOpacity: 0.7});
golfoCalifornia.setStyle({color: 'red', fillColor: 'red', fillOpacity: 0.7});
arrecifeVeracruzano.setStyle({color: 'orange', fillColor: 'orange', fillOpacity: 0.7});

var popup = L.popup()
    .setLatLng([24.28, -102.12])
    .setContent('Bienvenido a México.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

