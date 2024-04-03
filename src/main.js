import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomePage.vue'
import FarmPage from './components/FarmPage.vue'
import LoginPage from './components/LoginPage.vue'
import FishPage from './components/FishPage.vue'
import FrogPage from './components/FrogPage.vue'
import BearPage from './components/BearPage.vue'
import WolfPage from './components/WolfPage.vue'
import LlamaPage from './components/LlamaPage.vue'
import SignUpPage from './components/SignUpPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/farm', component: FarmPage },
    { path: '/login', component: LoginPage},
    { path: '/fish', component: FishPage },
    { path: '/frog', component: FrogPage },
    { path: '/bear', component: BearPage },
    { path: '/llama', component: LlamaPage },
    { path: '/wolf', component: WolfPage },
    { path: '/signup', component: SignUpPage },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
})
 
createApp(App)
    .use(router)
    .mount('#app')
