function recibir(){
  var nombrecont=document.getElementById("nombre").value;
  var emailcont=document.getElementById("email").value;
  var asuntocont=document.getElementById("asunto").value;
  var mensajecont=document.getElementById("mensaje").value;

  if (nombrecont==""){
    alert("Por favor digita su nombre");
    document.getElementById()
  }
  if (emailcont==""){
    alert("Por favor Ingresa su email");
    document.getElementById()
  }
  if (asuntocont==""){
    alert("Por favor ingresa el asunto");
    document.getElementById()
  }
  if (mensajecont==""){
    alert("Por favor ingresa el mensaje");
    document.getElementById()
  }

  console.log("Nombre: " + " " +nombrecont);
  console.log("Email: " + " " +emailcont);
  console.log("Asunto: " + " " +asuntocont);
  console.log("Mensaje: " + " " +mensajecont);

}

