<template>
  <div class="dashboard-owner">
    <h2>My Camping Spots</h2>
    <ul>
      <li v-for="spot in spots" :key="spot.id">
        {{ spot.name }} - {{ spot.location }}
      </li>
    </ul>
    <button @click="createNewSpot">Create New Spot</button>
  </div>
</template>

<script>
import { getOwnerSpots, createCampingSpot } from '@/service/api';

export default {
  data() {
    return {
      spots: []
    };
  },
  async created() {
    this.spots = await getOwnerSpots();
  },
  methods: {
    async createNewSpot() {
      const newSpot = await createCampingSpot({ name: 'New Spot', location: 'Unknown' });
      this.spots.push(newSpot);
    }
  }
};
</script>
