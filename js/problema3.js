function validar(formulario){
    var valor = formulario.total.value;
    
    var unNum = /^([0-9])+$/;

    if(!unNum.test(valor)){
        alert("ingrese solo numeros");
        return false;
    }else{
        formulario.totalCon.value = parseFloat(valor) - parseFloat(valor)*0.15;
        return false;
    }
}