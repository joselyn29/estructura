function crearCuentaRegresiva (numeroInicial){
   let cuentaRegresiva = []
   for (let i=numeroInicial; i>=0; i--){
     cuentaRegresiva.push(i);
   }
   return cuentaRegresiva
}
console.log(crearCuentaRegresiva(5))