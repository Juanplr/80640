const app = document.getElementById("app");
  const Picture = (parametros) => {
        return `
        <fieldset>
          <legend>${parametros.leyenda}</legend>
          <label for="${parametros.id1}">${parametros.texto1}</label>
          <input type="${parametros.tipo1}" id="${parametros.id1}" name="${parametros.name1}">
          <label for="${parametros.id2}">${parametros.texto2}</label>
          <input type="${parametros.tipo2}" id="${parametros.id2}" name="${parametros.name2}">
        </fieldset>
        `;
      };
      app.innerHTML = Picture({leyenda:"Informacion Personal", texto1:"Nombre de Usuario", texto2:"Correo Electronico", id1:"nombre", id2:"email", tipo1:"text", tipo2:"text",name1:"nombre",name2:"email"});
      app.innerHTML += Picture({leyenda:"Informacion de Dirección", texto1:"Dirección", texto2:"Ciudad",id1:"direcion", id2:"ciudad", tipo1:"text", tipo2:"text",name1:"direc",name2:"ciud"});


const formulario = document.getElementById("boton")
formulario.addEventListener("click", evento=>{
  evento.preventDefault()
  let u = document.getElementById("nombre").value
  let p = document.getElementById("email").value
  let r = document.getElementById("direcion").value
  let j = document.getElementById("ciudad").value
  alert(u +p+r+j)
  })