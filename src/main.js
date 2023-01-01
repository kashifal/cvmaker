import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHistory, createRouter} from "vue-router";
import Home from "./pages/Home.vue";
import CreateResume from "./pages/CreateResume.vue";


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/create-resume",
            component: CreateResume,
        },
    ]
})

createApp(App).use(router).mount('#app')
