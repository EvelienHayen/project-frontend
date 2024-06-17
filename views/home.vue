<template>
    <div>
      <h1 class="text-3xl mb-4">Welcome to Camping Spot Finder</h1>
      <CampingSpotList />
    </div>
  </template>
  
  <script>
  import CampingSpotList from '../components/CampingSpotList.vue';
  
  export default {
    components: {
      CampingSpotList
    }
  };
  </script>
  