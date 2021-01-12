<template>
  <section>
      <h5>Certificados</h5>
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
  </section>
</template>

<script>
export default {
  name: "LosCertificados",
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
</style>