import Home from './views/Home.vue';
import RecipeSelection from './views/RecipeSelection.vue';
import MenuSummary from './views/MenuSummary.vue';
import ShoppingList from './views/ShoppingList.vue';
import CookingPage from './views/CookingPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/recipe-selection', component: RecipeSelection },
  { path: '/menu-summary', component: MenuSummary },
  { path: '/shopping-list', component: ShoppingList },
  { path: '/cooking-page', component: CookingPage },
];

export default routes;
