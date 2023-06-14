let listaTarefas = [];

$(document).ready(function() {
    // Registrando o evento de clique nos elementos <li>
    $("ol").on("click", "li", function() {
        var textDecoration = $(this).css("text-decoration");

        if (textDecoration.includes("line-through")) {
            $(this).css("text-decoration", "none");
            $(this).css("color", "black");
        } else {
            $(this).css("text-decoration", "line-through");
            $(this).css("color", "red");
        }
    });

    // Registrando novas tarefas
    $("form").on("submit", function(evento) {
        evento.preventDefault();

        const inputNovaTarefa = $("#form_tarefa").val();

        if (listaTarefas.includes(inputNovaTarefa)) {
            alert(`A tarefa: ${inputNovaTarefa} já foi inserida`);
        } else {
            listaTarefas.push(inputNovaTarefa);

            const novaTarefa = `
                <li>
                    <span id="item_tarefa">${inputNovaTarefa}</span>
                </li>
            `;
            $("ol").append(novaTarefa);
        }

        $("#form_tarefa").val("");
    });
});



