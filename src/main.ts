import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/index.js'

import './assets/main.css'

createApp(App)
    .use(i18n)
    .mount('#app')
