<template>
  <div class="home">
    <h2>Welcome to Camping Spots</h2>
    <search-bar />
    <spots :spots="spots" />
  </div>
</template>

<script>
import SearchBar from '@/component/SearchBar.vue';
import Spots from '@/component/spots.vue';
import { getAllSpots } from '@/service/api';

export default {
  components: {
    SearchBar,
    Spots
  },
  data() {
    return {
      spots: []
    };
  },
  async created() {
    this.spots = await getAllSpots();
  }
};
</script>
