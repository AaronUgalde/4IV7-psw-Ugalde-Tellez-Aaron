function validar(formulario){
    var numero1 = parseInt(formulario.numero1.value);
    var numero2 = parseInt(formulario.numero2.value);

    var unNum = /^([0-9])+$/;

    if(!unNum.test(numero1)||!unNum.test(numero2)){
        alert("ingrese solo numeros");
        return false;
    }else if(numero1 === numero2){
        formulario.operacion.value = numero1*numero2;
        return false;
    }else if(numero1>numero2){
        formulario.operacion.value = numero1-numero2;
        return false;
    }else{
        formulario.operacion.value = numero1 + numero2;
        return false;
    }
}