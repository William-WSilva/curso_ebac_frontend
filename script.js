
// mascaras para inputs do formulário
$("#input_telefone").mask("(00) 0 0000-0000",{
    placeholder: "(00) 0 0000-0000"
});

// Validação de formulário
$("form").validate({
    rules:{
        nome:{required: true},
        email:{required: true, email: true},
        telefone:{required: true},
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
    }       
})
