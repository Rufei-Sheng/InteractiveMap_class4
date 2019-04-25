mapboxgl.accessToken = 'pk.eyJ1IjoicnVmZWlmZmZmZmZmIiwiYSI6ImNqdXczZWZ1NjA4Yjc0ZHBmdHVlYTVhNHgifQ.h-vyoVrI270wgwU6Y11NOQ';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  center: [-73.97604882, 40.7489006],
  style: 'mapbox://styles/mapbox/streets-v9',
  zoom: 10.5,
});

map.addControl(new mapboxgl.NavigationControl());


// add citibike marker to the map
  citibikeStationLocation.forEach(function(eachSatation) {
    // Create a DOM element for the marker
    val el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://imgur.com/4Pq9anB)'
    el.style.width = 10px;
    el.style.height = 10px;

    // Citibike station popup
    var popup = new mapboxgl.Popup({
      offsit: 40}).setText(`${eachSatation.name}`)

    // add marker to map
    new mapboxgl.marker(el)
    .setLngLat([eachSatation.longitude, eachSatation.latitude])
    .setPopup(popup)
    .addTo(map)
  })


// do all the customerized things after base map prepared
