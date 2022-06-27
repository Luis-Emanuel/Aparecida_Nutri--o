
var paciente = document.querySelectorAll(".paciente");
for(contador = 0; contador<paciente.length; contador++){

    //ACESSO A TAGS 
    var tdPeso = paciente[contador].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente[contador].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente[contador].querySelector(".info-imc");

    //VALIDAÇÃO DE PESO E ALTURA
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        tdPeso.textContent = "Peso INVALIDO!";
        paciente[contador].classList.add("paciente-incvalido")
    }
    if(!alturaEhValido){
        alturaEhValido = false;
        tdAltura.textContent = "Altuta INVALIDA!"
        paciente[contador].classList.add("paciente-incvalido")
    }
    //ATRIBUIDO IMC
    if(pesoEhValido && alturaEhValido){
        var imc = calculaImc(altura, peso);
        tdImc.textContent = imc;   
    }
}
//Calculo do IMC
function calculaImc(altura, peso){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
//Validação de peso
function validaPeso(peso){
    if(peso>=0 && peso<=1000){
        return true;
    }else{
        return false;
    }
}
//Validação de altura
function validaAltura(altura){
    if(altura>=0 && altura<=3.0){
        return true;
    }else{
        return false;
    }
}