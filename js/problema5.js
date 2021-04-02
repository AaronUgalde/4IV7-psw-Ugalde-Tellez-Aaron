function validar(formulario){
    var cantidad = formulario.cantidad.value;
    var niños = formulario.niños.value;
    var niñas = formulario.niñas.value;

    var esNum = /^([0-9]+)$/;

    if(!esNum.test(cantidad)){
        alert("ingrese solo numeros")
        return false;
    }else if(!esNum.test(niños)||!(niños<=cantidad)){
        alert("el valor que ingreso no es un numero o hay mas niños que el total de alumnos en el salon")
        return false;
    }else if(!esNum.test(niñas)||!(parseInt(cantidad)==parseInt(niñas)+parseInt(niños))){
        alert("el valor que ingreso no es numero o la suma de niños mas niñas no es igual a la cantidad total de alumnos en el salon")
        return false;
    }else{
        formulario.porcentajeNiños.value = (niños/(cantidad/100)) + "%"
        formulario.porcentajeNiñas.value = (niñas/(cantidad/100)) + "%"
        return false;
    }
}