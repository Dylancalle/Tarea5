function saludar(nombre) {
  if(nombre == "")
  {
    return ""
  }
  return "Hola " + nombre;
}

function saludar(nombre, genero) {
  let saludo = "Hola ";
  if(nombre == "" || genero == "")
  {
    saludo = "";
  }
  if(genero == 'F')
  {
    saludo = saludo + "Sra." + nombre;
  }else{
    if(genero == 'M')
    {
      saludo = saludo + "Sr." + nombre;
    }
  }
  return saludo 
}

export default saludar;
