<template>
  <div>
    <h5>Notas</h5>
    <div class="container">
      <!--iNICIO SALON Y MATERIAS-->

      <div class="cajaPrincipal">
        <div class="caja1">
          <label for="">Grado: </label>
          <select class="form-control form-control-sm">
            <option v-for="grado in 11" :key="grado">
              Grado {{ materia }}
            </option>
          </select>
        </div>
        <div class="caja1">
          <label for="">Materia:</label>
          <select class="form-control form-control-sm">
            <option v-for="materia in 12" :key="materia">
              Materia {{ materia }}
            </option>
          </select>
        </div>
        <div class="caja1">
          <label for="">Periódo:</label>
          <select class="form-control form-control-sm">
            <option v-for="materia in 4" :key="materia">
              Periodo {{ materia }}
            </option>
          </select>
        </div>
      </div>

      <!--FIN SALON Y MATERIAS-->
      <!--Tablas-->
      <div class="separador">
        <div class="tabla">
          <table class="table">
            <thead>
              <tr>
                <th class="columnas" scope="col">Estudiante</th>
                <th
                  v-for="nota in 10"
                  :key="nota"
                  class="columnas"
                  scope="col"
                ></th>
                <th class="columnas" scope="col">ExF</th>
                <th class="columnas" scope="col">Def</th>
                <th class="columnas" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="id in 10" :key="id">
                <th class="columnas" scope="col">Heywin Meneses Perez</th>
                <th v-for="nota in 12" :key="nota" class="columnas" scope="col">
                  {{ nota }}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--Fin tablas-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AdmonNotas",
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

.caja1 {
  display: flex;
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
}

.container {
  margin-top: 10px;
}

.separador {
  padding: 15px 0 0 0;
}
</style>