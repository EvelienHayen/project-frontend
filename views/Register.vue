<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <Register @register="handleRegister" />
  </div>
</template>

<script>
import Register from '@/components/Register.vue';
import axios from 'axios';

export default {
  components: {
    Register,
  },
  methods: {
    handleRegister(userData) {
      axios
        .post('/api/register', userData)
        .then((response) => {
          // Handle successful registration
          console.log('Registration successful:', response.data);
        })
        .catch((error) => {
          // Handle registration error
          console.error('Registration error:', error);
        });
    },
  },
};
</script>