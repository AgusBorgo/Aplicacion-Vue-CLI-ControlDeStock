<template>
  <section class="card">
    <div class="card-hearder">
      <h3>Formulario Usuarios</h3>
    </div>

    <div class="card-body">
      <form @submit.prevent="enviar">
        <!-- Nombre -->
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" class="form-control"
            v-model.trim="usuario.nombre"
            @input="usuarioDirty.nombre = true" />
          <div v-if="usuarioDirty.nombre && !usuario.nombre" class="alert alert-danger mt-2">Campo obligatorio</div>
          <div v-if="usuarioDirty.nombre && (usuario.nombre?.length < 5 || usuario.nombre?.length > 15)" class="alert alert-warning mt-2">
            El nombre debe tener entre 5 y 15 caracteres
          </div>
        </div>

        <!-- Edad -->
        <div class="form-group">
          <label for="edad">Edad:</label>
          <input type="number" id="edad" class="form-control"
            v-model.number="usuario.edad"
            @input="usuarioDirty.edad = true" />
          <div v-if="usuarioDirty.edad && !usuario.edad" class="alert alert-danger mt-2">Campo obligatorio</div>
          <div v-if="usuarioDirty.edad && (usuario.edad < 18 || usuario.edad > 120)" class="alert alert-warning mt-2">
            Edad debe estar entre 18 y 120 años
          </div>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control"
            v-model.trim="usuario.email"
            @input="usuarioDirty.email = true" />
          <div v-if="usuarioDirty.email && !usuario.email" class="alert alert-danger mt-2">Campo obligatorio</div>
          <div v-if="usuarioDirty.email && !emailValido(usuario.email)" class="alert alert-warning mt-2">
            Email inválido
          </div>
        </div>

        <!-- Botón enviar -->
        <button class="btn btn-success my-3" :disabled="algunCampoNoValido">Enviar</button>
      </form>

      <hr />

      <!-- Tabla de usuarios -->
      <div v-if="usuarios.length">
        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(u, index) in usuarios" :key="index">
                <td>{{ u.nombre }}</td>
                <td>{{ u.edad }}</td>
                <td>{{ u.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4 v-else>Agregá usuarios con el formulario</h4>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormularioUsuarios',
  data() {
    return {
      usuario: this.iniForm(),
      usuarioDirty: this.iniForm(),
      usuarios: [],
    };
  },
  computed: {
    algunCampoNoValido() {
      const u = this.usuario;
      return (
        !u.nombre ||
        u.nombre.length < 5 ||
        u.nombre.length > 15 ||
        !u.edad ||
        u.edad < 18 ||
        u.edad > 120 ||
        !u.email ||
        !this.emailValido(u.email)
      );
    },
  },
  methods: {
    iniForm() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },
    emailValido(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    enviar() {
      const nuevoUsuario = { ...this.usuario };
      this.usuarios.push(nuevoUsuario);
      this.usuario = this.iniForm();
      this.usuarioDirty = this.iniForm();
    },
  },
};
</script>

<style scoped>
.card-hearder {
  background-color: rgb(20, 169, 35);
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}
.table th {
  text-transform: uppercase;
  font-size: 12px;
}
label {
  text-transform: uppercase;
  font-size: 12px;
}
</style>