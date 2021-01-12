<template>

    <section>
 
        <div id="hero">
          <div id="contenedorExt" class="d-flex">
            <div class="contenedor col-lg-12">
              <div class="margenCont">
                <div class="container">
                  <h5>Datos del padre</h5>
                  <UsuarioEstudiante />
                </div>
              </div>
            </div>
          </div>
        </div>
 
    </section>

</template>

<script>
import UsuarioEstudiante from "./admon/usuarios/UsuarioEstudiante.vue";

export default {
  name: "FormularioMatricula",
  components: {
    UsuarioEstudiante,
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

#hero {
  width: 100%;
  background: url("../assets/img/fondo.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: repeat-y;
  position: relative;
}

.contenedor {
  background: white;
  border-radius: 20px;
}

menu {
  display: row;
}

button {
  margin-bottom: 2px;
  width: 100%;
}

#contenedorExt {
  padding: 2.5% 5%;
  justify-content: center;
}

.margenCont {
  padding: 20px;
}
</style>