function validar(formulario){
    var numeros= [parseInt(formulario.numero1.value),parseInt(formulario.numero2.value),parseInt(formulario.numero3.value)];   
    var esNum = /^([0-9])+$/;
    numeros.sort();
    for (numero in numeros){
        if (!esNum.test(numero)){
            alert("inserte solo numeros")
            break;
        }
    }
    formulario.numerote.value = numeros[2];
    return false;
}