<template>
    <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>TRABAJO TRES</h2>
        </header>
      </div>
      <div class="card-body">
        <main>
            <NavBar />
            <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
}

.card-header {
  background-color: #343a40;
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  text-align: center;
}

.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.card-body {
  padding: 2rem;
  background-color: #f8f9fa;
}

main {
  margin-top: 1rem;
}
</style>
