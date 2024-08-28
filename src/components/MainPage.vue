<script setup lang="ts">

</script>

<template>
  <!-- for margin only -->
  <div class="h-screen w-full grid place content-center gap-10">
    <!-- setting the grid -->
    <div class="grid text-3xl  place-content-center font-extrabold">UcupMood</div>
    <div class="grid text-xs place-content-center">"Your" Daily Emotion Tracker Web-App</div>

    <div class="h-48 w-full bg-orange-100">
      <div></div>
    </div>

    <div class="flex justify-center gap-5">
      <button class="p-2 border-2 border-orange-600 rounded-lg">Log In</button>
      <button class="p-2 border-2 border-orange-600 rounded-lg">Sign Up</button>
    </div>

    <div class="flex justify-center">
      <button class="grid place-content-center ">
        <p>More</p>
        <v-icon name="bi-arrow-down-circle" class="place-self-center"/>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
