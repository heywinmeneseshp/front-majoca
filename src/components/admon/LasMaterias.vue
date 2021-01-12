<template>
  <section>
    <!--Cursos-->
    
    <!--Fin Cursoso-->
    <!--Materias-->
    <div class="separador">
      <h5>Materias</h5>
      <div class="container">
        <!--iNICIO SALON Y MATERIAS-->
        <div class="cajaPrincipal">
          <nav>
            <button @click="mostrarAgregar" type="button" class="btn btn-link">
              Agregar
            </button>
            <button
              @click="mostrarModificar"
              type="button"
              class="btn btn-link"
            >
              Modificar
            </button>
            <button
              @click="mostrarDesactivar"
              type="button"
              class="btn btn-link"
            >
              Eliminar
            </button>
          </nav>
        </div>

        <!--Agregar-->
        <div :class="agregar" class="border">
          <div class="caja">
            <div class="caja1">
              <label for="">Nombre: </label>
              <input class="form-control form-control-sm" type="text" />
            </div>
            <div class="caja1">
              <button type="button" class="btn btn-success">
                Agregar materia
              </button>
            </div>
          </div>
        </div>
        <!--modificar-->
        <div :class="modificar" class="border">
          <div class="caja">
            <div class="caja1">
              <label for="">Buscar: </label>
              <input class="form-control form-control-sm" type="text" />
            </div>
            <button type="button" class="btn btn-success">Buscar</button>
          </div>
        </div>
        <!--Tabla modificar-->
        <div :class="modificar" class="separador">
          <div class="tabla">
            <table class="table">
              <thead>
                <tr>
                  <th class="columnas" scope="col">Materias</th>
                  <th>Nuevo nombre</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="columnas" scope="col">Ingles</th>
                  <th>
                    <input class="form-control form-control-sm" type="text" />
                  </th>
                  <th>
                    <div class="form-control form-control-sm btn-warning btn">
                      Modificar
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--Desactivar-->
        <div :class="desactivar" class="border">
          <div class="caja">
            <div class="caja1">
              <label for="">Buscar: </label>
              <input class="form-control form-control-sm" type="text" />
            </div>
            <div class="caja1">
              <button type="button" class="btn btn-success">Buscar</button>
            </div>
          </div>
        </div>
        <!--tabla desactivas-->
        <div :class="desactivar" class="separador">
          <div class="tabla">
            <table class="table">
              <thead>
                <tr>
                  <th class="columnas" scope="col">Materias</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="columnas" scope="col">Ingles</th>
                  <th>
                    <div
                      @click="activarMateria"
                      type="button"
                      class="btn btn-danger botones"
                    >
                      Eliminar
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!--FIN SALON Y MATERIAS-->
        <!--Tablas-->
        <div :class="tablaInicio" class="separador">
          <div class="tabla">
            <table class="table">
              <thead>
                <tr>
                  <th class="columnas" scope="col">Materias</th>
                  <th>PS</th>
                  <th
                    v-for="grado in 11"
                    :key="grado"
                    class="columnas"
                    scope="col"
                  >
                    {{ grado }}
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="columnas" scope="col">Ingles</th>
                  <th
                    v-for="grado in 12"
                    :key="grado"
                    class="columnas"
                    scope="col"
                  >
                    <input type="checkbox" />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 coli">
            <button type="button" class="btn btn-success boton">
              Actualizar table
            </button>
          </div>
        </div>
        <!--Fin tablas-->
      </div>
    </div>
    <!--Fin Materias-->
  </section>
</template>

<script>
export default {
  name: "LasMaterias",
  data() {
    return {
      agregar: "noMostrar",
      modificar: "noMostrar",
      desactivar: "noMostrar",
      tablaInicio: "mostrar",
      desactivarMateria: "true",
      descativarCurso: "true",
    };
  },
  methods: {
    mostrarAgregar() {
      this.agregar = "mostrar";
      this.modificar = "noMostrar";
      this.desactivar = "noMostrar";
      this.tablaInicio = "mostrar";
    },
    mostrarModificar() {
      this.agregar = "noMostrar";
      this.modificar = "mostrar";
      this.desactivar = "noMostrar";
      this.tablaInicio = "noMostrar";
    },
    mostrarDesactivar() {
      this.agregar = "noMostrar";
      this.modificar = "noMostrar";
      this.desactivar = "mostrar";
      this.tablaInicio = "noMostrar";
    },
    activarMateria() {
      if (this.desactivarMateria == true) {
        this.desactivarMateria = false;
      } else {
        this.desactivarMateria = true;
      }
    },
    activarCurso() {
      if (this.descativarCurso == true) {
        this.descativarCurso = false;
      } else {
        this.descativarCurso = true;
      }
    },
  },
};
</script>

<style scoped>
h5 {
  background: #007bff;
  color: white;
  padding: 4px 0 4px 0;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.botones {
  width: 200px;
}

.form-control {
  text-align: center;
  justify-content: center;
}

.caja1 {
  display: flex;
  margin-right: 10px;
  align-items: center;
}

.caja {
  display: flex;
  justify-content: baseline;
  margin: 20px;
  align-items: center;
}

.cajaPrincipal {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

label {
  color: #007bff;
  text-align: center;
  margin-right: 5px;
  font-weight: bold;
  width: 100%;
}

.container {
  margin-top: 10px;
}

.separador {
  padding: 15px 0 0 0;
}

.boton {
  width: 100%;
}

.border {
  border-radius: 20px;
}

.mostrar {
  display: block;
}

.noMostrar {
  display: none;
}
</style>