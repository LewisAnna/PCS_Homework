let map;
let directionsService;
let directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: -34.397, lng: 150.644 } // Example center
    });
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
}

function calculateRoute() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    const request = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
            const route = result.routes[0].legs[0];
            const distance = route.distance.text;
            const duration = route.duration.text;
            document.getElementById('result').innerHTML = `Distance: ${distance}<br>Time: ${duration}`;
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}