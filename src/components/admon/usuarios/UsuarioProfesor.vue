<template>
  <section>
    <div>
      <div>
        <div class="caja1">
          <div class="col-lg-3">
            <label class="" for="">Primer nombre</label>
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Primer nombre"
            />
          </div>

          <div class="col-lg-3">
            <label for="">Segundo nombre</label>
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Segundo nombre"
            />
          </div>

          <div class="col-lg-3">
            <label class="" for="">Primer apellido</label>
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Primer apellido"
            />
          </div>

          <div class="col-lg-3">
            <label for="">Segundo apellido</label>
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Segundo apellido"
            />
          </div>
        </div>

        <div class="caja1">
          <div class="col-lg-3">
            <label for="">Tipo de documento</label>
            <select class="form-control form-control-sm">
              <option>Registro civil</option>
              <option>Tarjeta de identidad</option>
              <option>Cedula de ciudadania</option>
              <option>Cedula de extranjería</option>
            </select>
          </div>

          <div class="col-lg-3">
            <label for="">No. documento</label>
            <input
              class="form-control form-control-sm"
              type="tel"
              placeholder="1094579346"
            />
          </div>

          <div class="col-lg-3">
            <label for="">Fecha de expedición</label>
            <input class="form-control form-control-sm" type="date" />
          </div>

          <div class="col-lg-3">
            <label for="">Lugar de expedición</label>
            <input class="form-control form-control-sm" type="text" />
          </div>
        </div>

        <div class="caja1">
          <div class="col-lg-3">
            <label for="">Domicilio</label>
            <input class="form-control form-control-sm" type="text" />
          </div>

          <div class="col-lg-3">
            <label for="">Barrio</label>
            <input class="form-control form-control-sm" type="text" />
          </div>

          <div class="col-lg-3">
            <label for="">Tel/Cel</label>
            <input class="form-control form-control-sm" type="tel" />
          </div>

          <div class="col-lg-3">
            <label for="">e-mail</label>
            <input class="form-control form-control-sm" type="email" />
          </div>
        </div>
        <div class="caja1">
          <div class="col-lg-3">
            <label for="">Genero</label>
            <input class="form-control form-control-sm" type="text" />
          </div>
        </div>
      </div>
      <!--Materias-->
      <div class="separador">
        <h5>Materias</h5>
        <div class="container">
          <div>
            <div
              v-for="materia in materias"
              :key="materia"
              class="form-check form-check-inline"
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">{{
                materia
              }}</label>
            </div>
          </div>
        </div>
      </div>
      <!--Grados-->
      <div class="separador">
        <h5>Cursos</h5>
        <div class="container">
          <div>
            <div
              v-for="grado in grados"
              :key="grado"
              class="form-check form-check-inline"
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">{{
                grado
              }}</label>
            </div>
          </div>
        </div>
      </div>
      <!--Fin profesres-->
    </div>
  </section>
</template>

<script>
export default {
  name: "UsuarioProfesor",
  data() {
    return {
      materias: [
        "Ingles",
        "Español",
        "Matematicas",
        "Sociales",
        "Religion",
        "Catedra",
        "Informatica",
        "Naturales",
        "Quimica",
      ],
      grados: ["Preescolar", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
};
</script>

<style scoped>
.caja1 {
  display: flex;
  width: 100%;
  margin-bottom: 5px;
}

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

.informacioLaboral {
  margin-top: 15px;
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