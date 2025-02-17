import { createApp } from 'https://unpkg.com/vue@next';
import { createRouter, createWebHistory } from 'https://unpkg.com/vue-router@next';
import App from './App.vue';
import routes from './router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");