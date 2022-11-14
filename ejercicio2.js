//en un cierto pais el impuesto que se debe pagar por articulos importados se calcula mediante las siguientes reglas:


function impuesto_por_articulo(valor) {
    var valor
    if(valor> 0.00 && valor <= 20.00){
        console.log("El articulo no genera impuesto")
    }else{
        if(valor>20.01 && valor <=40.00){
            console.log("El valor del impuesto por el articulo es de 30%")
        }else if(valor>40.01 && valor<=500.00){
                console.log("El valor del impuesto por el articulo es de 40%")
    
            }else{
                console.log("El valor del impuesto por el articulo es de 50%")
            }
        }
    }
    
    impuesto_por_articulo(250)
    