

let map = L.map('firstMap').setView([38.890, -77.023], 14.52)

L.tileLayer('https://api.mapbox.com/styles/v1/brodiehenson/cm3ozu1ag000k01qq07ueb7nn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJvZGllaGVuc29uIiwiYSI6ImNtM29xdW1qODA1d2gycG9wdHN1OXlocG4ifQ.AEH9DWXuqmZ6IqC312sz5w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let SMNH = L.marker([38.8913, -77.0261]).addTo(map);

let NAM = L.marker([38.8925, -77.0229]).addTo(map);

let SNASM = L.marker([38.8882, -77.0199]).addTo(map);

let NGA = L.marker([38.8913, -77.0200]).addTo(map);

SMNH.bindPopup("The Smithsonian Museum of Natural History");

NAM.bindPopup("The National Archives Museum");

SNASM.bindPopup("The Smithsonian National Air and Space Museum");

NGA.bindPopup("The National Gallery of Art");
