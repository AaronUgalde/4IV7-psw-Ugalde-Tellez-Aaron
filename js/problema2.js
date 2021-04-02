function validar(formulario){
    var venta1 = formulario.venta1.value;
    var venta2 = formulario.venta2.value;
    var venta3 = formulario.venta3.value;

    var esNum = /^([0-9])*$/;

    if(!esNum.test(venta1)||!esNum.test(venta2)||!esNum.test(venta3)){
        alert("ingrese solo numeros")
        return false;
    }else{
        formulario.comision.value = "$"+(venta1*0.10 +venta2*0.10 + venta3*0.10);
        formulario.total.value = "$"+(parseFloat(venta1) + parseFloat(venta2) + parseFloat(venta3) + parseFloat(venta1*0.10) + parseFloat(venta2*0.10) + parseFloat(venta3*0.10));
        return false;
    }    
    
}