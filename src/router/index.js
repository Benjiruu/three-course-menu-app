import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RecipeSelection from '../views/RecipeSelection.vue';
import MenuSummary from '../views/MenuSummary.vue';
import CookingPage from '../views/CookingPage.vue';
import ShoppingList from '../views/ShoppingList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/recipe-selection',
    name: 'RecipeSelection',
    component: RecipeSelection,
  },
  {
    path: '/menu-summary',
    name: 'MenuSummary',
    component: MenuSummary,
  },
  {
    path: '/cooking-page',
    name: 'CookingPage',
    component: CookingPage,
  },
  {
    path: '/shopping-list',
    name: 'ShoppingList',
    component: ShoppingList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;