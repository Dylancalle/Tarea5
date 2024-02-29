function saludar(nombre) {
  if(nombre == "")
  {
    return ""
  }
  return "Hola " + nombre;
}

function saludarfecha(idioma) {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo;
  if(idioma=="ES")
  {
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
  }else{
    if(horaActual<=12 && horaActual>=6)
    {
      saludo= "Good Morning ";
    }else{
      if(horaActual<=19 && horaActual>12)
      {
        saludo= "Good Afternoon ";
      }else{
        if((horaActual>19 && horaActual<=24) || (horaActual>=0 && horaActual<6))
        {
          saludo= "Good Evening ";
        }else{
          saludo="error";
        }
      }
    }

  }
  return saludo;
}

function saludar(nombre, genero, edad, idioma) {
  let saludo = saludarfecha(idioma);
  if(nombre == "" || genero == "" || edad == "" || idioma =="" )
  {
    saludo = "";
  }else
  {
    if(edad>30)
    {
      if(genero == 'F')
      {
        if(idioma=="ES"){saludo = saludo + "Sra." + nombre;}
        else{saludo = saludo + "Mrs." + nombre;}
      }else{
        if(genero == 'M')
        {
          if(idioma=="ES"){saludo = saludo + "Sr." + nombre;}
          else{saludo = saludo + "Mr." + nombre;}
        }
      }
    }else{
      if(idioma=="ES"){saludo = saludo + "Joven " + nombre;}
      else{saludo = saludo + "Young " + nombre;}
    }
  }
  return saludo 
}

export default saludar;
