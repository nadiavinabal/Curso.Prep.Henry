// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var n;
  var can;
  var objeto = {};
 
  for (var i = 0; i < string.length; i++) {
     n = string.charAt(i);
     can = string.split(n).length-1
     objeto[n] = can;         
  }

  return objeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //sd
  var nueva = '';
  var m = '';
  for (var i = 0; i < s.length; i++) {
    var n = s.charAt(i);
    if (n.toUpperCase() === n){
        nueva = nueva.concat('',n)
    }
  
    if (n.toLowerCase()=== n){
        m = m.concat('',n)
    }
   } 

  return nueva.concat('',m)

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayDeCadenas = str.split(' ');
  var long = arrayDeCadenas.length;
  var x;
  var str1;
  var cadena;

  for (var i = 0; i < long; i++) {

    str1 = arrayDeCadenas[i];
    
    x = str1.length
    cadena = "";

	while (x>=0) {
		cadena = cadena + str1.charAt(x);
		x--;
	}
    arrayDeCadenas[i] = cadena;
  }

  return arrayDeCadenas.join(' ');


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var strnumero1 = numero.toString();
  var strnumero2 = strnumero1.split('').reverse().join('');

  if (strnumero1 === strnumero2){
      return 'Es capicua';
  }
  else {
     return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replace(/[abc]/g, '');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 var nuevo = arr.sort(function(a, b) {
   return a.length - b.length;
 });

 return nuevo;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  return arreglo1.filter(v => arreglo2.includes(v));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

