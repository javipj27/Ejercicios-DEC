//Ejercicio 1
function dNavidad() {
    const hoy = new Date();
    const navidad = new Date(hoy.getFullYear(), 11, 19);
    const dias = navidad - hoy; 
    const total = Math.ceil(dias / (1000 * 60 * 60 * 24)); 
    return total;
}

//Ejercicio 2
function cumpleanos(cumpleanos){
    let cumple = new Date(cumpleanos);    
    let mes=cumple.getMonth();
    let dia=cumple.getDate();
    for(let ano=cumple.getFullYear();ano <=2100;ano++){
        let anoS= new Date(ano,mes,dia);

        if(anoS.getDay()===0){
            console.log("Tu cumpleaños ha caido en domingo "+ano);
        }
    }
}

//Ejercicio 3
function horas(){
    let hoy= new Date();
     let hora=hoy.getHours();
     let minuto=hoy.getMinutes();
     let segundos =hoy.getSeconds();
     let horaActual= hora+":"+minuto+":"+segundos;
     return horaActual;
}
function horas2(){
    let hoy= new Date();
    let hora= hoy.getHours();
    let minuto=hoy.getMinutes();
    let horaActual="Son las "+hora+"h y"+minuto+"m";
    return horaActual;
}

//Ejercicio 4
function tiempo(){
    let contador1 =new Date();
    let nombre = prompt("Introduce tu nombre");
    let contador2=new Date();
    let tiempo=Math.round(contador2-contador1)/1000;
    
    return tiempo;

}

//Ejercicio 6
function tamano(nombre,apellido1,apellido2){
    caracteres=nombre.length+apellido1.length+apellido2.length;
    return caracteres;
}
function mayusMinus(nombre,apellido1,apellido2){
    mayusculas=nombre.toUpperCase()+" "+apellido1.toUpperCase()+" "+apellido2.toUpperCase();
    minusculas=nombre.toLowerCase()+" "+apellido1.toLowerCase()+" "+apellido2.toLowerCase();
    cadena= mayusculas +" "+ minusculas;
    return cadena;

}
function dividir(nombre,apellido1,apellido2){
    return "Nombre: "+nombre +"<br>"+"Apellido 1: " + apellido1+ "<br>"+"Apellido 2: "+apellido2;
}
