<template>
  <div class="menu-summary">
    <h1>Menyn</h1>
    <div v-if="selectedMenu">
      <div class="menu-section">
        <h2>Förrätt</h2>
        <p>{{ selectedMenu.appetizer.name }}</p>
      </div>
      <div class="menu-section">
        <h2>Huvudrätt</h2>
        <p>{{ selectedMenu.mainCourse.name }}</p>
      </div>
      <div class="menu-section">
        <h2>Efterrätt</h2>
        <p>{{ selectedMenu.dessert.name }}</p>
      </div>
    </div>
    <div v-else>
      <p>Ingen meny vald.</p>
    </div>

    <button @click="goToShoppingList">Visa Inköpslista</button>
    <button @click="goToCookingPage">Gå till Matlagning</button>
    <button @click="goBack">Tillbaka</button>
  </div>
</template>

<script>
export default {
  computed: {
    selectedMenu() {
      return this.$route.query.selectedRecipes ? JSON.parse(this.$route.query.selectedRecipes) : null;
    },
    portions() {
      return this.$route.query.portions || 1;
    }
  },
  methods: {
    goToShoppingList() {
      this.$router.push({
        name: 'ShoppingList',
        query: {
          selectedRecipes: this.$route.query.selectedRecipes,
          portions: this.portions
        }
      });
    },
    goToCookingPage() {
      this.$router.push({
        name: 'CookingPage',
        query: {
          selectedRecipes: this.$route.query.selectedRecipes,
          portions: this.portions
        }
      });
    },
    goBack() {
      this.$router.push({ name: 'RecipeSelection' });
    }
  }
};
</script>

<style scoped>
.menu-summary {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.menu-section {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #42b983;
}

p {
  font-size: 1.2rem;
  margin: 0;
  color: #333;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #369f6e;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-summary {
    padding: 10px;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>