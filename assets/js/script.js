// mascaras e validação de formulário
$("form").validate({
    rules:{
        nome:{required: true},
        email:{required: true, email: true},
        telefone:{required: true}},

        messages:{nome: "Por favor, insira seu nome"},
        
        submitHandler:function(form) {
            // console.log(form)
        },
        
        invalidHandler:function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }    
    })