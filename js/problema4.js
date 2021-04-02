function validar(formulario){
    var cal2 = formulario.cal2.value;
    var cal1 = formulario.cal1.value;
    var cal3 = formulario.cal3.value;
    var examen = formulario.examen.value;
    var trabajo = formulario.trabajo.value;

    var esCal = /^([0-9]?[0-e9]|100)$/;

    if(!esCal.test(cal1)||!esCal.test(cal2)||!esCal.test(cal3)||!esCal.test(trabajo)||!esCal.test(cal1)){
        alert("ingrese un dato entre el 1 y el 100")
        return false;
    }else{
        var calParciales = ((parseFloat(cal1)+parseFloat(cal2)+parseFloat(cal3))/3)*0.55;
        var examenFinal = parseFloat(examen)*0.30
        var trabajoFinal = parseFloat(trabajo)*0.15
        formulario.final.value = calParciales + examenFinal + trabajoFinal
        return false;
    }
}