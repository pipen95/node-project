export const displayMap = locations => {
  mapboxgl.accessToken = 'pk.eyJ1IjoicGllcnJlOTUxNzAiLCJhIjoiY2toMWNtMXM5MDBzazM0bzVtcWk5YTN0OCJ9.1piZsy79X9rKgXGywRU9bQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pierre95170/ckh1dg6c70fm919ld3uxaw37y',
    scrollZoom: false
    // zoom: 5,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    //Create marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,

    }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
    //Extends map bounds to includes current locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      left: 100,
      right: 100,
      bottom: 150
    }
  });
}

