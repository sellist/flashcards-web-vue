import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "./view/HomeView.vue";
import AboutView from "./view/AboutView.vue";
import CardFormView from "./view/CardFormView.vue";
import CardDisplayView from "./view/CardDisplayView.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import DeckChoiceView from "./view/DeckChoiceView.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome } from "oh-vue-icons/icons";

const routes = [
    { path: '/', component: HomeView },
    {path: '/create', component: CardFormView},
    {path: '/play', component: CardDisplayView},
    {path: '/choose', component: DeckChoiceView},
    { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

addIcons(FaHome);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    prefix: 'p'
});
app.mount('#app');
