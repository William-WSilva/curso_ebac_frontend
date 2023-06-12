var form = document.getElementById("formulario_AxB");


form.addEventListener("submit", function(validar){
    validar.preventDefault();

    var campo_a = document.getElementById("campo_a").value;
    var campo_b = document.getElementById("campo_b").value;
    campo_a = parseInt(campo_a);
    campo_b = parseInt(campo_b);

    if( campo_b > campo_a ){
        document.querySelector("#mensagem_ok").style.display = "block";
        document.querySelector("#mensagem_erro").style.display = "none";
    }else{
        document.querySelector("#mensagem_erro").style.display = "block";
        document.querySelector("#mensagem_ok").style.display = "none";
    }
});



