var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){     
        var alvoEvento = event.target;
        var paiAlvo = alvoEvento.parentNode;
        paiAlvo.classList.add("fadeOut");
        setTimeout(function(){
            paiAlvo.remove();
        },500);
    });

