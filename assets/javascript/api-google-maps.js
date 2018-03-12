/*
API DOC's:
https://developers.google.com/maps/documentation/javascript/
https://developers.google.com/maps/documentation/javascript/examples/place-search
*/
const googleApi = {
  apiKey: "AIzaSyB0YC_GpZvlge7TTOgdNhujspZ8yjdbvQU",
  /* 
   *  All google api properties/methods 
   *  go inside this object 
   * 
   */
  map: null,
  service: null,
  infoWindow:null,

  //grabs search results and adds a marker to each
  handleSeachResults : 
    function(results, status){
    console.log(results, "searchresults");

    if (status == google.maps.places.PlacesServiceStatus.OK){
      for (var i = 0; i < results.length; i++){
        let marker = new google.maps.Marker({
          position: results[i].geometry.location,
          map: map
       });
      marker.addListener('click', function() {
        map.setZoom(20);
        map.setCenter(marker.getPosition());
      });
    }  
  }
},
  //searchs for location inside the bounds of the mapview
  search: 
  function(){
    let request = {
      bounds: map.getBounds(),
      query: "Auto"
  }
  console.log(request, "search 1");
  service.textSearch(request, googleApi.handleSeachResults);
  
},
  //finds currentLcation and creates a map for it
  initialize:
  function(location){
      console.log(location, "location");

      var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

      var mapOptions = {
        center: currentLocation,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //displays map to DOM
      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      console.log(map, "map");

      var image = 'assets/images/youAreHere.jpg';
      //creates marker for current location
      var marker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          icon: image
      });
     
      service = new google.maps.places.PlacesService(map);

      //waits untils bounds are set to run search function
      google.maps.event.addListenerOnce(map,'bounds_changed', googleApi.search);
    }
};

$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(googleApi.initialize);
  });

  // var contentString = "hello!!";

  //   var infowindow = new google.maps.InfoWindow({
  //     content: contentString
  //   });

  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });


    //adds circle to current location with a radius of 10,000 meters
    // var circleOptions = {
    //   strokeColor: "#0000FF",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 1.5,
    //   fillColor: "#0000FF",
    //   fillOpacity: 0.35,
    //   map: map,
    //   center: currentLocation,
    //   radius: 10000
    // };
    // var circle = new google.maps.Circle(circleOptions);

