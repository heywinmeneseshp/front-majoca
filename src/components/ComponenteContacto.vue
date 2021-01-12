<template>
  <section>
    <div id="hero">
    <div id="contacto" class="container d-flex">
      <!--Formulario contacto-->
      <div class="col-6">
        <h4>Contáctanos</h4>

        <div>
          <input
            class="form-control"
            placeholder="Nombre completo"
            type="text"
          />
          <input
            class="form-control"
            placeholder="Correo electrónico"
            type="email"
          />
          <input class="form-control" placeholder="Asunto" type="text" />
          <input
            id="mensaje"
            class="form-control"
            placeholder="Mensaje"
            type="text"
          />
        </div>

        <button type="button" class="btn btn-primary">Enviar</button>
      </div>
      <!--Fin formulario contacto-->
      <!--Ubicanos-->
      <div class="col-6">
        <h4>Ubícanos</h4>
        <div>
          <p>
            {{ direccion }}, {{ ciudad }}
            <br />
            Teléfono: {{ telefono }}
            <br />
            e-mail: {{ email }}
            <br />
          </p>
        </div>
        <!--Ubicacion en el mapa-->
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15658.200051024383!2d-74.2183324!3d11.1468529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92e4cc71da647d8f!2sCentro%20Educativo%20Manuel%20Jose%20Del%20Castillo!5e0!3m2!1ses-419!2sco!4v1609280425818!5m2!1ses-419!2sco"
            width="100%"
            height="300"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <!--Fin Ubicacion en el mapa-->
      </div>
    </div>

    <!--Fin Ubicanos-->
    </div>
  </section>
</template>

<script>
export default {
  name: "ComponenteContacto",
  data() {
    return {
      ciudad: "Santa Marta, Magdalena",
      direccion: "Cl. 116 #7-45, barrio La Paz",
      telefono: "(57) 465 3846 - Cel: (57) 326 374 3846",
      email: "equipomajoca@gmail.com",
    };
  },
};
</script>

<style scoped>
#contacto {
  padding: 80px;
}

h4 {
  background: #007bff;
  color: white;
  padding: 0 0 10px 0;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}

input,
button {
  display: block;
  margin-top: 10px;
  width: 100%;
}

#mensaje {
  height: 200px;
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
  background: rgba(0, 0, 0, 0.144);
}

p {
  color: white;
}
</style>