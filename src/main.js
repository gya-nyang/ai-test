import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router) // 라우터를 앱에 등록합니다.
  .mount('#app')
