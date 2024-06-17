<template>
  <div class="overview">
    <h2>My Bookings</h2>
    <ul>
      <li v-for="booking in bookings" :key="booking.id">{{ booking.campingSpot }} - {{ booking.startDate }} to {{ booking.endDate }}</li>
    </ul>
  </div>
</template>

<script>
import { getUserBookings } from '@/services/api';

export default {
  data() {
    return {
      bookings: []
    };
  },
  async created() {
    this.bookings = await getUserBookings();
  }
};
</script>
