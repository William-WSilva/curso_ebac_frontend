const form = document.getElementById("form_contato");
const NomeContato = [];
const TelefoneContato = [];

let linhaRegistro = "";

//================ Funções =======================


function adicionarRegistros() {
    const inputNomeContato = document.getElementById("formNome");
    const inputTelefoneContato = document.getElementById("formTelefone");

    if (NomeContato.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já existe:`);
        // console.log(inputNomeContato);
    }else{
        console.log(`O contato é ${inputNomeContato.value} e o tel é:${inputTelefoneContato.value}`)

        // console.log(inputTelefoneContato);

        NomeContato.push(inputNomeContato.value);
        TelefoneContato.push( inputTelefoneContato.value );

        let inputLinha =
        `<tr> 
            <td>${inputNomeContato.value} </td> 
            <td>${inputTelefoneContato.value}</td>
        </tr>`;

        linhaRegistro += inputLinha;
    }

    inputNomeContato.value = "";
    inputTelefoneContato.value = "";
}

function atualizarTabela() {
    const corpotabela = document.querySelector("tbody");
    corpotabela.innerHTML = linhaRegistro;
}

function atualizarQtdRegistros() {
    const qtdRegistros = NomeContato.length

    document.getElementById("qtd_registros").innerHTML = qtdRegistros;
}


//================ Cadastrar Registros =======================

form.addEventListener("submit", function(evento){
    evento.preventDefault();

    adicionarRegistros();
    atualizarTabela();
    atualizarQtdRegistros();

});