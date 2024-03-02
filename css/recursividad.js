function imprimirNueros(n){
    if(n>=0){
        console.log(n)
        imprimirNueros(n-1)
    }
}

console.log(imprimirNueros(100))