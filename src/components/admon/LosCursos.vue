<template>
  <section>
    <div>
      <div>
        <h5>Cursos</h5>
        <div class="container">
          <!--iNICIO SALON Y MATERIAS-->
          <div class="cajaPrincipal"></div>

          <!--Agregar-->
          <div class="border">
            <div class="caja">
              <div class="caja1">
                <label for="">Curso: </label>
                <input type="text" placeholder="Ejemplo: 9" class="form-control form-control-sm" />
              </div>
              <div class="caja1">
                <label for="">Año: </label>
                <input type="text" placeholder="Ejemplo: 2021" class="form-control form-control-sm" />
              </div>
              <div class="caja1">
                <button type="button" class="btn btn-success">
                  Agregar curso
                </button>
              </div>
              <div class="caja1"></div>
            </div>
          </div>
          <div class="separador">
            <div class="border">
              <div class="d-flex">
                <div class="caja">
                  <div class="caja1">
                    <label for="">Seleccionar: </label>
                    <select
                      v-model="rol"
                      class="form-control form-control-sm col-5 col-lg-9"
                    >
                      <option>Todos</option>
                      <option>Habilidados</option>
                      <option>Deshabilitados</option>
                    </select>
                  </div>
                  <div class="caja1"></div>
                </div>
                <div class="caja">
                  <div class="caja1">
                    <label for="">Curso: </label>
                    <input class="form-control form-control-sm" type="text" />
                  </div>
                  <div class="caja1">
                    <button type="button" class="btn btn-success">
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Tablas-->
          <div :class="tablaInicio" class="separador">
            <div class="tabla">
              <table class="table">
                <thead>
                  <tr>
                    <th class="columnas" scope="col">id</th>
                    <th>Curso</th>
                    <th>Año</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="curso in 12" :key="curso">
                    <th class="columnas" scope="col">{{ curso }}</th>
                    <th>Informática</th>
                    <th>2017</th>
                    <th>
                      <button
                        @click="activarCurso"
                        v-if="descativarCurso"
                        type="button"
                        class="btn btn-success boton"
                      >
                        Habilitar
                      </button>
                      <button
                        @click="activarCurso"
                        v-else
                        type="button"
                        class="btn btn-danger boton"
                      >
                        Deshabilitar
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--Fin tablas-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LosCursos",
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