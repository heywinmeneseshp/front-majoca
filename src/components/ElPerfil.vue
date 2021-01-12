<template>
  <div>

  <div>
    <div id="hero">
      <div id="contenedorExt" class="d-flex">
       
        <div id="contMenu" class="contenedor">
          <div class="margenCont">
              <button
                    @click="mostrarPerfil"
                    type="button"
                    class="btn btn-primary"
                  >
                    Perfil
                  </button>
                  <button
                    @click="mostrarNotas"
                    type="button"
                    class="btn btn-primary"
                  >
                    Notas
                  </button>
                  <button
                    @click="mostrarCompromisos"
                    type="button"
                    class="btn btn-primary"
                  >
                    Compromisos
                  </button>
                  <button
                  
                    type="button"
                    class="btn btn-primary"
                  >
                    Certificados
                  </button>
          </div>
        </div>

        <div class="contenedor col-lg-9">
          <div class="margenCont">
            <div class="container">
              <PerfilEstudiante :class="perfil"/>
              <LasMaterias :class="notas"/>
              <LosCompromisos :class="compromisos"/>
              <LosCertificados :class="certificados"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import LasMaterias from "./subcomponentes/LasMaterias.vue";
import LosCompromisos from "./subcomponentes/LosComprimisos.vue";
import PerfilEstudiante from "./subcomponentes/PerfilEstudiante.vue";
import LosCertificados from "./subcomponentes/LosCertificados.vue";

export default {
  components: {
    LasMaterias,
    PerfilEstudiante,
    LosCompromisos,
    LosCertificados,
  },
  name: "ElPerfil",
  data() {
    return {
        perfil: "mostrar",
        notas: "noMostrar",
        compromisos: "noMostrar",
        certificados: "noMostrar",
    };
  },
  methods: {
    mostrarPerfil() {
      if (this.perfil === "noMostrar") {
        this.perfil = "mostrar";
        this.notas = "noMostrar";
        this.compromisos = "noMostrar";
        this.certificados = "noMostrar";
      }
    },
    mostrarNotas() {
      if (this.notas === "noMostrar") {
        this.perfil = "noMostrar";
        this.notas = "mostrar";
        this.compromisos = "noMostrar";
        this.certificados = "noMostrar";
      }
    },
    mostrarCompromisos() {
      if (this.compromisos === "noMostrar") {
        this.perfil = "noMostrar";
        this.notas = "noMostrar";
        this.compromisos = "mostrar";
        this.certificados = "noMostrar";
      }
    },
    mostrarCertificados() {
      if (this.certificados === "noMostrar") {
        this.perfil = "noMostrar";
        this.notas = "noMostrar";
        this.compromisos = "noMostrar";
        this.certificados = "mostrar";
      }
    },
  },
};
</script>

<style scoped>
#hero {
  width: 100%;
  background: url("../assets/img/fondo.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat:repeat-y;
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
  padding: 40px;
  justify-content: center;
  
}

.margenCont {
    padding: 20px;
}

#contMenu{
    margin-right: 10px;
    width: 200px;
}

.mostrar {
  display:contents;
}

.noMostrar {
  display: none;
}
</style>