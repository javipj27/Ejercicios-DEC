function confirmacion(){
    let resultado = confirm("¿Estás seguro?");
    alert("Has pulsado: " + (resultado ? "Aceptar" : "Cancelar"));
}
function analizar() {
    ventana = window.open("", "ventana", "width=200,height=100");
    setTimeout(() => {
        if (ventana.closed) {
            alert("La ventana se ha cerrado.");
        } else {
            alert("La ventana sigue abierta.");
        }
    }, 1000);
}
function renombrar(){
    let nombre = prompt("Introduce un nuevo nombre para la ventana:");
        ventana = window.open("", "ventana", "width=200,height=100");
        return ventana.document.title = nombre;
}
function cerrar(){
    window.close();
}
function cerrarNueva(){
    if (ventanaNueva) {
        ventanaNueva.close();
    } else {
        alert("No hay ventanas abiertas");
    }
}
function ventanaTamaño(){
    ventana=window.open("","ventana","width=300,height=100,resizable=yes");
}
function escribirPadre(){
    ventana = window.open("", "ventana", "width=300,height=100,resizable=yes");
    ventana.document.write("<p>Hola como estamos</p>");
}
function mover(){
    ventana = window.open("", "ventana", "width=300,height=100,resizable=yes");
    return ventana.moveBy(50, 50);
}
function posicionar(){
    ventana = window.open("", "ventana", "width=300,height=100,resizable=yes");
    return ventana.moveTo(100, 100);
}
function scrollAbajo(){
    return window.scrollBy(0, 10);
}
function scrollPosicion(x,y){
    return window.scrollTo(x, y);
}


//Ejercicio 4
function marcador() {
    alert("El marcador");
}
function host() {
    alert("El host es: " + window.location.hostname);
}
function url() {
    alert("La url completa es: " + window.location.href);
}
function direccion() {
    let direccion = prompt("Introduce una URL:");
        return window.location.href = direccion;
}
function protocolo() {
    alert("El protocolo es: " + window.location.protocol);
}
function recargar() {
    return window.location.reload();
}

//Ejercicio 5
function ultimaAct() {
    let ultimaAct = document.lastModified;
    aviso=alert("Última actualización: " + ultimaAct);
    return aviso;
}

function urlReferencia() {
    let referencia = document.referrer;
    aviso=alert("URL de referencia: " + (referencia ? referencia : "No hay referencia"));
    return aviso;
}

function titulo() {
    let titulo = document.title;
    aviso=alert("El titulo es: " + titulo);
    return aviso;
}

function urlCompleta() {
    let urlCompleta = document.URL;
    aviso=alert("La url completa es: " + urlCompleta);
    return aviso;
}
function escribirACarga() {
    document.write("<p>Escrito antes</p>");
    document.close(); 
}
function escribirDCarga() {
    setTimeout(() => {
        document.open(); 
        document.write("<p>Escrito despues</p>");
        document.close();
    }, 1000);
}


//Ejercicio 6
function numAnclas() {
    aviso=alert("Número de anclas: " + document.anchor.length);
    return aviso;
}
function primerAncla() {
    aviso=alert("Texto del primer ancla: " + document.anchor[0].innerHTML);
    return aviso;
}
function numImg() {
    aviso=alert("Número de imágenes: " + document.images.length);
    return aviso;
}
function idImg() {
    aviso=alert("ID de la primera imagen: " + document.images[0].id);
    return aviso;
}
function numEnlaces() {
    aviso=alert("Número de enlaces: " + document.links.length);
    return aviso;
}
function cambiarTitulo() {
    document.title = "ey que pasa";
    aviso=alert("El titulo ha cambiado.");
    return aviso;
}