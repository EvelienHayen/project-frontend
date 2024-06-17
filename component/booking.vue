<template>
  <div class="booking">
    <h2>Book a Camping Spot</h2>
    <form @submit.prevent="bookSpot">
      <div class="form-group">
        <label for="campingSpot">Camping Spot</label>
        <select id="campingSpot" v-model="campingSpotId" required>
          <option value="">Select a camping spot</option>
          <option v-for="spot in campingSpots" :key="spot.id" :value="spot.id">{{ spot.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="startDate">Start Date</label>
        <input type="date" id="startDate" v-model="startDate" :min="today" required />
      </div>
      <div class="form-group">
        <label for="endDate">End Date</label>
        <input type="date" id="endDate" v-model="endDate" :min="startDate" required />
      </div>
      <button type="submit" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="spinner"></span>
        <span>Book</span>
      </button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
  
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { bookCampingSpot } from '@/services/api';

export default {
  data() {
    return {
      campingSpotId: '',
      startDate: '',
      endDate: '',
      isSubmitting: false,
      error: '',
      today: new Date().toISOString().split('T')[0]
    };
  },
  computed: {
    ...mapGetters('campingSpots', ['campingSpots'])
  },
  created() {
    this.fetchCampingSpots();
  },
  methods: {
    ...mapActions('campingSpots', ['fetchCampingSpots']),
    async bookSpot() {
      if (!this.validateDates()) {
        this.error = 'End date must be after start date';
        return;
      }

      try {
        this.isSubmitting = true;
        this.error = '';
        await bookCampingSpot(this.campingSpotId, this.startDate, this.endDate);
        this.$router.push({ name: 'BookingConfirmation' });
      } catch (error) {
        this.error = 'Booking failed. Please try again later.';
        console.error('Booking failed', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    validateDates() {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      return endDate > startDate;
    }
  }
};
</script>

<style scoped>
.booking {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

.error {
  color: red;
  margin-top: 1rem;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid #333;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>