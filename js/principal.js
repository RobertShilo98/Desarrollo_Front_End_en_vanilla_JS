/*
Autor: Roberto Rico Sandoval.
Fille: Vanilla JS Front - End.
Date: 23/ 01/ 2023
*/

window.onload = function(){
    var canvas = document.getElementById("lienzo");
    new Processing(canvas,dibujo);
}

function setup(){
    var img;
}

function bienvenido(){
    alert('Bienvenido a Vanilla JS.');
}

function boton(){
    alert('Abriendo registros.');
    window.location.href="/tablas.html";
}

function tecla(){
    alert('Detectando texto.');
}

function verif(){
    window.location.href="/verificacion.html";
    alert('Datos verificados.');
}

function cancelar(){
    var mensaje;
    var opcion = confirm("¿Cacelar?");

    if(opcion == true){
        mensaje = "Registro cancelado.";
        alert(mensaje);
        window.location.href="/formulario.html";
    }
    else{
        mensaje = "Accion no realizada.";
        alert(mensaje);
    }

}

function reseteo(){
    window.location.href="/formulario.html";
}

function dibujo(P){

    P.size(1200,160);

    P.draw = function(){
        // Lienzo.
        P.background(0, 0, 0);

        // Elipse centro.
        P.stroke(0, 0, 0);
        P.fill(36, 196, 22);
        P.ellipse(630, 100, 50, 50);

        // Elipse exterior.
        P.stroke(255, 255, 255);
        P.noFill();
        P.ellipse(630, 100, 80, 70);

    }
}

