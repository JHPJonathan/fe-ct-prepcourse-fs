/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr=[];
   arr = Object.entries(objeto);
   return arr;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arr=[],array=[],num=[],newArray=[],contador=1;
   arr = string.split("");
   arr.sort();
   for(let i=0;i<arr.length;i++){
      if(arr[i+1]===arr[i]){
         contador++;
      }else{
         array.push(arr[i]);
         num.push(contador);
         contador=1;
      }
   }
   let m= array.length +num.length,h=0;
   for(let i=0;i<m;i++){
      newArray[i]=array[h];
      newArray[i+1] = num[h];
      i++;
      h++;
   }
   let matriz = new Array();
   let g=0;
   for(let i=0;i<num.length;i++){
      matriz[i] = new Array();
      for(let j=0;j<2;j++){
         matriz[i][j] = newArray[g];
         g++;
      }
   }

   let map = new Map(matriz);
   let obj = Object.fromEntries(map);

   return obj;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let array=[], array2=[],cont=0,array1=[],h=0;
   array = string.split("");

   for(let i=0;i<array.length;i++){
      if(array[i] === array[i].toLowerCase()){
         array1[h]=array[i];
         h++;

      }else if(array[i] === array[i].toUpperCase()){
       array2[cont]=array[i];
      cont++;
      }
   }
   let m = array2.length +array1.length,gf=0;
     for(let i=array2.length;i<m;i++){
      array2[i] = array1[gf];
      gf++;
     }
     return array2.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array=[],array1=[],array2 =[],string='';
   array = frase.split(" ")
   for(let i=0;i<array.length;i++){
      array1[i] = array[i].split("");
      array1[i].reverse();
      array2[i] =array1[i].join("");
   }
   string = array2.join(" ");
   return string;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let array=[],string='';
   string =String(numero);
   array = string.split("");
   array.reverse();
   let newnum =array.join("");
   let m = parseInt(newnum);
   if(numero === m){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = [], array2 = [], l = 0;
        array = string.split("");
        for (let i = 0; i < array.length; i++) {
            if (array[i] != 'a') {
                if (array[i] != 'b') {
                    if (array[i] != 'c') {
                    array2[l] = array[i];
                    l++;
                }
              }
            }
        }

   let NewString = array2.join("");
   return NewString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
