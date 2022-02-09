'use strict';


function initMap() {
    // The location of Uluru
    const uluru = { lat: 29.557383526537905, lng: 34.94998783298118 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }