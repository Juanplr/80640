const formulario = document.getElementById("boton")
formulario.addEventListener("click", evento=>{
  evento.preventDefault()
  let u = document.getElementById("user").value
  let p = document.getElementById("pas").value
  alert(u +p)
  })