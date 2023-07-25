function obtenerIndice(valor, array){
    
    for (let i=0; i<array.length; i++){
      if(array[i] === valor){
        return i;
      }
    }

    return -1
}

console.log(obtenerIndice(13,[5, 10, 8, 9, 10, 13]))