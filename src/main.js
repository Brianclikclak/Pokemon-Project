<<<<<<< HEAD
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
=======

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app= createApp(App)

app.use(router)

app.mount('#app')


>>>>>>> 20753252699d933bc5217f6d06e3b3fd63cffa44
