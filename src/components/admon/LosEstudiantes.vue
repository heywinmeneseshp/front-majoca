<template>
  <div>
    <h5>Estudiantes</h5>
    <div class="container">
      <!--iNICIO SALON Y MATERIAS-->

      <div class="cajaPrincipal">
        <div class="caja1">
          <label for="">Estado: </label>
          <select class="form-control form-control-sm">
            <option>Pendiente</option>
            <option>Activo</option>
            <option>Vencido</option>
            <option>Retirado</option>
            <option>Graduado</option>
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
                <th class="columnas" scope="col">Ultimo pago</th>
                <th class="columnas" scope="col">Vencimiento</th>
                <th class="columnas" scope="col">Estado</th>
                <th class="columnas" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="id in 10" :key="id">
                <th class="columnas" scope="col">Heywin Meneses Perez</th>
                <th class="columnas" scope="col">13/Ene/2020</th>
                <th class="columnas" scope="col">13/Feb/2020</th>
                <th class="columnas" scope="col">Vencido</th>
                <th class="columnas" scope="col">Ver detalle</th>
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
  name: "LosEstudiantes",
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