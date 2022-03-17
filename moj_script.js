var mojamapa = L.map("mapa");
mojamapa.setView([48.153142412789194, 17.073213324553095], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGF0cmlraXN0b2siLCJhIjoiY2toZDVnZ3hyMDJqMTJ0bDY0bThsNmoyOCJ9.s4XJ_nQ48E50EEXidAcsEg'
}).addTo(mojamapa);

var blokA = L.polygon([
    // [y, x]
    [48.15195949455118, 17.072550686036633], // lavy horny
    [48.15182656373039, 17.072550686036633], //lavy dolny
    [48.15182656373039, 17.073870931906006], //pravy dolny
    [48.15195949455118, 17.073870931906006], //pravy horny
    ],{color: "#7059b8"}
).addTo(mojamapa);
blokA.bindPopup("Blok A <br> Ústav jadrového a fyzikálneho inžinierstva, Pedagogické oddelenie FEI STU, Knižnica FEI STU");

var blokB = L.polygon([
    // [y, x]
    [48.15246246856674, 17.07300312728413], // lavy horny
    [48.152329550151434, 17.07300312728413], //lavy dolny
    [48.152329550151434, 17.074360925647153], //pravy dolny
    [48.15246246856674, 17.074360925647153], //pravy horny
    ],{color: "#F13652"}
).addTo(mojamapa);
blokB.bindPopup("Blok B <br> Ústav multimediálnych informačných a komunikačných techonológií, Ústav elektrotechniky, Bufet Béčko");

var blokC = L.polygon([
    // [y, x]
    [48.15296949708977, 17.072828219544544], // lavy horny
    [48.152825448573836, 17.072828219544544], //lavy dolny
    [48.152825448573836, 17.073870931906006], //pravy dolny
    [48.15296949708977, 17.073870931906006], //pravy horny
    ],{color: "#3B6F9E"}
).addTo(mojamapa);
blokC.bindPopup("Blok C <br> Ústav informatiky a matematiky, Ústav elektroenergetiky a aplikovanej elektrotechniky, Kopírovacia služba Printofka");

var blokD = L.polygon([
    // [y, x]
    [48.15347261330903, 17.073200074463133], // lavy horny
    [48.153334020866026, 17.073200074463133], //lavy dolny
    [48.153334020866026, 17.07436029792012], //pravy dolny
    [48.15347261330903, 17.07436029792012], //pravy horny
    ],{color: "#30C814"}
).addTo(mojamapa);
blokD.bindPopup("Blok D <br> Ústav robotiky a kybernetiky, Ústav automobilovej mechatroniky");

var blokE = L.polygon([
    // [y, x]
    [48.153980891266144, 17.072830751409176], // lavy horny
    [48.153843714157315, 17.072830751409176], //lavy dolny
    [48.153843714157315, 17.07388787460879], //pravy dolny
    [48.153980891266144, 17.07388787460879], //pravy horny
    ],{color: "#AE681D"}
).addTo(mojamapa);
blokE.bindPopup("Blok E <br> Ústav elektroniky a fotoniky, Jedáleň FEI, Bufet Delikanti, FEI HUB");

var telesna = L.polygon([
    // [y, x]
    [48.15445377858536, 17.072550989553788], // lavy horny
    [48.15350380377156, 17.072550989553788], //lavy dolny
    [48.15350380377156, 17.072830009603012], //pravy dolny
    [48.15445377858536, 17.072830009603012], //pravy horny
    ],{color: "#ffa500"}
).addTo(mojamapa);
telesna.bindPopup("Technologický inštitút športu FEI STU, telocvične, plaváreň");

var vypoctovestredisko = L.polygon([
    // [y, x]
    [48.15350384910728, 17.072550686036633], // lavy horny
    [48.15196949455118, 17.072550686036633], //lavy dolny
    [48.15196949455118, 17.072814009603012], //pravy dolny
    [48.15350384910728, 17.072830009603012], //pravy horny
    ],{color: "#048C61"}
).addTo(mojamapa);
vypoctovestredisko.bindPopup("Výpočtové stredisko, Medzinárodné laserové centrum");

//https://stackoverflow.com/questions/18639549/custom-icon-in-leaflet-not-working
var busMarker = L.icon({
    iconUrl: 'busmarker.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var tramMarker = L.icon({
    iconUrl: 'trammarker.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

//busy
//zoo
L.marker([48.154114595858054, 17.075117826542267], {icon:busMarker}).addTo(mojamapa).bindPopup("Zoo <br> 31 39 N31");
L.marker([48.154594427403225, 17.074563098699194], {icon:busMarker}).addTo(mojamapa).bindPopup("Zoo <br> 31 39 N31");
L.marker([48.154650029040544, 17.075779298322507], {icon:busMarker}).addTo(mojamapa).bindPopup("Zoo <br> 30 32 37 92 192 N29");
//botanicka zahrada
L.marker([48.14832321445759, 17.07202592026172], {icon:busMarker}).addTo(mojamapa).bindPopup("Botanická záhrada <br> 29 32 N29 N33 N34");
L.marker([48.14791564857484, 17.072303204135685], {icon:busMarker}).addTo(mojamapa).bindPopup("Botanická záhrada <br> 29 32 N29 N33 N34");

//elektricky
//botanicka zahrada
L.marker([48.14810704309231, 17.072470275712126], {icon:tramMarker}).addTo(mojamapa).bindPopup("Botanická záhrada <br> 4 9");
L.marker([48.14811833062073, 17.07178121194475], {icon:tramMarker}).addTo(mojamapa).bindPopup("Botanická záhrada <br> 4 9");

L.Routing.control({
    waypoints: [
        L.latLng(),
        L.latLng(48.15185833332485, 17.07334772066834)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(mojamapa);


//https://leafletjs.com/examples/quick-start/ posledná časť
var okno = L.popup();
function mapainfo(coord) {
    okno
        .setLatLng(coord.latlng)
        .setContent("Súradnice klinutia: " + coord.latlng.toString())
        .openOn(mojamapa);
}
mojamapa.on('click', mapainfo);