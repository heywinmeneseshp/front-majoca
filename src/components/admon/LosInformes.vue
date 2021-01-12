<template>
  <div>
    <h5>Estudiantes</h5>
    <div class="container">
      <!--iNICIO SALON Y MATERIAS-->

      <div class="cajaPrincipal">
          <div class="caja1">
          <label for="">Año: </label>
          <select class="form-control form-control-sm">
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
        
        <div class="caja1">
          <label for="">Grado:</label>
          <select class="form-control form-control-sm">
            <option v-for="grado in 12" :key="grado">
              Grado {{ grado }}
            </option>
          </select>
        </div>
        <div class="caja1">
          <label for="">Periodo: </label>
          <select class="form-control form-control-sm">
            <option>Primer periódo</option>
            <option>Segundo periódo</option>
            <option>Tercer periódo</option>
            <option>Cuarto periódo</option>
          </select>
        </div>
        <div class="caja1 col-4">
          <label for="">Estudiante:</label>
          <input class="form-control form-control-sm" type="text" placeholder="Nombre del estudiante">
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
                <th class="columnas" scope="col">año</th>
                <th class="columnas" scope="col">Periódo</th>
                <th class="columnas" scope="col">grado</th>
                <th class="columnas" scope="col">Estado</th>
                <th class="columnas" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="id in 10" :key="id">
                <th class="columnas" scope="col">Heywin Meneses Perez</th>
                <th class="columnas" scope="col">2019</th>
                <th class="columnas" scope="col">Primer periódo</th>
                <th class="columnas" scope="col">12</th>
                <th class="columnas" scope="col">Vencido</th>
                <th class="columnas" scope="col">Descargar</th>
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
  name: "LosInformes",
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