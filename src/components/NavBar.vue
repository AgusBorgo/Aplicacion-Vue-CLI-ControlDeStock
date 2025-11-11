<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/usuariosApi">Usuarios con API</RouterLink>
          <RouterLink class="nav-link" to="/formulario">Formulario</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',

    props: {
    // Definición de props
    },

  data() {
    return {
      
    };
  },

  computed: {
    // Propiedades computadas, son como getters
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    // Métodos del componente
  },

  created() {
    // Código que se ejecuta cuando el componente se crea
  },

  mounted() {
    // Código que se ejecuta cuando el componente se monta
  },

  unmounted() {
    // Código que se ejecuta cuando el componente se desmonta
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
}

.navbar-nav .nav-link {
  margin-right: 1rem;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #00ffcc;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.7%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>