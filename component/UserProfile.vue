<template>
    <div class="max-w-sm mx-auto">
      <h2 class="text-2xl">User Profile</h2>
      <form @submit.prevent="updateProfile">
        <div class="mb-4">
          <label class="block">Name</label>
          <input v-model="name" type="text" class="w-full px-3 py-2 border">
        </div>
        <div class="mb-4">
          <label class="block">Email</label>
          <input v-model="email" type="email" class="w-full px-3 py-2 border">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import { api } from '../services/api';
  
  export default {
    data() {
      return {
        name: '',
        email: ''
      };
    },
    async created() {
      const response = await api.get('/users/me');
      this.name = response.data.name;
      this.email = response.data.email;
    },
    methods: {
      async updateProfile() {
        try {
          await api.put('/users/me', {
            name: this.name,
            email: this.email
          });
          alert('Profile updated');
        } catch (error) {
          console.error('Update failed', error);
        }
      }
    }
  };
  </script>
  