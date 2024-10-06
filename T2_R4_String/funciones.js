//Ejercicio 1a
function invierteCadena(cad_arg){
    return cad_arg.split('').reverse().join('');
}

//1B
function inviertePalabras(cad_arg){
    return cad_arg.split(' ').reverse().join(' ');

}
//1C
function encuentraPalabraMasLarga(cad_arg) {
    let palabras = cad_arg.split(' ');
    let palabraLarga = palabras.reduce((a, b) => a.length > b.length ? a : b);
    return palabraLarga.length;
}
//1D
function filtraPalabrasMasLargas(cad_arg, i) {
    let palabras = cad_arg.split(' ');
    let palabraF = palabras.filter(palabra => palabra.length > i);
    return palabraF.length;
}
//1E
function cadenaBienFormada(cad_arg) {
    let cadenaFor = cad_arg.toLowerCase();
    return cadenaFor.charAt(0).toUpperCase() + cadenaFor.slice(1);
}


//Ej 2
function cadena(cad_arg) {
    if (cad_arg === cad_arg.toUpperCase()) {
        document.write("La cadena es de solo mayusculas.");
    } else if (cad_arg === cad_arg.toLowerCase()) {
        document.write("La cadena es de solo minusculas");
    } else {
        document.write("La cadena es una mezcla de mayusculas y minusculas");
    }
}


//Ej3
function subcadenas(cadena, sub) {
    let posiciones = [];
    let posicion = cadena.indexOf(sub);
    
    while (posicion !== -1) {
        posiciones.push(posicion);
        posicion = cadena.indexOf(sub, posicion + 1);
    }
    return posiciones;
}


//Ej4
function orden(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let soloC = '';
    let soloV = '';

    for (let char of cadena.toLowerCase()) {
        if (vocales.includes(char)) {
            soloV += char;
        } else if (char !== ' ' && char.match(/[a-zñ]/)) {
            soloC += char;
        }
    }
    return soloC + soloV;
}


//Ej5
function repetidos(cadena) {
    let resultado = '';
    for (let char of cadena) {
        if (!resultado.includes(char)) {
            resultado += char;
        }
    }
    return resultado;
}


//Ej6
function subcadena(cadena, subcadena) {
    let posicion = cadena.indexOf(subcadena);
    
    if (posicion !== -1) {
        document.write(`La subcadena "${subcadena}" esta en laposición ${posicion}.`);
    } else {
        document.write(`La subcadena "${subcadena}" no esta en la cadena`);
    } 
    return posicion;
}


//Ej7
function palindromo(cadena) {
    let cadenaLimpia = cadena.replace(/\s+/g, '').toLowerCase(); //se usa para eliminar los espacios en blanco de la cadena
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
}

//Ej8
function contar(cadena) {
    let palabras = cadena.trim().split(/\s+/);
    return palabras[0] === '' ? 0 : palabras.length; // Si despues de la cadena sin blancos esta vacia, devuelve 0
}


//Ej9
function validateCreditCard(numeroT) {
    if (isNaN(numeroT)) {
        return false;
    }
    if (numeroT.length !== 16) {
        return false;
    }
    let digitos = new Set(numeroT);
    if (digitos.size < 2) {
        return false;
    }
    let lastDigit = parseInt(numeroT[numeroT.length - 1]);
    if (lastDigit % 2 !== 0) {
        return false;
    }
    let suma = 0;
    for (let i = 0; i < numeroT.length; i++) {
        suma += parseInt(numeroT[i]);
    }
    if (suma <= 16) {
        return false;
    }
    return true;
}


//Ej10
function validateCreditCard2(numeroT) {
    numeroT = numeroT.replace(/-/g, '');//Eliminar todos los guiones del numeroT

    if (numeroT.length !== 16) {
        return false;
    }
    if (isNaN(numeroT)) {
        return false;
    }
    let digitos = new Set(numeroT);
    if (digitos.size < 2) {
        return false;
    }
    let uDigito = parseInt(numeroT[numeroT.length - 1]);
    if (uDigito % 2 !== 0) {
        return false;
    }
    let suma = 0;
    for (let i = 0; i < numeroT.length; i++) {
        suma += parseInt(numeroT[i]);
    }
    if (suma <= 16) {
        return false;
    }
    return true;
}