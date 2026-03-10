import { createApp } from 'vue'
import './assets/styles/main.scss' // SCSS 통합 파일 임포트
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
