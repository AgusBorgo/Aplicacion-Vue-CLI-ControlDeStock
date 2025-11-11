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

</style>
