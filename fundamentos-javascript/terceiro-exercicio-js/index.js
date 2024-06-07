const veiculo1 = prompt("Digite o nome do primeiro veiculo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veiculo:"))

const veiculo2 = prompt("Digite o nome do segundo veiculo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veiculo:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido que " + veiculo2)
} else if (velocidade1 < velocidade2){
    alert(veiculo2 + " é mais rápido que " + veiculo1)
} else {
    alert("Os dois veiculos tem a mesma velocidade")
}