//vamos a obtener las variables por parte de los identificadores

let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciar');
let resetear = document.getElementById('resetear');
let grabar = document.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenar tiempos');

let tiempo =0;
let intervalo = 0;
let veificador = false;

function init(){
    iniciar.addEventListener('click',iniciarContador);
    resetear.addEventListener('click',resetearContador);
    grabar.addEventListener('click',grabarContador);
}

function iniciarContador(){

}