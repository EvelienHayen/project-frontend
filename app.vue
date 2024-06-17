<template>
    <div>
      <NavBar />
      <router-view />
    </div>
  </template>
  
  <script>
  import NavBar from '../component/navigationBar.vue';
  
  export default {
    components: {
      NavBar
    }
  };
  </script>
  