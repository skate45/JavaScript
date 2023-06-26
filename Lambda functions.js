
//EJERCICIOS CON EXPRESIONES LAMBDA
function solution(inputArray) {
  
    //CALCULO DEL MAYOR TAMAÑO DE CADENA EN ARRAY DE strings
    var mayor=inputArray.reduce(
        (acc, x) => Math.max(acc,x.length), 0
    );

  //CALCULO DE las cadenas con tamaño mayor en ARRAY de strings
    var mayores=inputArray.filter(
        (x) => x.length==mayor
    );
    //console.log(mayor);
    
    return mayores;
}
