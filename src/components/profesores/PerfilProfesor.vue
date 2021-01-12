<template>
  <div>
    <div>
      <h5>Perfil del profesor</h5>
      <div id="cajaProfe" class="row container">
        <div class="col1">
          <b>Nombre completo:</b>{{ datosProfesor.nombre }}
        </div>
        <div class="col1">
          <b>Documento:</b>{{ datosProfesor.TipoDoc }}
          {{ datosProfesor.NoDoc }}
        </div>
        <div class="col1"><b>Areas:</b>{{ datosProfesor.area }}</div>
        <div class="col1"><b>Dirección:</b>{{ datosProfesor.domicilio }}</div>
        <div class="col1"><b>Tel/Cel:</b>{{ datosProfesor.tel }}</div>
        <div class="col1"><b>Tel/Cel:</b>{{ datosProfesor.email }}</div>
      </div>
    </div>
    <div class="margenCont">
      <h5>Pendientes por calificar</h5>
      <div>
        <div class="container">
          <div class="tabla">
            <table class="table">
              <thead>
                <tr>
                  <th class="columnas" scope="col">id</th>
                  <th class="columnas" scope="col">Grado</th>
                  <th class="columnas" scope="col">Estudiante</th>
                  <th class="columnas" scope="col">Materia</th>
                  <th class="columnas" scope="col">Tarea</th>
                  <th class="columnas" scope="col">Nota</th>
                  <th class="columnas" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="id in 10" :key="id">
                  <th class="filas" scope="row">{{ id }}</th>
                  <th class="columnas" scope="col">{{ grado }}</th>
                  <th class="columnas" scope="col">{{ estudiante }}</th>
                  <th class="columnas" scope="col">{{ materia }}</th>
                  <th class="columnas" scope="col">{{ tarea }}</th>
                  <th class="columnas" scope="col">
                    <input class="form-control form-control-sm" type="tel" />
                  </th>
                  <th scope="col">
                    <button type="button" class="btn btn-success">
                      Calificar
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--Pagination-->
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Anterior</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">0</a></li>
          <li class="page-item active">
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
      <!--Fin paginatio-->
    </div>
  </div>
</template>

<script>
export default {
  name: "PerfilProfesor",
  data() {
    return {
      datosProfesor: {
        nombre: "Heywin Hernando Meneses Perez",
        TipoDoc: "CC",
        NoDoc: "1094579343",
        area: "Ingles, Informatica",
        domicilio: "Cra 5 No 17 - 79",
        tel: "3226737763",
        email: "heywin1@gmail.com",
      },
    };
  },
};
</script>

<style scoped>
.col1,
.tabla {
  margin-right: 10px;
}

b {
  color: #007bff;
  background: white;
  text-align: center;
  margin-right: 5px;
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

p {
  text-align: center;
}

#cajaProfe {
  justify-content: center;
}

.margenCont {
  margin-top: 20px;
}

.form-control {
  width: 50px;
}
</style>