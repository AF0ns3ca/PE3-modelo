// export const season = (date) => {
//     let dia = date.getDay;
//     let mes = date.getMonth;
  
//     if ((mes == 1 && dia >= 1) || mes == 2 || (mes == 3 && dia <= 20)) {
//       return "Invierno";
//     } else if ((mes == 3 && dia >= 21) || mes == 4 || (mes == 5 && dia <= 20)) {
//       return "Primavera";
//     } else if ((mes == 5 && dia >= 21) || mes == 6 || (mes == 7 && dia <= 20)) {
//       return "Verano";
//     } else if ((mes == 7 && dia >= 21) || mes == 8 || (mes == 9 && dia <= 20)) {
//       return "Otoño";
//     } else if ((mes == 9 && dia >= 21) || mes == 10 || (mes == 11 && dia <= 20)) {
//       return "Invierno";
//     } else {
//       return "Primavera";
//     }
//   };

  export const seasonV2 = (dia,mes) => {  
    if ((mes == 1 && dia >= 1) || mes == 2 || (mes == 3 && dia <= 20)) {
      return "Invierno";
    } else if ((mes == 3 && dia >= 21) || mes == 4 || (mes == 5 && dia <= 20)) {
      return "Primavera";
    } else if ((mes == 5 && dia >= 21) || mes == 6 || (mes == 7 && dia <= 20)) {
      return "Verano";
    } else if ((mes == 7 && dia >= 21) || mes == 8 || (mes == 9 && dia <= 20)) {
      return "Otoño";
    } else if ((mes == 9 && dia >= 21) || mes == 10 || (mes == 11 && dia <= 20)) {
      return "Invierno";
    } else {
      return "Primavera";
    }
  };

  const seasonV3 = (dia,mes) => {
    let mesEN = parseInt(mes)
    let mesEL = mesEN.toString()

    if(dia<10) dia = "0"+dia
    let diaEL = dia.toString();
    //comprobacion bisiesto
    let bisiesto = ((anio % 4 ==0) && ((!(anio %100==0))||(anio % 400 ==0))) ? 29 : 28;

    let mesano = mesEL.concat(diaEL);

    let estac = parseInt(mesano);
    
    if(estac < 0){
      //Desde el 21 de marzo (321) hasta el 20 de junio (620) es Primavera
      if(estac>=321 && estac<=620){
        return "Primavera"
        //Desde el 21 de junio (621) hasta el 22 de septiembre (922) es Verano
      } else if(estac>=621 && estac<=922){
        return "Verano";
        //Desde el 23 de Septiembre (923) hasta el 22 de Diciembre (1222) es Otoño
      } else if(estac>=923 && estac<=1222){
        return "Otoño";
      } else return "Verano";
      
    } else return null;
  };