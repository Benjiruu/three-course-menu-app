<template>
  <div class="recipe-selection">
    <h1>Välj Dina Maträtter</h1>
    <div class="section">
      <h2>Förrätt</h2>
      <ul>
        <li v-for="appetizer in appetizers" :key="appetizer.id">
          <label>
            <input type="radio" :value="appetizer" v-model="selectedRecipes.appetizer" />
            {{ appetizer.name }}
          </label>
        </li>
      </ul>
    </div>
    
    <div class="section">
      <h2>Huvudrätt</h2>
      <ul>
        <li v-for="mainCourse in mainCourses" :key="mainCourse.id">
          <label>
            <input type="radio" :value="mainCourse" v-model="selectedRecipes.mainCourse" />
            {{ mainCourse.name }}
          </label>
        </li>
      </ul>
    </div>
    
    <div class="section">
      <h2>Efterrätt</h2>
      <ul>
        <li v-for="dessert in desserts" :key="dessert.id">
          <label>
            <input type="radio" :value="dessert" v-model="selectedRecipes.dessert" />
            {{ dessert.name }}
          </label>
        </li>
      </ul>
    </div>
    
    <div class="portions">
      <label for="portions">Antal portioner:</label>
      <input type="number" id="portions" v-model.number="portions" min="1" />
    </div>
    
    <button @click="goToSummary">Spara</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import recipes from '../recipes.json';

export default {
  data() {
    return {
      appetizers: recipes.förrätter,
      mainCourses: recipes.huvudrätter,
      desserts: recipes.efterrätter,
      selectedRecipes: {
        appetizer: null,
        mainCourse: null,
        dessert: null
      },
      portions: 1,
      errorMessage: ''
    };
  },
  methods: {
    goToSummary() {
      if (!this.selectedRecipes.appetizer || !this.selectedRecipes.mainCourse || !this.selectedRecipes.dessert) {
        this.errorMessage = 'Vänligen välj en rätt för varje kategori.';
      } else {
        this.errorMessage = '';
        this.$router.push({ 
          name: 'MenuSummary', 
          query: { 
            selectedRecipes: JSON.stringify(this.selectedRecipes),
            portions: this.portions
          } 
        });
      }
    }
  }
};
</script>

<style scoped>
.recipe-selection {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #42b983;
  text-align: center;
  margin-bottom: 20px;
}
.section {
  margin-bottom: 20px;
}
h2 {
  color: #333;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
}
label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
input[type="radio"] {
  margin-right: 10px;
}
.portions {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.portions label {
  margin-right: 10px;
}
button {
  display: block;
  width: 100%;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
}
button:hover {
  background-color: #369f6e;
}
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  li {
    padding: 8px;
  }
  button {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>