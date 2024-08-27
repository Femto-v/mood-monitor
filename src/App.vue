<script setup lang="ts">
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue'
</script>

<template>
  <HeaderPage/>
  <!-- setting background -->
  <div class=" font-mono bg-orange-200">
    <!-- setting margin -->
    <MainPage msg="Vite + Vue" />
  </div>
  
</template>

<style scoped>

</style>
