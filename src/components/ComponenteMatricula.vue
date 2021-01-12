<template>
  <div>
    <div id="contenerdor" class="container">
      <div class="row">
      <div class="col-sm-12 col-lg-6 align-middle">
        <img
          src="..\assets\img\educacionVirtual.jpg"
          alt="Foto de Andrea Piacquadio en Pexels"
          width="100%"
        />
      </div>
      <div id="aspirantes" class="container col-sm-12 col-lg-6">
        <h4 class="card-title">Aspirates</h4>
        <h5 class="card-title">Documentos requeridos:</h5>
        <ul>
          <li>Registro civil</li>
          <li>Fotocopia tarjeta de identidad (mayores de 7 años)</li>
          <li>Calificaciones colegio procedencia</li>
          <li>Paz y salvo colegio procedencia</li>
          <li>Registro de comportamiento colegio procedencia</li>
          <li>Fotocopia de documentos de identificación de ambos padres</li>
          <li>
            Carta laboral o certificación de la Cámara de Comercio si son
            independientes
          </li>
        </ul>
        <router-link
          id="buttonMenu"
          type="button"
          class="btn btn-primary"
          to="/formulario"
          >¡ Matricúlate aquí !</router-link
        >
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteMatricula",
};
</script>

<style scoped>

#contenerdor {
  padding: 30px ;
}

h5 {
  color: #007bff;
}

h4 {
 background: #007bff;
  color: white;
  padding: 0 0 5px 0;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
}


#aspirantes {
  margin-top: auto;
  margin-bottom: auto;
}
</style>