//Ejercicio 1
function aleatorio(){
    aleatorio = Math.random();
    return aleatorio;
}
//1A
function aCien(){
    aleatorio= Math.round(Math.random()*100)+100;
    return aleatorio;
}
//1b
function aleatorioV(){
    let min=parseInt(prompt("Ingresa el minimo"));
    let max=parseInt(prompt("Ingresa el maximo"));
    let aleatorio = Math.round(Math.random() * (max - min)) + min;
    return aleatorio;
}

//Ejercicio 2
function seno(angulo){
    seno=Math.sin(angulo);
    return seno;
}
function coseno(angulo){
    coseno=Math.cos(angulo);
    return coseno;
}
function tangente(angulo){
    tangente=Math.tan(angulo);
    return tangente;
}

//Ejercicio 3
function hipotenusa(cateto1,cateto2){
    hipo=Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2));
    return hipo;
}

//Ejercicio 4
function hipotenusaV2(){
    let entrada=true;       

    while(entrada){
        let cateto1=prompt("Introduce la medida para hacer la hipotenusa de un triangulo rectangulo y cuando des enter pare de operar");
        let cateto2=prompt("Introduce el cateto 2");    
        let pregunta=prompt("¿Quieres hacer otra hipotenusa?");
        let hipo=Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));    
        if(pregunta!=="si"){
            entrada=false;
        }
        return hipo;

    }
 }

//Ejercicio 5
function ecuacion2grado(a,b,c){
    let arriba = Math.pow(b,2)- 4 * a * c;

    if(arriba<0){
        return "No hay soluciones posibles";
    }else{
        let solucion1=parseInt((-b + Math.sqrt(arriba)) /(2*a));
        let solucion2=parseInt((-b - Math.sqrt(arriba)) /(2*a));
        return "La solucion 1 posible es "+solucion1+" y la posible solucion 2 es "+solucion2;
    }
}
      
