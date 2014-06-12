function mapinit() {
  var myLatlng = new google.maps.LatLng(53.16598,-3.140963);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Tri-State Binders'
  });
  
}
google.maps.event.addDomListener(window, 'load', mapinit);