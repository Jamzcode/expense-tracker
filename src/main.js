import { createApp } from 'vue'

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/style.css';





import App from './App.vue'

const app = createApp(App);

//tell vue to use toastification
app.use(Toast);
app.mount('#app');
