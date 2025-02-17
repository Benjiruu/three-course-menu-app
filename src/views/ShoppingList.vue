<template>
  <div>
    <h2>Inköpslista</h2>
    <ul>
      <li v-for="ingredient in shoppingList" :key="ingredient.name">{{ ingredient.name }}: {{ ingredient.quantity }} {{
        ingredient.unit }}</li>
    </ul>
    <button @click="goBack">Tillbaka</button>
  </div>
</template>

<script>
export default {
  computed: {
    selectedRecipes() {
      return this.$route.query.selectedRecipes ? JSON.parse(this.$route.query.selectedRecipes) : null;
    },
    portions() {
      return this.$route.query.portions || 1;
    }
  },
  data() {
    return {
      shoppingList: []
    };
  },
  created() {
    this.generateShoppingList();
  },
  methods: {
    generateShoppingList() {
      const selectedRecipes = this.selectedRecipes;
      const portions = this.portions;
      if (selectedRecipes) {
        const ingredients = new Map();
        const addIngredients = (recipe) => {
          recipe.ingredients.forEach(ingredient => {
            const existing = ingredients.get(ingredient.name);
            const quantity = parseFloat(ingredient.quantity) * portions;
            const unit = ingredient.unit || '';
            if (existing) {
              ingredients.set(ingredient.name, { quantity: existing.quantity + quantity, unit });
            } else {
              ingredients.set(ingredient.name, { quantity, unit });
            }
          });
        };
        if (selectedRecipes.appetizer) addIngredients(selectedRecipes.appetizer);
        if (selectedRecipes.mainCourse) addIngredients(selectedRecipes.mainCourse);
        if (selectedRecipes.dessert) addIngredients(selectedRecipes.dessert);
        this.shoppingList = Array.from(ingredients, ([name, { quantity, unit }]) => ({ name, quantity, unit }));
      }
    },
    goBack() {
      this.$router.push({ name: 'MenuSummary', query: { selectedRecipes: this.$route.query.selectedRecipes, portions: this.portions } });
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
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
  h2 {
    font-size: 1.2rem;
  }

  ul {
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  button {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>