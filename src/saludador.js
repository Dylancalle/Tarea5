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
  else{
    if(genero == 'F')
    {
      saludo = saludo + "Sra." + nombre;
    }else{
      if(genero == 'M')
      {
        saludo = saludo + "Sr." + nombre;
      }
    }
  }
  return saludo 
}

function saludar(nombre, genero, edad) {
  let saludo = "Hola ";
  if(nombre == "" || genero == "" || edad == "")
  {
    saludo = "";
  }else
  {
    if(edad>30)
    {
      if(genero == 'F')
      {
        saludo = saludo + "Sra." + nombre;
      }else{
        if(genero == 'M')
        {
          saludo = saludo + "Sr." + nombre;
        }
      }
    }else{
      saludo = saludo + "Joven " + nombre;
    }
  }
  return saludo 
}

export default saludar;
