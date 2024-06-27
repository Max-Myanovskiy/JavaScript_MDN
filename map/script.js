// L.mapquest.key = "";

// // 'map' refers to a <div> element with the ID map
// const map = L.mapquest.map("map", {
//   center: [53.480759, -2.242631],
//   layers: L.mapquest.tileLayer("map"),
//   zoom: 12,
// });

var latlng = new google.maps.LatLng(
  position.coords.latitude,
  position.coords.longitude
);
var myOptions = {
  zoom: 8,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  disableDefaultUI: true,
};

var map = new google.maps.Map(document.getElementById("map"), myOptions);
