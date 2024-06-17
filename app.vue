<template>
  <div id="app">
    <navigation-bar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/component/navigationBar.vue';

export default {
  components: {
    NavigationBar
  }
};
</script>

