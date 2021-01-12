<template>
  <div>
    <!--Datos del estudiante-->
    <div>
      <h5>Perfil del estudiante</h5>
      <div class="row">
        <div class="col1">
          <b>Nombre completo:</b>{{ datosAlumno.nombreAlumno }}
        </div>
        <div class="col1">
          <b>Documento:</b>{{ datosAlumno.TipoDoc }}
          {{ datosAlumno.NoDoc }}
        </div>
        <div class="col1"><b>Grado:</b>{{ datosAlumno.grado }}</div>
        <div class="col1"><b>Dirección:</b>{{ datosAlumno.dirAlumno }}</div>
        <div class="col1"><b>Tel/Cel:</b>{{ datosAlumno.telAlumno }}</div>
      </div>
    </div>
    <!--Datos de los padres-->
    <div class="cajaPadres">
      <h5>Información de los padres</h5>
      <div class="cajaPadresInt">
        <!--Datos del padre-->
        <div>
          <div><b>Nombre del padre:</b>{{ datosAlumno.nombrePadre }}</div>
          <div><b>Dirección:</b>{{ datosAlumno.dirPadre }}</div>
          <div><b>Tel/Cel:</b>{{ datosAlumno.telPadre }}</div>
        </div>
        <!--Datos de la madre-->
        <div>
          <div><b>Nombre de la madre:</b>{{ datosAlumno.nombreMadre }}</div>
          <div><b>Dirección:</b>{{ datosAlumno.dirMadre }}</div>
          <div><b>Tel/Cel:</b>{{ datosAlumno.telMadre }}</div>
        </div>
      </div>
      <!--Fin datos de los padres-->
      <!--Boletines-->
      <div class="cajaPadres">
          <h5>Boletines</h5>
          <div class="container"><p>Para descargar el boletin del periódo por favor dar click en el botón correspondiente.</p></div>
          <div id="cajaBoletines" class="container row">
              <div class="boletin"><button type="button" class="btn btn-success">1er periódo</button></div>
              <div class="boletin"><button type="button" class="btn btn-success">2do periódo</button></div>
              <div class="boletin"><button type="button" class="btn btn-success">3er periódo</button></div>
              <div class="boletin"><button type="button" class="btn btn-success">Boletín final</button></div>
          </div>
      </div>
      <!--Fin Boletines-->
    </div>
    <!--debe estar al dia-->
    <div id="cajaPago" class="container">
      <div class="card">
        <div id="cajaPagoInt" class="card-body row">
          <div class="row"><b>Estado: </b><div>{{estado}}</div></div>
          <div class="row"><b>Próximo pago: </b><div>{{fechaPago}}</div></div>
        </div>
      </div>
    </div>
    
    <!--Fin debe estar al dia-->
  </div>
</template>

<script>
export default {
  name: "PerfilEstudiante",
  data() {
    return {
      datosAlumno: {
        nombreAlumno: "Heywin Hernando Meneses Perez",
        TipoDoc: "CC",
        NoDoc: "1094579343",
        grado: "11",
        dirAlumno: "Cra 5 No. 17 - 79, Barrio Santa Barbara",
        telAlumno: "3226737763",
        nombrePadre: "Hernando Meneses",
        dirPadre: "cll 12 no 14 -16, Barrio la primavera",
        telPadre: "31145781672",
        nombreMadre: "Alexza Perez",
        dirMadre: "cll 12 no 14 -16, Barrio la primavera",
        telMadre: "3156789364",
      },
      estado: "Al día",
      fechaPago: "15/feb/2021"
    };
  },
};
</script>

<style scoped>
.col1 {
  margin-right: 10px;
}

.row {
  justify-content: center;
}

.cajaPadres {
  margin-top: 20px;
}

.cajaPadresInt {
  display:flex;
  justify-content: space-around;
}

b {
  color: #007bff;
  background: white;
  text-align: center;
  margin-right: 5px;
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

p {
    text-align: center;
}

#cajaBoletines {
  justify-content: space-evenly; 
}

#cajaPago {
  margin-top: 20px;
}

#cajaPagoInt {
  justify-content: space-around
}
</style>