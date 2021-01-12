<template>
  <section>
    <div id="hero">
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Iniciar Sesión</h3>
              <div class="d-flex justify-content-end social_icon">
                <span><i class="fab fa-facebook-square"></i></span>
                <span><i class="fab fa-google-plus-square"></i></span>
                <span><i class="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="fas fa-user"></i
                    ></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="usuario"
                    v-model="body.usuario"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="fas fa-key"></i
                    ></span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="contraseña"
                    v-model="body.contrasena"
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" />Recuerdame
                </div>
                <div class="form-group">
                  <!--Inicio boton inicio sesion-->
                  <button
                    @click="iniciarSesion"
                    value="Login"
                    type="button"
                    class="btn float-right login_btn"
                  >
                    Login
                  </button>
                  <!--Fin boton inicio sesion-->
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                ¿No tienes una cuenta?
                <router-link to="/formulario">Regístrate</router-link>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>{{ $data }}</pre>
    </div>
  </section>
</template>

<script>

export default {
  name: "TheLogin",
  data() {
    return {
      body: {
        usuario: "",
        contrasena: "",
      },
    };
  },
  methods: {
    async iniciarSesion() {
  
      let respuesta = await this.$http.post("/api/usuario/login", this.body);
      console.log(respuesta.data);
    
      /* RESPUESTA TEMPORAL
      https://es.stackoverflow.com/questions/289234/error-con-%C2%B4axios-nodejs%C2%B4-no-responde-correctamente-pero-con-postman-la-respuesta
      */
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Numans");

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

a {
  text-decoration-style: none;
}
.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #007bff;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #007bff;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: white;
  background-color: #007bff;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}

#hero {
  width: 100%;
  height: 92vh;
  background: url("../assets/img/fondo.jpg") center center;
  text-align: center;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

#hero:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>