function DatosPersonales() {
    return (
      <>
        <fieldset>
          <legend>Datos Personales</legend>
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" id="nombre" />
          <label htmlFor="paterno">Apellido Paterno</label>
          <input type="text" id="paterno" />
          <label htmlFor="">Apellido Materno</label>
          <input type="text" id="materno" />
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" />
        </fieldset>
      </>
    );
  }
  
  export default DatosPersonales;