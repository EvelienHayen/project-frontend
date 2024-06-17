<template>
    <div>
      <h1 class="text-3xl mb-4">Owner Dashboard</h1>
      <CreateCampingSpot />
      <CampingSpotList />
    </div>
  </template>
  
  <script>
  import CreateCampingSpot from '../components/CreateCampingSpot.vue';
  import CampingSpotList from '../components/CampingSpotList.vue';
  
  export default {
    components: {
      CreateCampingSpot,
      CampingSpotList
    }
  };
  </script>
  