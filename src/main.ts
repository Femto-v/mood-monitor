import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons"; // OhVueIcon import
import { BiArrowDownCircle } from "oh-vue-icons/icons"; // spesific icon can be more than 2
import { register } from "swiper/element/bundle"; // import swiper

register(); // register swiper

addIcons(BiArrowDownCircle); // addIcons spesific icon can be more than 2

const app = createApp(App);

app.component("v-icon", OhVueIcon); // OhVueIcon
app.mount("#app"); // mount app
