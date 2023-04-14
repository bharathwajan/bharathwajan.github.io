function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 8.55803827908574, lng:76.87715073899811 }; 
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}