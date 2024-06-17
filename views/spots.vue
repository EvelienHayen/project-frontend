<template>
    <div>
      <CampingSpotDetails :id="$route.params.id" />
      <CommentSection :campingSpotId="$route.params.id" />
    </div>
  </template>
  
  <script>
  import CampingSpotDetails from '../component/CampingSpotDetails.vue';
  import CommentSection from '../component/CommentSection.vue';
  import Map from '../component/Map.vue';
  
  export default {
    components: {
      CampingSpotDetails,
      CommentSection,
      Map
    }
  };
  </script>
  