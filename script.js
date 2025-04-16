//Armazenar valor dos inputs altura e peso
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
//ArmZENr o valor do botão 
var btn = document.getElementById("btn");
//Armazenar o valor da div fim
var fim = document.getElementById("fim");

//Fução para calcular o IC
function calcularIMC(){
    //Armazenar apenas o valor do input
    const valorAltura = altura.value
    const ValorPeso = peso.value

    //Calcular o IMC
    const imc = ValorPeso / (valorAltura * valorAltura)
    //Armazenar resultado
    return imc 
}

//Função de click
function calcular(){
    //Chama a função de calcularIMC e armazenar o valor
    const imc = calcularIMC()
    var mensagem = ""

        if(imc <= 18.5 && imc < 29.9){
            mensagem = "Sobrepeso!"
        }

        if(imc >= 25 && imc < 29.9){
            mensagem = "Você está com o peso Normal!"
        }

        if(imc >= 30 && imc < 34.9){
            mensagem = "Você está com Obesidade grau 1!"
        }

        if(imc >= 35 && imc < 39.9){
            mensagem = "Você está com Obesidade grau 2!"
        }

    //Renderizar o resultado na div fim
    fim.innerHTML = `
        <div class="linha" </div>
        <div class="resultado">
            <div class="esquerda">
                <p> Seu IMC é :  </p>
                <h2>${imc.toFixed(2)}</h2>
            </div>
            <div class="direita">
            <p>${mensagem}</p>
                </div>
            </div>
            <div class="linha" </div>
        `
    }

//Adicionar evento de click no botão
btn.addEventListener("click", calcular)
