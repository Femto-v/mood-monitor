<script setup lang="ts">
import HeaderPage from "./components/HeaderPage.vue";
import MainPage from "./views/MainPage.vue";
import ExplanationPage from "./views/ExplanationPage.vue";
import ReviewPage from "./views/ReviewPage.vue";
</script>

<template>
    <HeaderPage />
    <!-- setting background -->
    <div class="grid">
        <MainPage />
        <ExplanationPage />
        <ReviewPage />
    </div>
</template>

<style scoped></style>
