let map = L.map('secondMap').setView([40.76, -73.9862], 15.25);

L.tileLayer('https://api.mapbox.com/styles/v1/brodiehenson/cm3rtgva5001q01ql5wc7h27u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJvZGllaGVuc29uIiwiYSI6ImNtM29xdW1qODA1d2gycG9wdHN1OXlocG4ifQ.AEH9DWXuqmZ6IqC312sz5w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
    L.marker( [ places[i].lat, places[i].long ] )
    .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>' )
    .addTo( map );
}
