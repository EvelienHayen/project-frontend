<template>
    <div>
      <CampingSpotDetails :id="$route.params.id" />
      <CommentSection :campingSpotId="$route.params.id" />
    </div>
  </template>
  
  <script>
  import CampingSpotDetails from '../component/spots.vue';
  import CommentSection from '../component/comments.vue';
  import Map from '../component/Map.vue';
  
  export default {
    components: {
      CampingSpotDetails,
      CommentSection,
      Map
    }
  };
  </script>
  