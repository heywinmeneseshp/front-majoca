<template>
  <section>
      <h5>Compromisos</h5>
    <div class="cajaPrincipal">
        
      <div class="caja1">
        <label for="">Materia: </label>
        <select class="form-control form-control-sm">
          <option v-for="materia in 11" :key="materia">
            Materia {{ materia }}
          </option>
        </select>
      </div>
      <div class="caja1">
        <label for="">Profesor:</label>
        <div class="form-control form-control-sm">{{ profesor }}</div>
      </div>
    </div>
    <!--tabla de compromisos-->
    <div class="tabla">
      <table class="table">
        <thead>
          <tr>
            <th class="columnas" scope="col">Nombre</th>
            <th class="columnas" scope="col">Publición</th>
            <th class="columnas" scope="col">Límite</th>
            <th class="columnas" scope="col">Estado</th>
            <th class="columnas" scope="col">Nota</th>
            <th class="columnas" scope="col"></th>
            <th class="columnas" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="materia in 4" :key="materia">
            <th class="filas" scope="row">Materia</th>
            <td >Fecha Publición</td>
            <td>Fecha Limite</td>
            <td>estafo tarea</td>
            <td>Nota tarea</td>
            <td><button type="button" class="btn btn-success">adjuntar</button></td>
            <td ><button type="button" class="btn btn-success">Enviar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--Fin tabla de notas-->

    <!--Pagination-->
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Anterior</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#"
            >2 <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Siguiente</a>
        </li>
      </ul>
    </nav>
    <!--End Pagination-->
  </section>
</template>

<script>
export default {
  name: "LosCompromisos",
  components: {},
  data() {
    return {
        profesor: "Heywin Meneses",
    };
  },
};
</script>

<style scoped>
.caja1 {
  display: flex;
}

.cajaPrincipal {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.form-control-sm {
  width: 200px;
}

label {
  color: #007bff;
  text-align: center;
  margin-right: 5px;
  font-weight: bold;
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

.tabla {
  margin-top: 20px;
}

.columnas,
.filas {
  color: #007bff;
}
</style>