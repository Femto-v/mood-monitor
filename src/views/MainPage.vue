<script setup lang="ts">
import "../css/background-animation.css";
</script>

<template>
    <!-- for background only -->
    <div class="area">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <!-- for margin only -->
    <div class="h-screen w-full grid content-center gap-3">
        <!--this is the effect of h-screen -->
        <!-- test background  -->
        <!--Start Background Animation Body-->

        <!--End Background Animation Body-->
        <!-- setting the grid -->
        <div>
            <div class="grid text-4xl place-content-center font-extrabold">
                UcupMood
            </div>
            <div class="grid text-xs place-content-center">
                "Your" Daily Emotion Tracker Web-App
            </div>
        </div>

        <div class="relative h-32 bg-black">
            <div class="absolute w-full h-full flex items-center bg-orange-100">
                <!-- some pic  -->
            </div>
        </div>

        <div class="flex justify-center gap-5">
            <button class="p-2 bg-orange-300 rounded">Log In</button>
            <button class="p-2 bg-orange-300 rounded">Sign Up</button>
        </div>

        <div class="flex justify-center">
            <button class="grid place-content-center">
                <p>More</p>
                <v-icon name="bi-arrow-down-circle" class="place-self-center" />
            </button>
        </div>
    </div>
</template>

<style scoped></style>
