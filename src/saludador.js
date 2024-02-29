function saludar(nombre) {
  if(nombre == "")
  {
    return ""
  }
  return "Hola " + nombre;
}

function saludarfecha() {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo;
  if(horaActual<=12 && horaActual>=6)
  {
    saludo= "Buenos dias ";
  }else{
    if(horaActual<=19 && horaActual>12)
    {
      saludo= "Buenas tardes ";
    }else{
      if((horaActual>19 && horaActual<=24) || (horaActual>=0 && horaActual<6))
      {
        saludo= "Buenas noches ";
      }else{
        saludo="error";
      }
    }
  }
  return saludo;
}

function saludar(nombre, genero, edad) {
  let saludo = saludarfecha();
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
