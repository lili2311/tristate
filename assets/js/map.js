google.maps.event.addDomListener(window, 'load', mapinit);
var map;
function mapinit() {
    var mapOptions = {
        center: new google.maps.LatLng(43.547864,-96.72205),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var mapElement = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
['Tri-State Binders', 'Rebinding,Laminating,Canvas Covering of Books and Documents', 43.5483588, -96.722133]
    ];
    for (i = 0; i < locations.length; i++) {
  if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
        marker = new google.maps.Marker({
            icon: '',
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map,
            title: locations[i][0],
            desc: description
        });
    }
  }
