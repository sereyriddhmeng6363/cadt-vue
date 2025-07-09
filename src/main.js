// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'       // note the “.js” here
import { createI18n } from 'vue-i18n'
import messages from './locales'
import './assets/style.css'

const i18n = createI18n({
  locale: 'en',
  messages
})

createApp(App)
  .use(router)   // registers your routes so <router-view> works
  .use(i18n)
  .mount('#app')