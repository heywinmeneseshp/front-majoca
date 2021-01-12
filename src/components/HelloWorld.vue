<template>
  <div>
    <section id="hero" class="d-flex">
      <div class="container">
        <div id="titulo"><h1><strong>Centro Educativo Manuel José del Castillo</strong></h1></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hero {
  background-attachment: fixed;
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

h1,
h2 {
  color: white;
  position: relative;
}

#titulo {
  margin: 100px;
  padding: 15px;
  background: #007bff !important;
  border-radius: 50px;
}
</style>
