<script setup lang="ts">
import "../css/background-animation.css";
</script>

<template>
    <!-- for margin only -->
    <div class="h-screen w-full grid place content-center gap-10">
        <!-- test background  -->
        <!--Start Background Animation Body-->
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
        <!--End Background Animation Body-->
        <!-- setting the grid -->
        <div class="grid text-3xl place-content-center font-extrabold">
            UcupMood
        </div>
        <div class="grid text-xs place-content-center">
            "Your" Daily Emotion Tracker Web-App
        </div>
        <div class="relative h-32 bg-black">
            <div class="absolute w-full h-full flex items-center bg-orange-100">
                <!-- infinite scroll -->
                <div class="w-full inline-flex flex-nowrap">
                    <ul
                        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    >
                        <li>
                            <div class="h-24 w-32 bg-white"></div>
                        </li>
                        <li>
                            <img src="./disney.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="./airbnb.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="./apple.svg" alt="Apple" />
                        </li>
                        <li>
                            <img src="./spark.svg" alt="Spark" />
                        </li>
                        <li>
                            <img src="./samsung.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img src="./quora.svg" alt="Quora" />
                        </li>
                        <li>
                            <img src="./sass.svg" alt="Sass" />
                        </li>
                    </ul>
                    <ul
                        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                        aria-hidden="true"
                    >
                        <li>
                            <img src="./facebook.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="./disney.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="./airbnb.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="./apple.svg" alt="Apple" />
                        </li>
                        <li>
                            <img src="./spark.svg" alt="Spark" />
                        </li>
                        <li>
                            <img src="./samsung.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img src="./quora.svg" alt="Quora" />
                        </li>
                        <li>
                            <img src="./sass.svg" alt="Sass" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex justify-center gap-5">
            <button class="p-2 border-2 border-orange-600 rounded-lg">
                Log In
            </button>
            <button class="p-2 border-2 border-orange-600 rounded-lg">
                Sign Up
            </button>
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
