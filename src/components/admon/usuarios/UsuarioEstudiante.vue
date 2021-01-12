<template>
  <div>
    <div>
      <div class="separador">
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
            <label for="">Fecha de nacimeinto</label>
            <input class="form-control form-control-sm" type="date" />
          </div>

          <div class="col-lg-3">
            <label for="">Lugar de nacimiento</label>
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
          <div class="col-lg-2">
            <label for="">Género</label>
            <select class="form-control form-control-sm">
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>

          <div class="col-lg-2">
            <label for="">Grado</label>
            <select class="form-control form-control-sm">
              <option>Preescolar</option>
              <option v-for="item in 11" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>
      </div>
      <!--Dato del padre-->
      <div class="separador">
        <h5>Datos del padre</h5>
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
        <div class="informacioLaboral">
          <h5>Información laboral del padre</h5>

          <div class="caja1">
            <div class="col-lg-3">
              <label for="">Situación laboral</label>
              <input type="text" />
            </div>

            <div class="col-lg-3">
              <label for="">Ocupación/Cargo</label>
              <input type="text" />
            </div>

            <div class="col-lg-3">
              <label for="">Empresa</label>
              <input type="text" />
            </div>

            <div class="col-lg-3">
              <label for="">Dirección</label>
              <input type="text" />
            </div>
          </div>

          <div class="caja1">
            <div class="col-lg-3">
              <label for="">Teléfono</label> <input type="tel" />
            </div>

            <div class="col-lg-3">
              <label for="">Salario</label> <input type="tel" />
            </div>
          </div>
        </div>
      </div>
      <!--datos de la madre-->
      <div class="separador">
        <div>
          <h5>Datos de la madre</h5>

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
        </div>
        <!--informacion laboral dela madre-->
        <div class="informacioLaboral">
          <h5>Información laboral de la madre</h5>

          <div class="caja1">
            <div class="col-lg-3">
              <label for="">Situación laboral</label>
              <input type="text" />
            </div>

            <div class="col-lg-3">
              <label for="">Ocupación/Cargo</label>
              <input type="text" />
            </div>

            <div class="col-lg-3">
              <label for="">Empresa</label>
              <input type="text" />
            </div>

            <div class="col-lg-3">
              <label for="">Dirección</label>
              <input type="text" />
            </div>
          </div>

          <div class="caja1">
            <div class="col-lg-3">
              <label for="">Teléfono</label> <input type="tel" />
            </div>

            <div class="col-lg-3">
              <label for="">Salario</label> <input type="tel" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="separador">
      <div class="container row">
        <div class="col-lg-6 border">
          <p>
            Para finalizar por favor escoja un estado, tenga en cuenta los
            siguientes estados:
          </p>
          <ul>
            <li><b>Activo:</b> documentos y pago completos</li>
            <li><b>Pendiente: </b> documentos incompletos</li>
            <li><b>En mora:</b> pago incompleto</li>
            <li><b>PM:</b> pago incompleto y documentos incompletos</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <div class="cajaCrearUsuario">
          <div>
            <label for="">Estado</label>
            <select class="form-control form-control-sm">
              <option>Activo</option>
              <option>Pendiente</option>
              <option>En mora</option>
              <option>PM</option>
            </select>
          </div>
          <div class="separador">
            <button type="button" class="crearUsuario btn btn-success">Crear usuario</button>
          </div>
          <div class="separador">
            <div class="respuesta" v-if="usuario !='estudiante'" ><p>!Enhorabuena el usuario <b>{{usuario}}</b> ha sido creado!</p></div>
            <div v-else></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsuarioEstudiante",
  data() {
    return {
      usuario: "estudiante"
    }
  }
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

.crearUsuario {
  width: 100%;
}

.respuesta{
  text-align: center;
}

</style>