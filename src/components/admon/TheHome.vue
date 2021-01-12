<template>
  <section class="justify-content-center">
    <h5>Configuración</h5>
    <div class="container justify-content-center">
      <p>
        Pare permitir que los docentes puedan publicar y modificar notas dentro
        de un periódo academico este debe ser activado haciendo click en su
        respectivo botón.
      </p>
    </div>

    <div class="row justify-content-around">
      <div
        :class="[periodo1.activado ? 'alert-success' : 'alert-danger']"
        class="alert col-5 d-flex justify-content-between"
      >
        <div><strong>1er Periódo</strong></div>
        <div>
          <button
            type="button"
            :class="[periodo1.activado ? 'btn-danger' : 'btn-success']"
            class="btn"
            @click="ActivarP1"
          >
            <div v-if="periodo1.activado === false">Activar</div>
            <div v-else>Desactivar</div>
          </button>
        </div>
      </div>
      <div
        :class="[periodo2.activado ? 'alert-success' : 'alert-danger']"
        class="alert col-5 d-flex justify-content-between"
      >
        <div><strong>2do Periódo</strong></div>
        <div>
          <button
            type="button"
            :class="[periodo2.activado ? 'btn-danger' : 'btn-success']"
            class="btn"
            @click="ActivarP2"
          >
            <div v-if="periodo2.activado === false">Activar</div>
            <div v-else>Desactivar</div>
          </button>
        </div>
      </div>
      <div
        :class="[periodo3.activado ? 'alert-success' : 'alert-danger']"
        class="alert col-5 d-flex justify-content-between"
      >
        <div><strong>3ro Periódo</strong></div>
        <div>
          <button
            type="button"
            :class="[periodo3.activado ? 'btn-danger' : 'btn-success']"
            class="btn"
            @click="ActivarP3"
          >
            <div v-if="periodo3.activado === false">Activar</div>
            <div v-else>Desactivar</div>
          </button>
        </div>
      </div>
      <div
        :class="[periodo4.activado ? 'alert-success' : 'alert-danger']"
        class="alert col-5 d-flex justify-content-between"
      >
        <div><strong>4to Periódo</strong></div>
        <div>
          <button
            type="button"
            :class="[periodo4.activado ? 'btn-danger' : 'btn-success']"
            class="btn"
            @click="ActivarP4"
          >
            <div v-if="periodo4.activado === false">Activar</div>
            <div v-else>Desactivar</div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHome",
  components: {},
  data() {
    return {
      periodo1: {
        activado: true,
      },
      periodo2: {
        activado: false,
      },
      periodo3: {
        activado: false,
      },
      periodo4: {
        activado: false,
      },
    };
  },
  methods: {
    ActivarP1() {
      if (this.periodo1["activado"] === true) {
        this.periodo1["activado"] = false;
      } else {
        this.periodo1["activado"] = true;
      }
    },
    ActivarP2() {
      if (this.periodo2["activado"] === true) {
        this.periodo2["activado"] = false;
      } else {
        this.periodo2["activado"] = true;
      }
    },
    ActivarP3() {
      if (this.periodo3["activado"] === true) {
        this.periodo3["activado"] = false;
      } else {
        this.periodo3["activado"] = true;
      }
    },
    ActivarP4() {
      if (this.periodo4["activado"] === true) {
        this.periodo4["activado"] = false;
      } else {
        this.periodo4["activado"] = true;
      }
    },
  },
};
</script>

<style scoped>
input,
select {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;
  overflow: visible;
}

input::placeholder {
  color: #6c757d;
  opacity: 1;
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

#boton {
  margin-top: 30px;
  margin-bottom: 40px;
}

.separador {
  padding: 15px 0 0 0;
}

.noMostrar {
  display: none;
}

.mostrar {
  display: block;
}

label {
  color: #007bff;
  text-align: center;
  margin-right: 5px;
  font-weight: bold;
}
</style>