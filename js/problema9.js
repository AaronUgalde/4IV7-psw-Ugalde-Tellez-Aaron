function validar (formulario){
    var horas = parseInt(formulario.horas.value);
    var sueldo = parseInt(formulario.sueldo.value);
    var horasExtra;
    var horasExtraExtra;
    var esNum = /^([0-9])+$/;

    if(!esNum.test(horas)||!esNum.test(sueldo)){
        alert("ingrese solo numeros");
        return false;
    }else{
        if(horas>40) horasExtra = horas-40; horas = 40;
        if(horasExtra>8) horasExtraExtra = horasExtra-8; horasExtra=8;
    
        formulario.utilidad.value = (horas*sueldo)+(horasExtra*(sueldo*2))+(horasExtraExtra*(sueldo*3));
        return false;
    }
}