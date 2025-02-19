<script setup>
import { ref } from 'vue'
import VueDummy from 'vue-dummy'

// Define reactive state
const serviceCount = ref(3)

// Make vue-dummy available in template
defineExpose({
  VueDummy
})
</script>

<template>
  <div class="container">
    <!-- Header Section -->
    <header class="header">
      <h1>Welcome to the Best Website</h1>
      <p v-dummy="50"></p>
    </header>

    <!-- Main Content -->
    <main class="content">
      <section class="featured">
        <h2>Featured Section</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </section>

      <section class="services">
        <h2>The Best Services</h2>
        <div class="service-grid">
          <article v-for="n in serviceCount" :key="n" class="service-card">
            <h3>Service {{ n }}</h3>
            <p>Tincidunt augue commodo eget facilisis etiam lectus odio eget sit. Ipsum quisque mi feugiat amet lacus. Viverra vestibulum nascetur tellus neque ornare tempus nostra molestie. Aliquam pharetra orci, potenti quis habitant consectetur commodo. Fermentum parturient hendrerit morbi convallis non turpis. Nam sociosqu fusce sem volutpat risus. Aptent felis sagittis rutrum sollicitudin erat convallis. Quam mollis laoreet mus parturient faucibus etiam non. Id porta pellentesque vel metus, himenaeos dignissim? </p>
          </article>
        </div>
      </section>

      <section class="featured">
        <h2>An analysis on Austrian GDP</h2>
                <p>Under construction</p>
      </section>
    </main>

    <!-- Footer Section -->
    <footer class="footer">
      <p v-dummy="20"></p>
      <small>&copy; 2025 The Best Company</small>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.content {
  margin-bottom: 40px;
}

.featured {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}
</style>
