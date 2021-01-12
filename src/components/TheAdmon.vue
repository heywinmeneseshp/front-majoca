<template>
  <div>
    <div id="hero">
      <div id="contenedorExt" class="d-flex">
        <div id="contMenu" class="contenedor">
          <div class="margenCont">
            <button
              @click="mostrarInicio"
              type="button"
              class="btn btn-primary"
            >
              Configuración
            </button>
            <button @click="mostrarRoles" type="button" class="btn btn-primary">
              Roles
            </button>
            <button
              @click="mostrarCursos"
              type="button"
              class="btn btn-primary"
            >
              Cursos
            </button>
            <button
              @click="mostrarMaterias"
              type="button"
              class="btn btn-primary"
            >
              Materias
            </button>
            <button @click="mostrarNotas" type="button" class="btn btn-primary">
              Notas
            </button>
            <button
              @click="mostrarEstudiantes"
              type="button"
              class="btn btn-primary"
            >
              Estudiantes
            </button>
            <button
              @click="mostrarInformes"
              type="button"
              class="btn btn-primary"
            >
              Informes
            </button>
          </div>
        </div>

        <div class="contenedor col-lg-9">
          <div class="margenCont">
            <div class="container">
              <TheHome :class="inicio" />
              <LosRoles :class="roles" />
              <LosCursos :class="cursos" />
              <LasMaterias :class="materias" />
              <AdmonNotas :class="notas" />
              <LosEstudiantes :class="estudiantes" />
              <LosInformes :class="informes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdmonNotas from "./admon/AdmonNotas.vue";
import LosRoles from "./admon/LosRoles.vue";
import LasMaterias from "./admon/LasMaterias.vue";
import LosCursos from "./admon/LosCursos.vue";
import TheHome from "./admon/TheHome.vue";
import LosEstudiantes from "./admon/LosEstudiantes.vue";
import LosInformes from "./admon/LosInformes.vue";

export default {
  components: {
    LosRoles,
    AdmonNotas,
    TheHome,
    LosEstudiantes,
    LosInformes,
    LasMaterias,
    LosCursos,
  },
  name: "LosProfesores",
  data() {
    return {
      inicio: "mostrar",
      roles: "noMostrar",
      cursos: "noMostrar",
      materias: "noMostrar",
      notas: "noMostrar",
      informes: "noMostrar",
      estudiantes: "noMostrar",
    };
  },
  methods: {
    mostrarInicio() {
      this.inicio = "mostrar";
      this.roles = "noMostrar";
      this.materias = "noMostrar";
      this.notas = "noMostrar";
      this.informes = "noMostrar";
      this.estudiantes = "noMostrar";
      this.cursos = "noMostrar";
    },
    mostrarRoles() {
      this.inicio = "noMostrar";
      this.roles = "mostrar";
      this.materias = "noMostrar";
      this.notas = "noMostrar";
      this.informes = "noMostrar";
      this.estudiantes = "noMostrar";
      this.cursos = "noMostrar";
    },
    mostrarNotas() {
      this.inicio = "noMostrar";
      this.roles = "noMostrar";
      this.materias = "noMostrar";
      this.notas = "mostrar";
      this.informes = "noMostrar";
      this.estudiantes = "noMostrar";
      this.cursos = "noMostrar";
    },
    mostrarInformes() {
      this.inicio = "noMostrar";
      this.roles = "noMostrar";
      this.materias = "noMostrar";
      this.notas = "noMostrar";
      this.informes = "mostrar";
      this.estudiantes = "noMostrar";
      this.cursos = "noMostrar";
    },
    mostrarMaterias() {
      this.inicio = "noMostrar";
      this.roles = "noMostrar";
      this.materias = "mostrar";
      this.notas = "noMostrar";
      this.informes = "noMostrar";
      this.estudientes = "noMostrar";
      this.cursos = "noMostrar";
    },
    mostrarEstudiantes() {
      this.estudiantes = "mostrar";
      this.inicio = "noMostrar";
      this.roles = "noMostrar";
      this.materias = "noMostrar";
      this.notas = "noMostrar";
      this.informes = "noMostrar";
      this.cursos = "noMostrar";
    },
    mostrarCursos() {
      this.estudiantes = "noMostrar";
      this.inicio = "noMostrar";
      this.roles = "noMostrar";
      this.materias = "noMostrar";
      this.notas = "noMostrar";
      this.informes = "noMostrar";
      this.cursos = "mostrar";
    },
  },
};
</script>

<style scoped>
#hero {
  width: 100%;
  background: url("../assets/img/fondo.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: repeat-y;
  position: relative;
}

.contenedor {
  background: white;
  border-radius: 20px;
}

menu {
  display: row;
}

button {
  margin-bottom: 2px;
  width: 100%;
}

#contenedorExt {
  padding: 40px;
  justify-content: center;
}

.margenCont {
  padding: 20px;
}

#contMenu {
  margin-right: 10px;
  width: 200px;
}

.mostrar {
  display: contents;
}

.noMostrar {
  display: none;
}
</style>