function costos (clave, tiempo_en_minuto){
    var costo_de_la_llamada;
    var tiempo_en_minuto;
     var descuento;

    switch(clave){
        case 12:
            costo_de_la_llamada = 2
            descuento = costo_del_minuto - (costo_del_minuto*0.10);
            costo_del_minuto= tiempo_en_minuto*costo_de_la_llamada;
            tiempo_en_minuto <= 30? console.log("se le aplicara un descuento de: 10%"+ descuento) : console.log("el costo de la llamada sera:"+ costo_de_la_minuto); 
            break;
          
         case 15:
            costo_de_la_llamada= 2
            descuento = costo_del_minuto-(costo_del_minuto*0.10);
            costo_del_minuto= tiempo_en_minuto*costo_de_la_llamada;
            tiempo_en_minuto <= 30? console.log("se le aplicara un descuento de: 10%"+ descuento) : console.log("el costo de ls llamada sera:"+ costo_de_la_minuto);
            break;
            
         case 18:
            costo_de_la_llamada= 2.20
            descuento = costo_del_minuto-(costo_del_minuto*0.10);
            costo_del_minuto= tiempo_en_minuto*costo_de_la_llamada
            tiempo_en_minuto <= 30? console.log("se le aplicara un descuento de: 10%"+ descuento) : console.log("el costo de ls llamada sera:"+ costo_de_la_llamada); 
         break;
         
         case 19:
            costo_de_la_llamada= 3.50
            descuento = costo_del_minuto-(costo_del_minuto*0.10);
            costo_del_minuto= tiempo_en_minuto*costo_de_la_llamada
            tiempo_en_minuto <= 30? console.log("se le aplicara un descuento de: 10%"+ descuento) : console.log("el costo de ls llamada sera:"+ costo_de_la_llamada);
            break;
            
          case 23: 
          costo_de_la_llamada=6
            descuento = costo_del_minuto-(costo_del_minuto*0.10);
            costo_del_minuto= tiempo_en_minuto*costo_de_la_llamada
            tiempo_en_minuto <= 30? console.log("se le aplicara un descuento de: 10%"+ descuento) : console.log("el costo de ls llamada sera:"+ costo_de_la_llamada);
            break;
            
         case 25:
            costo_de_la_llamada=6
            descuento = costo_del_minuto-(costo_del_minuto*0.10);
            costo_del_minuto= tiempo_en_minuto*costo_de_la_llamada
            tiempo_en_minuto <= 30? console.log("se le aplicara un descuento de:10 %"+ descuento) : console.log("el costo de ls llamada sera:"+ costo_de_la_llamada); 
            break;
        
            default:
                console.log("la clave ingresada es erronea");
                break;
    }

}

costo(23,30)