<template>
  <section>
    <div id="hero">
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-body">
              <div>
                <h3>¡ENHORABUENA TU SOLICITUD HA SIDO ENVIADA!</h3>
                <div>
                  <p>
                    Para completar el proceso de matrícula
                    <br />
                    Por favor ingrese al correo coreo@correo.co y abra el enlace
                    que te hemos enviado para confirmar su solicitud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheVerificacion",
};
</script>


<style scoped>
.card-body {
  height: 100%;
  align-content: center;
}

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: white;
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