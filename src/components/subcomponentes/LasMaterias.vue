<template>
  <section>
    <h5>Notas</h5>
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
    <!--tabla de notas-->
    <div class="tabla">
      <table class="table">
        <thead>
          <tr>
            <th class="columnas" scope="col">Materia</th>
            <th class="columnas" scope="col">1</th>
            <th class="columnas" scope="col">2</th>
            <th class="columnas" scope="col">3</th>
            <th class="columnas" scope="col">4</th>
            <th class="columnas" scope="col">5</th>
            <th class="columnas" scope="col">6</th>
            <th class="columnas" scope="col">7</th>
            <th class="columnas" scope="col">8</th>
            <th class="columnas" scope="col">9</th>
            <th class="columnas" scope="col">Examen</th>
            <th class="columnas" scope="col">Nota Final</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="periodo in 5" :key="periodo">
            <th class="filas" scope="row">Periodo {{ periodo }}</th>
            <td v-for="nota in 10" :key="nota">{{ nota1 }}</td>
            <td>{{ NotaFinal }}</td>
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
  name: "LasMaterias",
  components: {},
  data() {
    return {
      profesor: "Heywin Meneses",
      nota1: "10.10",
      NotaFinal: "10.10",
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