//Armazenar os valores dos inputs pelo id
const dias = document.getElementById("dia")
const kms = document.getElementById("km")
const categoria = document.getElementById("categoria")

//Armazenar o valor do botão calcular pelo id
const btn = document.getElementById("calcular")

//Armazenar o valor dos resulatos pelo id
const valorDiarias = document.getElementById("result-diaria")
const totalDias = document.getAnimations("total-dias")
const resultTotalDias = document.getElementById("result-total-dias")
const resultKm = document.getElementById("result-km")
const totalKms = document.getElementById("total-kms")
const resultTotalKms = document.getElementById("result-total-kms")
const resultTotal = document.getElementById("result-total")

function Calcular(){
    const economico = {
        diaria: 100,
        km: 0.20
    }
    const intermediario = {
        diaria: 150,
        km: 0.40
    }
    const luxo = {
        diaria: 250,
        km: 0.80
    }
    let valorDiaria = 0;
    let valorKm = 0;
    
    if(categoria.value == "economico"){
        valorDiaria = economico.diaria
        valorKm = economico.km
    }
    if(categoria.value == "intermediario"){
        valorDiaria = intermediario.diaria
        valorKm = intermediario.km
    }
    if(categoria.value == "luxo"){
        valorDiaria = luxo.diaria
        valorKm = luxo.km
    }

    const totalDiarias = valorDiaria * dias.value
    const calcTotalKms = valorKm * kms.value
    const total = totalDiarias + calcTotalKms

    //Exibir os resultados 
    valorDiarias.innerHTML = `R$ ${valorDiaria.toFixed(2)}`
    totalDias.innerHTML = `(${dias.value} Dias`
    resultTotalDias.innerHTML = `R$ ${totalDiarias.toFixed(2)}`
    resultKm.innerHTML = `R$ ${valorKm.toFixed(2)}`
    totalKms.innerHTML = `(${kms.value} Kms)`
    resultTotalKms.innerHTML = `R$ ${calcTotalKms.toFixed(2)}`
    resultTotal.innerHTML = `R$ ${total.toFixed(2)}`
    
}

//Adicionar o evento de click no botão calcular
btn.addEventListener("click", Calcular)

