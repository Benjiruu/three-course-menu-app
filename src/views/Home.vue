<template>
  <div class="home">
    <h1>Välkommen till Tre-Rätters</h1>
    <p>Skapa din egen tre-rätters meny genom att välja en förrätt, huvudrätt och efterrätt.</p>
    <router-link to="/recipe-selection">
      <button>Kom igång</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 50px auto;
}

h1 {
  color: #42b983;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #369f6e;
}

@media (max-width: 768px) {
  .home {
    margin: 20px;
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>