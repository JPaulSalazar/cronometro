let iniciar = document.getElementById("iniciar");
let detener = document.getElementById("detener");
let limpiar = document.getElementById("limpiar");
let cronometro = document.getElementById("cronometro");
let count = 0;

function encender(){
    count ++ ;
    cronometro.innerHTML = segundos;
}
function intervalo(event){
    event.currentTarget = intervalId = window.setInterval(encender,1000);
}
function parar(event){
    event.currentTarget = window.clearInterval(intervalId);
}
function borrar(event){
    event.currentTarget = event.currentTarget = window.clearInterval(intervalId);
    cronometro.innerHTML = 0;
    count = 0;
}
iniciar.addEventListener("click", intervalo);
detener.addEventListener("click", parar);
limpiar.addEventListener("click", borrar);