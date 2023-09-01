'use strict'

const botaoSomar = document.getElementById('somar')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoSomar2 = document.getElementById('somar2')
const botaoCalcularMedia = document.getElementById('calcularMedia')


function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 +  numero2
    resultado.textContent = total
}

function multiplicar(){
    const numero = Number(document.getElementById('numero-item3').value)
    const resultado = document.getElementById('resultado-item3')
    
    const total = numero * 2
        

    if(total>30){
        resultado.textContent= total
    }else{
        resultado.textContent= 'ERRO'
    }
}

function somar2(){
    const numero1 = Number(document.getElementById('numero1-item4').value)
    const numero2 = Number(document.getElementById('numero2-item4').value)
    const numero3 = Number(document.getElementById('numero3-item4').value)
    const resultado = document.getElementById('resultado-item4')

    const total = numero1 + numero2 + numero3

    if(total>=100){
        resultado.textContent = total
    }else{
        resultado.textContent = 'ERRO'
    }
}

function calcularMedia(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)

    const media = (nota1 + nota2 + nota3 + nota4)/4

    if(media>=7){
        alert ("Sua média foi " + media + ". Parabéns você foi aprovado!!");
    }else{
        const exame = prompt ('Sua média foi ' + media + ', digite a quinta nota:')
        const media2 = (media + Number (exame)) /2

        if(media2>=5){
        alert ("Parabéns, você foi aprovado no exame, sua nova nota é: ' + media2")
        }else{
            alert ("Sua nota foi: " + media2 + ", você está reprovado!")
        }
    }

}

botaoSomar.addEventListener('click', somar)
botaoMultiplicar.addEventListener('click', multiplicar)
botaoSomar2.addEventListener('click', somar2)
botaoCalcularMedia.addEventListener('click', calcularMedia)
