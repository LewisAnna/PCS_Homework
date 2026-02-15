(async function () {
  'use strict';

  const { Map, InfoWindow } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement/*, PinElement*/ } = await google.maps.importLibrary('marker');
  const keverRachel = { lat: 31.71934, lng: 35.202116};
  const searchInput = document.querySelector('#search');
  const geonamesApiKey = 'chanaPcollege';
  const placesList = document.querySelector('#places');

  const map = new Map(document.getElementById('map'), {
    center: keverRachel,
    zoom: 19,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapId: 'DEMO_MAP_ID'
  });

  const infoWindow = new InfoWindow();

  document.querySelector('#go').addEventListener('click', async () => {
    try {
      const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${searchInput.value}&maxRows=10&username=${geonamesApiKey}&type=json`);
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      const places = await r.json();
      console.log(places);

      const bounds = new google.maps.LatLngBounds();

      places.geonames.forEach(place => {
        const position = { lat: place.lat, lng: place.lng };


        let img;
        if (place.thumbnailImg) {
          img = document.createElement('img');
          img.src = place.thumbnailImg;
          img.alt = place.title;
          img.className = 'place-picture';
        }

        const marker = new AdvancedMarkerElement({
          map,
          position,
          title: place.title,
          //content: pin.element
          content: img
        });

        marker.addListener('click', () => {
          infoWindow.setContent(`${place.summary} <a href="https://${place.wikipediaUrl}" target="_blank">more info...</a>`);
          infoWindow.open({
            anchor: marker
          });
        });

        bounds.extend(position);

        const li = document.createElement('li');
        li.innerHTML = `<div><span>${place.title}</span>
                        <img src="${place.thumbnailImg || 'default.jpeg'}"/></div>
                        <div class="summary">${place.summary}</div>`;

        li.addEventListener('click', async () => {
          const currentSummary = document.querySelector('.active .summary');
          if (currentSummary) {
            currentSummary.parentElement.className = 'visited';
            //currentSummary.style.display = 'none';
          }

          li.className = 'visited active';

          map.setZoom(3);

          await doAfter(() => map.panTo(position), 1500);
          await doAfter(() => map.setZoom(18), 1500);
        });

        placesList.appendChild(li);
      });

      map.fitBounds(bounds);
    } catch (e) {
      console.error(e);
    }
  });


  function doAfter(action, after) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        action();
        resolve();
      }, after);
    });
  }
}());