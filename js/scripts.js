mapboxgl.accessToken = 'pk.eyJ1IjoicnVmZWkiLCJhIjoiY2p1bXo1NmJpMTU0OTRkbnhlYTZkcGRtNCJ9.zLY5WjTwc7v2_MOF-0JITQ';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  center: [-73.97604882, 40.7489006],
  style: 'mapbox://styles/mapbox/streets-v9',
  zoom: 10.5,
});

map.addControl(new mapboxgl.NavigationControl());

// do all the customerized things after base map prepared
map.on('style.load', function() {
  map.addSource('green_pluto', {
    type: 'geojson',
    data: './data/pluto.geojson.json',
  });
  map.addLayer({
    id: 'green_pluto fill',
    type: 'fill',
    source: 'green_pluto',
    paint: {
      'fill-opacity' : 0.7,
      'fill-color' :{
        type: 'categorical',
        property: 'Landuse',
        // array of array: what value should be and what color should be
        stops: [
          ['01', 'blue'],
          ['02', 'green']
        ]
      }

    }

  })

// id write before {}?

})
