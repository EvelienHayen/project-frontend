<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Camping Spots</h2>
    <div class="flex justify-between mb-4">
      <div>
        <input
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          v-model="searchQuery"
          placeholder="Search by location or amenities"
      />
      </div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="filterSpots"
        >
          Filter
        </button>
      </div>
    div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="filteredSpots.length === 0">No spots found.</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="spot in filteredSpots"
        :key="spot.id"
        class="bg-white rounded-md shadow-md p-4"
      >
        <img :src="spot.imageUrl" :alt="spot.name" class="w-full h-48 object-cover rounded-md mb-2" />
        <h3 class="text-lg font-bold">{{ spot.name }}</h3>
        <p>{{ spot.location }}</p>
        <p>{{ spot.description }}</p>
        <div class="flex justify-between items-center mt-2">
          <span>${{ spot.price }} per night</span>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="bookSpot(spot)"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      spots: [],
      filteredSpots: [],
      searchQuery: '',
      loading: true,
    };
  },
  mounted() {
    this.fetchSpots();
  },
  methods: {
    fetchSpots() {
      axios
        .get('/api/spots')
        .then((response) => {
          this.spots = response.data;
          this.filteredSpots = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error fetching spots:', error);
          this.loading = false;
        });
    },
    filterSpots() {
      const query = this.searchQuery.toLowerCase();
      this.filteredSpots = this.spots.filter((spot) => {
        return (
          spot.name.toLowerCase().includes(query) ||
          spot.location.toLowerCase().includes(query) ||
          spot.description.toLowerCase().includes(query)
        );
      });
    },
    bookSpot(spot) {
      console.log(`Booking spot: ${spot.name}`);
    },
  },
};
</script>