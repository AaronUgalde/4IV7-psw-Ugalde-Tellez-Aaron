function validar(formulario){
    var año = formulario.año.value;
    var mes = formulario.mes.value;
    var dia = formulario.dia.value;

    var esAño = /\d\d\d\d/;
    var esMes = /\d\d/;
    var esDia = /\d\d/;
    const fecha = new Date;

    if(!esAño.test(año)||!esMes.test(mes)||!esDia.test(dia)){
        alert("ingrese un valor valido, recuerda que solo puedes poner numeros")
        return false;       
    }else if(!(año<=fecha.getFullYear())||!(parseInt(mes)<=12)||!(parseInt(dia)<=31)){
        alert("ingrese un valor valido recuerde que el año tiene que ser menor al actual")
        return false;
    }else if(parseInt(mes)<=fecha.getMonth()+1&&parseInt(dia)<=fecha.getDate()){
        formulario.años.value = fecha.getFullYear()-año
        return false;
    }else{
        formulario.años.value = fecha.getFullYear()-1-año
        return false;
    }
}