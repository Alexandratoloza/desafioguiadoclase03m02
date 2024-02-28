//calculo del factorial

const factorial = (numero) => {
    if(numero <= 1) return 1
    return numero * factorial(numero - 1 )
}




const programaPrincipal = numero  => {
    if( numero < 1 || numero > 20){
        console.log('número fuera de Rango')
       return
       
    }
    console.log('Paso la validación')

    for (let i = 1 ; i <= numero ; i++){
        console.log (`${i} x ${numero} = ${i*numero}`)

    }

    for (let i = 1 ; i <= numero ; i++){ 
        console.log(`El factorial de ${i}! = ${factorial(i)}`)
    }
}

const input  = +prompt("Ingrese un numero")
programaPrincipal (input)

