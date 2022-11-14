//leer un numero entero y determinar si tiene 3 digitos

function leer_numero (numero){
        var numero
        if(numero>1000 && numero<99){
            console.log("El numero: " + numero + "tiene 3 digitos" );
        }
        else if(numero>99 && numero<1000){
                console.log("El numero: " + numero + "tiene 3 digitos" );
            }else{
            console.log("El numero: " + numero + "no tiene 3 digitos");
        }
        }

    leer_numero(245);
