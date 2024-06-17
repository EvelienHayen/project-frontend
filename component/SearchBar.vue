<template>
    <div class="mb-4">
      <input v-model="location" placeholder="Location" class="border p-2 mr-2">
      <input v-model="capacity" placeholder="Capacity" class="border p-2 mr-2">
      <button @click="filter" class="bg-blue-500 text-white px-4 py-2">Filter</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        capacity: ''
      };
    },
    methods: {
      filter() {
        this.$emit('filter', { location: this.location, capacity: this.capacity });
      }
    }
  };
  </script>
  