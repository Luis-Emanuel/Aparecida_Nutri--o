var adicionarPaciente = document.querySelector("#adicionar-paciente");

adicionarPaciente.addEventListener('click', function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemDadosDoFormulario(form);
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    adicionarPacienteNaTabela(paciente)
    form.reset();
    var mensagemDeErro = document.querySelector(".mensagem-erro");
    mensagemDeErro.innerHTML = "";
})
function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector(".mensagem-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    })

}

function obtemDadosDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd("info-nome",paciente.nome));
    pacienteTr.appendChild(montaTd("info-peso",paciente.peso ));
    pacienteTr.appendChild(montaTd("info-altura",paciente.altura));
    pacienteTr.appendChild(montaTd("info-gordura",paciente.gordura));
    pacienteTr.appendChild(montaTd("info-imc",paciente.imc));

    return pacienteTr;
}

function montaTd(classe,dado){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = []
    if(paciente.nome.length == 0){
        erros.push("Campo nome não pode está vazio")
    }
    if(paciente.peso.length == 0){
        erros.push("Campo peso não pode está vazio")
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido!");
    }
    if(paciente.altura.length == 0){
        erros.push("Campo altura não pode está vazio")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalido!");
    }
    if(paciente.gordura.length == ""){
        erros.push("Campo gordura não pode está vazio")
    }
    return erros;
}