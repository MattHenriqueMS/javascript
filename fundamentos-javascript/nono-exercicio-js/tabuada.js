const numero = prompt(
    "Olá, eu sou o Robô da Tabuada\n" +
    "Informe o numero que você deseja calcular na tabuada"
)
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)