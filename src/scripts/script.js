// ======= Variaveis ======= //
const notaMin = document.querySelector("#notaMin");
const botaoFiltrar = document.querySelector("#botaoFiltrar");
const qtdAlunosValor = document.querySelector("#qtdAlunosValor");
const secaoAlunos = document.querySelector("#secaoAlunos");
let listaAlunos = [];
let cadastroAlunos = [];

document.addEventListener("DOMContentLoaded", function(){

    // ======= Criando Array Objeto cadastroAlunos  ======= //
    for (let i = 1; i <= 50 ; i++) {
        let nota = Math.floor( i * Math.random() + 1)
        
        let novoAluno = {
            nome: `Aluno ${i}`,
            nota: nota
        };
        cadastroAlunos.push(novoAluno);

        listaAlunos.push(
            `<li>
                ${cadastroAlunos[i-1].nome},
                nota: ${cadastroAlunos[i-1].nota}
            </li>`
        );
    }

    // ======= Alterando HTML com Array Objeto cadastroAlunos   ======= //
    secaoAlunos.innerHTML = listaAlunos.join("");
    qtdAlunosValor.innerHTML = `Qtd Alunos: ${listaAlunos.length}`;

    // ======= Botão filtrar Alunos   ======= //
    botaoFiltrar.addEventListener("click", filtrarAlunos)
})

// ======= Função filtrar cadastroAlunos   ======= //
function filtrarAlunos(){
    listaAlunos = [];
    let listaAlunosFiltrada = cadastroAlunos.filter( aluno => aluno.nota >= notaMin.value)

    for (let i = 0; i < listaAlunosFiltrada.length; i++) {
        listaAlunos.push(`
            <li>
                ${listaAlunosFiltrada[i].nome}, 
                nota: ${listaAlunosFiltrada[i].nota}
            </li>`
        );  
    }
    secaoAlunos.innerHTML = "";
    secaoAlunos.innerHTML = listaAlunos.join("");
    qtdAlunosValor.innerHTML = `Qtd Alunos: ${listaAlunos.length}`;
}