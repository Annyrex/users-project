import store from "@/store/store.js";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
