// import

// import createApp
import { createApp } from "vue";
// general style
import "./style.css";
// import App.vue
import App from "./App.vue";
// OhVueIcon import
import { OhVueIcon, addIcons } from "oh-vue-icons";
// spesific icon can be more than 2
import { BiArrowDownCircle } from "oh-vue-icons/icons";
// import swiper
import { register } from "swiper/element/bundle";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// register swiper
register();
// addIcons spesific icon can be more than 2
addIcons(BiArrowDownCircle);
// Components
const vuetify = createVuetify({
    components,
    directives,
});

// declare app as createApp
const app = createApp(App);

// OhVueIcon
app.component("v-icon", OhVueIcon);

// mount app
// app.mount("#app");

app.use(vuetify).mount("#app");
