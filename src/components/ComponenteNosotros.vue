<template>
  <section>
    <div>
      <div>
        <img
          src="..\assets\img\banner-nosotros.png"
          alt="Foto de Katerina Holmes en Pexels"
          width="100%"
        />
      </div>
      <div class="bannerTitulo">
        <h3 class="card-title"><b>Nosotros</b></h3>
      </div>

      <div class="container">
        <div id="resena" class="d-flex">
         
          <article class="card-body d-flex">
            <div ><img width="280px" src="..\assets\img\fundador.jpg" alt="Foto de Katerina Holmes en Pexels"></div>
             
            <div class="resenaInterior">
            <h5 class="card-title"> <b>Reseña historica</b> </h5>
            <p class="card-text">
              El CENTRO EDUCATIVO MANUEL JOSE DEL CASTILLO MANUEL JOSE DEL
              CATILLO fue fundado el 1 de febrero de 1998, por la Licenciada en
              Castellano ESBANY PERTUZ DE SERNA, cuando alquilo el colegio
              Gabriel Garcia Marquez cuya dueña era María Ibañez (q.e.p.d) en el
              Barrio la Paz. Pasaron los años y la licenciada Pertuz sintió que
              ella debía ser la dueña de este centro educativo y sus sueños se
              hicieron realidad cuando le compro a la señora Ibañez los
              derechos, pero no quería tener ese nombre, ella queria que fuera
              el nombre de su abuelo materno el Dr MANUEL JOTA DEL CASTILLO,
              como lo llamaban popularmente en Ciénaga, la Secretaria le exigió
              que le cambiara el nombre, porque en el municipio de Cienaga
              exitía ya una institución oficial con dicho nombre, fue entonces
              que le cambio el nombre de Jota por Jose quedando hasta el momento
              CENTRO EDUCATIVO MANUEL DEL CASTILLO, comenzando por la basica
              primaria, secundaria y finalmente teniendo ya su edificio
              educativo que poco a poco lo restructutó, busca con esperanza la
              parobacion de la media, este centro educatibvo se fundamiente con
              una mision de formar integralmete a lso niño y jovenes resaltando
              su masculinidad y feminidad promoviendo una actitud critica ,
              analitica e investigativa en relacion con los avances tegnologicos
              y cientificos fortaleciendo su creatividad y desempeño inbteectual
              , moral y afectivo, capacitandola para la continuidad en la
              educacion superior o vinculacion laboral.
            </p>
            </div>
          </article>
        </div>
        <!--Mision y Vision-->
        <div id="contenedorMisionVision" class="d-flex">
          <!--Inicio Mision-->
          <div id="izq" class="card">
            <article id="mision" class="card-body">
              <h5 class="card-title"> <b>Misión</b> </h5>
              <p class="card-text">
                El Centro Educativo Manuel José del castillo es un colegio
                privado, civil cuya misión primordial es configurar a través de
                nuestros objetivos la fomentación del rescate de los valores
                humanos entre todos los integrantes del colegio a través de una
                planificación estratégica que nos permite lograra los objetivos
                trasados en el enfoque pedagógico proyectado por el centro
                educativo; en el fundamento contable y el proyecto empresarial
                haciendo énfasis en el idioma extranjero, trabajando y
                rescatando la cultura a través del folclor colombiano donde se
                trabajara conjuntamente con el personal docente y administrativo
                de manera integral en este centro educativo, que nos permite
                asegurar a nuestra institución como un ente que se preocupa para
                que sus educandos se desarrollen de manera productiva para
                contribuir al desarrollo socioeconómico de la nación.
              </p>
            </article>
          </div>
          <!--Fin Mision-->
          <!--Inicio Vision-->
          <div id="der" class="card">
            <article id="vision" class="card-body">
              <h5 class="card-title"> <b>Visión</b> </h5>
              <p class="card-text">
                El Centro Educativo Manuel José del Castillo, está encaminado en
                un horizonte a mediano plazo, a evolucionar de acuerdo al
                desarrollo tecnológico y ser para el año 2021 el centro
                educativo más reconocido en el municipio de Santa Marta,
                Magdalena, por su compromiso en la formación de alumnos
                competitivos centro en el énfasis contable y en el proyecto
                empresarial con énfasis en el idiomas extranjero empleando el
                enfoque pedagógico trazado por la institución, así como el
                renacimiento de la cultura colombiana reconocida a través de los
                festivales folclóricos; ofreciendo un servicio educativo de alta
                calidad, y ayudando a los padres de familia en la formación
                integral de sus hijos, a fin de desarrollar al máximo sus
                capacidades y habilidades; y a nuestras posibilidades económicas
                para brindarle a los alumnos la calidad que exige el nuevo
                milenio basándose siempre en los principios éticos y morales
                fomentado en los principios de la institución.
              </p>
            </article>
          </div>
          <!--Fin vsion-->
        </div>

        <!--Principios Intitucionales-->

        <!--Principios Intitucionales-->
        <div id="resena">
          <article class="card-body card-text">
            <h5 class="card-title"> <b>Principios institucionales</b> </h5>

            <p>
              <b class="negrilla">Amor:</b> valor que deben poseer todos los
              miembros de la comunidad educativa de este centro para mejoras las
              relaciones interpersonales, logrando el buen funcionamiento y
              conservación del mismo. Creatividad: capacidad que debe tener el
              estudiante para transformar el medio que los rodea para su
              beneficio y conservación del mismo.
            </p>

            <p>
              <b class="negrilla">Respeto:</b> capacidad de respetar los
              derechos de los demás en cuada una de las actividades diarias y en
              el desarrollo de proyectos sociales y ambiéntale para mejorar su
              calidad de vida.
            </p>

            <p>
              <b class="negrilla">Participación:</b> Capacidad para participar
              en todas las decisiones que involucren, ya sea en su vida social,
              cultural y moral.
            </p>

            <p>
              <b class="negrilla">Responsabilidad:</b> A través del cumplimiento
              de los deberes sociales académicos generando compromisos que
              conllevan la formación integral del estudiante.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ComponenteNosotros",
};
</script>

<style scoped>
#resena {
  margin-left: 30px;
  margin-right: 30px;
}

#contenedorMisionVision {
  margin-left: 30px;
  margin-right: 30px;
}

p {
  text-align: justify;
}

#izq {
  margin-left: 20px;
  margin-right: 10px;
}

#der {
  margin-right: 20px;
  margin-left: 10px;
}

#mision,
#vision {
  margin-right: 10px;
  margin-left: 10px;
}

h3 {
  color: white;
  text-align: center;
}

h5 {
  color: #007bff;
  background: white;
  text-align: center;
}

.bannerTitulo {
  background: #007bff;
  padding: 8px 0 5px 0;
  align-items: center;
}

.resenaInterior {
  margin-left: 20px;
}

.negrilla {
  color: #007bff;
}

</style>