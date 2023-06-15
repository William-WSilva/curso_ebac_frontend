$(document).ready(function() {
    
    // recurso menu Hamburguer
    $(".menu_hamburguer").click(function() {
        $("nav").slideToggle();
    });

    // mascaras para inputs do formulário
    $("#input_telefone").mask("(00) 0 0000-0000",{
        placeholder: "(00) 0 0000-0000"
    });

    $("#cpf").mask("000.000.000-00",{
        placeholder: "000.000.000-00"
    });

    $("#cep").mask("00000-000",{
        placeholder: "00000-00"
    });

    // Validação de formulário
    $("form").validate({
        rules:{
            nome:{required: true},
            email:{required: true, email: true},
            telefone:{required: true},
            cpf:{required: true},
            endereco_completo:{required: true},
            cep:{required: true},
            mensagem:{required: false},
            veiculo_de_interesse:{required: false}},
            messages:{nome: "Por favor, insira seu nome"},
            submitHandler:function(form) {
                // console.log(form)
                form.submit();
            },
            invalidHandler:function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
    
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`);
                }
            }    
    })

})
