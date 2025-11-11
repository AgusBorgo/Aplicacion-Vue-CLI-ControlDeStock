<template>
  <section class="card">
    <div class="card-hearder">
      <h3>Usuarios desde MockAPI</h3>
    </div>

    <div class="card-body">
      <button class="btn btn-primary my-3" @click="obtenerUsuarios">Obtener usuarios</button>
      <button class="btn btn-danger my-3 ms-2" @click="usuarios = []">Limpiar</button>

      <div v-if="usuarios.length">
        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.telefono }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4 v-else>Presioná el botón para cargar los usuarios</h4>
    </div>
  </section>
</template>

<script>
import servicioUsuarios from '@/servicios/Usuarios';
export default {
  name: 'UsuariosApi',
  data() {
    return {
      servicioUsuarios: new servicioUsuarios(),
      usuarios: [],
    };
  },
  methods: {
    async obtenerUsuarios() {
  try {
    const usuarios = await this.servicioUsuarios.getAll();
    this.usuarios = usuarios;
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
  }
}
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
  background-color: #28a745;
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  text-align: center;
}

.card-header h3 {
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: 1px;
}

.card-body {
  background-color: #f8f9fa;
  padding: 2rem;
}

button {
  min-width: 150px;
}

.table {
  margin-top: 1rem;
}

.table th {
  text-transform: uppercase;
  font-size: 12px;
  background-color: #343a40;
  color: #fff;
}

.table td {
  vertical-align: middle;
}

h4 {
  margin-top: 2rem;
  color: #6c757d;
  font-style: italic;
}
</style>