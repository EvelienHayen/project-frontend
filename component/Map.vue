<template>
  <div class="map-container">
    <h2>Interactive Map</h2>
    <div id="map"></div>

  </div> 
   </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    mounted() {
      const map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  };
  </script>
  
  <style>
  #map {
    height: 400px;
  }
  </style>
  