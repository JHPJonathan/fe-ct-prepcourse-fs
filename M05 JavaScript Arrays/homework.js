/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   array =[1,2,5,];
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let m= array.length;
     return array[m];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let num = [];
   for(let i=0;i<=array.length;i++){
      num[i] = array[i]+1;
   }
   return num;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   return array.push(elemento);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   return array.unshift(elemento);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let m="";
   for(let i=0; i<=palabras.length;i++){
      m +=palabras[i]; 
   }
   return m;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   
   for(let i=0;i<=array.length;i++ ) if(array[i]===elemento)return true;
  return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   const res = arrayOfNums.reduce((acce,items) =>{
      return acce =acce+items;
   })
 return res;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   
  let promedio = resultadosTest.reduce((ace,items)=>{
   return ace+=items;
  })
   return promedio /resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor=0;
   for(let i=0;i<arrayOfNums.length;i++){
      if(mayor <arrayOfNums[i]){
         mayor=arrayOfNums[i];
      }
   }
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let producto = 1;
    let arguments = [1, 31, 6, 52, 67, 2];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments === null) {
        return 0;
      } else {
        producto *= arguments[i];
      }
    }
    return producto;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   return retrunElement(array);
}
const retrunElement = (array)=>{
   let element= 0;
   for(let i=0;i<array.length;i++){
      element +=array[i];
   }
   if(element > 18){
      return element;
   }else{
      return ;
   }

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   return diasSemana(numeroDeDia);
}
const diasSemana = (numeroDeDia)=>{
   if(numeroDeDia === "Sábado" || numeroDeDia === "Domingo"){
      return "Es fin de semana" ;
   }else{
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let lnum = String(num2);
   if (lnum.charAt(0) == "9") return true; else return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   let iguales = true;
   for(let i=0;i<array.length;i++){
       for(let j=0;j<array.length;j++){
         if(array[i] !=array[j]){
            iguales =false;
         }
      
   }
   }
   return iguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let acumulador= [];
   let k=0;
   for(let i=0;i<array.length;i++){
      if(array[i]==="Enero"){
         acumulador[k]=array[i];
         k++;
      }
      if(array[i]==="Marzo"){
         acumulador[k]=array[i];
         k++;
      }
      if(array[i]==="Noviembre"){
         acumulador[k]=array[i];
         k++;    
      }

   }

   return acumulador.length === 3?acumulador:"No se encontraron los meses pedidos";

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   return tabla();
}
const tabla = () =>{
   let num=[],multiplicacion=0;
   for(let i=0;i<=60;i++){
      multiplicacion =6*i;
      num[i] =multiplicacion; 
   }
return num;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   mayoresCien(array);
}
const mayoresCien = (array) =>{
   let arreglo =[],k=0;
   for(let i=0;i<=array.length;i++){
      if(array[i]>100){
         arreglo[k] =array[i];
         k++;
      }
   }
   return arreglo;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
      let bol =true, suma =0, arr=[];
      for(let i=0;i<10;i+=2){
         arr[i]=num;
         suma+=arr[i];
         if(suma === arr.length){
            bol = false;
            break;
         }
      }
      if(bol){
         return suma;
      }
       return "Se interrumpió la ejecución";
   
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let bol =true, suma =0, arr=[];
      for(let i=0;i<10;i+=2){
         if(i === 5){
           continue;
         }else{
         arr[i]=num;
         suma+=arr[i];
         }
      }
     return arr;


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
