//escriba un programa que muestre la tabla de multiplicar de 1 al 10 del numero ingresado por el usuario

function tablas_multiplicar(tabla) {    
let tablas_multiplicar= tabla;
let i = 0;
let resultado;

while (i<10) {
    i++;
    resultado = tabla*i;
    console.log(tabla+"*"+i+"="+resultado);
    
}
}

tablas_multiplicar(7);