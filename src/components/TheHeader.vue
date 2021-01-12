<template>
  <div>
    <header class="bg-primary">
      <div class="container">
        <div class="navbar navbar-dark bg-primary">
          <!--Logo-->
          <div class="logo">
            <h3 id="majoca" class="text-light">Majoca</h3>
          </div>
          <!--Fin Logo-->
          <!--Menu-->
          <nav class="nav">
            <div class="boton">
              <router-link class="btn btn-primary" to="/">Inicio</router-link>
            </div>
            <div class="boton">
              <router-link type="button" class="btn btn-primary" to="/nosotros"
                >Nosotros</router-link
              >
            </div>
            <div class="boton">
              <router-link type="button" class="btn btn-primary" to="/matricula"
                >Admisiones</router-link
              >
            </div>
            <div class="boton">
              <router-link type="button" class="btn btn-primary" to="/contacto"
                >Contacto</router-link
              >
            </div>
            <div class="boton">
              <router-link type="button" class="btn btn-light" to="/login"
                >Iniciar Sesión
              </router-link>
            </div>
          </nav>
          <!--Fin Menu-->
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {},
};
</script>

<style scoped>
#majoca {
  font-family: "Poppins";
  margin-top: 5px;
}

.boton {
  margin-left: 5px;
}
</style>