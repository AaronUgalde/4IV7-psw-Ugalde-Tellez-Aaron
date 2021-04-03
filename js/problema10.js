function validar(formulario){
    var tiempo = parseInt(formulario.tiempo.value);
    var sueldo = parseInt(formulario.sueldo.value);

    var esNum = /^[0-9]+([,][0-9]+)?$/;
    if (!esNum.test(tiempo)||!esNum.test(sueldo)){
        alert("inserte solo numeros")
        return false;
    }else if(tiempo<1){
        formulario.utilidad.value = 5/sueldo;
        return false
    }else if(tiempo>=1&&tiempo<2){
        formulario.utilidad.value = 7/sueldo;
        return false;
    }else if(tiempo>=2&&tiempo<5){
        formulario.utilidad.value = 10/sueldo;
        return false;
    }else if(tiempo>=5&&tiempo<10){
        formulario.utilidad.value = 15/sueldo;
        return false;
    }else if(tiempo>=10){
    formulario.utilidad.value = 20/sueldo;
        return false;
    }
}