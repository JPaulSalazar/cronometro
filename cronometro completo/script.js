let iniciar = document.getElementById("iniciar");
let detener = document.getElementById("detener");
let limpiar = document.getElementById("limpiar");
let cronometro = document.getElementById("cronometro");
let count = 0;
let second = 0;
let minute = 0;
let hour = 0;
function encender(){
    second++;

    let h = '';

    let m = '';

    let s = '';

    if (second > 59){
        minute++;
        second = 0;
    }

    if (minute > 59){
        hour++;
        minute = 0;
    }

    if (hour > 24){
        hour = 0;
    }

    if (second < 10){
        s = '0' + `${second}`;
    }else{
        s = `${second}`;
    }

    if (minute < 10){
        m = '0' + `${minute}`;
    }else{
        m = `${minute}`;
    }

    if (hour < 10){
        h = '0' + `${hour}`;
    }else{ h = `${hour}`;
    }

    document.getElementById("cronometro").innerHTML = h + ':' + m + ':' + s; 
}
function intervalo(event){
    event.currentTarget = intervalId = window.setInterval(encender,1000);
}
function parar(event){
    event.currentTarget = window.clearInterval(intervalId);
}
function borrar(event){
    event.currentTarget = event.currentTarget = window.clearInterval(intervalId);
    cronometro.innerHTML = "00:00:00";
    second = 0;
    minute = 0;
    hour = 0;
}
iniciar.addEventListener("click", intervalo);
detener.addEventListener("click", parar);
limpiar.addEventListener("click", borrar);