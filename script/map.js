function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(49.426526, 26.984978), zoom: 30
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }