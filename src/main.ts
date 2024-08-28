import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// OhVueIcon import
import { OhVueIcon, addIcons } from "oh-vue-icons";
// spesific icon can be more than 2 
import { BiArrowDownCircle } from "oh-vue-icons/icons";
// addIcons spesific icon can be more than 2 
addIcons(BiArrowDownCircle);

const app = createApp(App);

// OhVueIcon 
app.component("v-icon", OhVueIcon);

// mount app
app.mount('#app')
