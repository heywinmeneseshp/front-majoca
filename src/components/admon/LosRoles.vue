<template>
  <div>
    <h5>Administrador de usuarios</h5>
    <div class="container">
      <p>
        Para agregar un nuevo usuario por favor selecciones el tipo de usuario y
        rellene los espacios con la información correspondiente.
      </p>
      <div class="col-7 row">
        <label for="">Tipo de Usuario:</label>
        <select v-model="rol" class="form-control form-control-sm col-5">
          <option @click="mostrarAdmon">Administrador</option>
          <option @click="mostrarProfesor">Profesor</option>
          <option @click="mostrarEstudiante">Estudiante</option>
          <option @click="mostrarColum">Columnista</option>
        </select>
      </div>
      <br />
    </div>
    <div>
      <h5>{{ rol }}</h5>
    </div>

    <UsuarioProfesor :class="profesor" />
    <UsuarioEstudiante :class="estudiante" />
    <UsuarioAdministrador :class="admon"/>
    <UsuarioColum :class="colum"/>
  </div>
</template>

<script>
import UsuarioAdministrador from './usuarios/UsuarioAdministrador.vue';
import UsuarioEstudiante from "./usuarios/UsuarioEstudiante.vue";
import UsuarioProfesor from "./usuarios/UsuarioProfesor.vue";
import UsuarioColum from "./usuarios/UsuarioColum.vue";

export default {
  name: "LosRoles",
  components: {
    UsuarioEstudiante,
    UsuarioProfesor,
    UsuarioAdministrador,
    UsuarioColum,
  },
  data() {
    return {
      profesor: "noMostrar",
      estudiante: "noMostrar",
      admon: "noMostrar",
      colum: "noMostrar",
      rol: "",
    };
  },
  methods: {
    mostrarProfesor() {
      this.profesor = "mostrar";
      this.estudiante = "noMostrar";
      this.admon = "noMostrar";
      this.colum = "noMostrar"
    },
    mostrarEstudiante() {
      this.estudiante = "mostrar";
      this.profesor = "noMostrar";
      this.admon = "noMostrar";
      this.colum = "noMostrar"
    },
    mostrarAdmon() {
      this.estudiante = "noMostrar";
      this.profesor = "noMostrar";
      this.admon = "mostrar";
      this.colum = "noMostrar"
    },
    mostrarColum() {
      this.estudiante = "noMostrar";
      this.profesor = "noMostrar";
      this.admon = "noMostrar";
      this.colum = "mostrar";
    }
  },
};
</script>

<style scoped>
.caja1 {
  display: flex;
  width: 100%;
  margin-bottom: 5px;
}

input,
select {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;
  overflow: visible;
}

input::placeholder {
  color: #6c757d;
  opacity: 1;
}

.informacioLaboral {
  margin-top: 15px;
}

h5 {
  background: #007bff;
  color: white;
  padding: 4px 0 4px 0;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

#boton {
  margin-top: 30px;
  margin-bottom: 40px;
}

.separador {
  padding: 15px 0 0 0;
}

.noMostrar {
  display: none;
}

.mostrar {
  display: block;
}

label {
  color: #007bff;
  text-align: center;
  margin-right: 5px;
  font-weight: bold;
}
</style>