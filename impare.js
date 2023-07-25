function impares(num){
    let suma = 0
    for (let i=1; i<=num; i+=2){
       suma+=i
    }
    return suma
}
console.log (impares(5))