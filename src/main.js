import { createApp } from 'https://unpkg.com/vue@3.2.31/dist/vue.esm-browser.js';
import { createRouter, createWebHistory } from 'https://unpkg.com/vue-router@4.0.12/dist/vue-router.esm-browser.js';
import App from './App.vue';
import routes from './router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");