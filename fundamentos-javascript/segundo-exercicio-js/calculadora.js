const entrada1 = prompt("Digite o primeiro valor: ")
const entrada2 = prompt("Digite o segundfo valor: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y 
const multiplicacao = x * y 
const divisao = x / y 

alert(
    "Os resultados são:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)