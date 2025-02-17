<template>
  <div>
    <h1>Recept</h1>
    <div v-if="selectedMenu">
      <div class="menu-section">
        <h2>Förrätt</h2>
        <p>{{ selectedMenu.appetizer.name }}</p>
        <p>{{ selectedMenu.appetizer.instructions }}</p>
      </div>
      <div class="menu-section">
        <h2>Huvudrätt</h2>
        <p>{{ selectedMenu.mainCourse.name }}</p>
        <p>{{ selectedMenu.mainCourse.instructions }}</p>
      </div>
      <div class="menu-section">
        <h2>Efterrätt</h2>
        <p>{{ selectedMenu.dessert.name }}</p>
        <p>{{ selectedMenu.dessert.instructions }}</p>
      </div>
    </div>
    <div v-else>
      <p>Ingen meny vald.</p>
    </div>

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
    goBack() {
      this.$router.push({ name: 'MenuSummary', query: { selectedRecipes: this.$route.query.selectedRecipes, portions: this.portions } });
    }
  }
};
</script>

<style scoped>
.menu-section {
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
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
}

button:hover {
  background-color: #369f6e;
}

@media (max-width: 768px) {
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