<template>
  <div>
    <div class="contenedor">
      <div>
        <h5>Publicar Material</h5>
      </div>
      <div class="cajaPrincipal">
        <div class="col-3">
          <label for="">Material: </label>
          <input
            class="form-control form-control-sm"
            placeholder="Nombre del tema"
            type="text"
          />
        </div>

        <div class="col-2">
          <label for="">Grado: </label>
          <select class="form-control form-control-sm">
            <option v-for="grado in 11" :key="grado">Grado {{ grado }}</option>
          </select>
        </div>

        <div class="col-2">
          <label for="">Materia: </label>
          <select class="form-control form-control-sm">
            <option v-for="materia in 11" :key="materia">
              Materia {{ materia }}
            </option>
          </select>
        </div>

        <div class="col-2">
          <label for="">Periodo: </label>
          <select class="form-control form-control-sm">
            <option v-for="periodo in 4" :key="periodo">
              periodo {{ periodo }}
            </option>
          </select>
        </div>

        <div class="col-3">
          <label for="">Link: </label>
          <input
            class="form-control form-control-sm"
            placeholder="http://ejemplo.com/"
            type="text"
          />
        </div>
      </div>

      <div class="cajaPrincipal">
        <button type="button" class="btn btn-success">Publicar material</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialesProfesores",
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

.contenedor {
  margin-top: 20px;
}
</style>