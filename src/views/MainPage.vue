<script lang="ts">
import "../css/background-animation.css";
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
});
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

        <div class="relative h-64">
            <div class="absolute w-full h-full flex items-center">
                <!-- some pic  -->
                <swiper
                    direction="vertical"
                    mousewheel
                    style="height: 100%"
                    :slides-per-view="1"
                    :autoplay="{
                        delay: 1500,
                        disableOnInteraction: false,
                    }"
                >
                    <swiper-slide>
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                            alt="Image 1"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                            alt="Image 2"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                            alt="Image 3"
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            class="carousel-img"
                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                            alt="Image 4"
                        />
                    </swiper-slide>
                </swiper>
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

<style scoped>
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}
</style>
