
var paciente = document.querySelectorAll(".paciente");
for(contador = 0; contador<paciente.length; contador++){
    //ACESSO A TAGS 
    var tdPeso = paciente[contador].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente[contador].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente[contador].querySelector(".info-imc");
    //VALIDAÇÃO DE PESO E ALTURA
    var pesoEhValido = true;
    var alturaEhValido = true;
    if(peso<=0 || peso>=1000){
        pesoEhValido = false;
        tdPeso.textContent = "Peso INVALIDO!";
        paciente[contador].classList.add("paciente-incvalido")
    }
    if(altura<=0 || altura>=3.00){
        alturaEhValido = false;
        tdAltura.textContent = "Altuta INVALIDA!"
        paciente[contador].classList.add("paciente-incvalido")
    }
    //ATRIBUIDO IMC
    if(pesoEhValido && alturaEhValido){
        var imc = peso / (altura * altura) ;
        tdImc.textContent = imc.toFixed(2);   
    }
}


