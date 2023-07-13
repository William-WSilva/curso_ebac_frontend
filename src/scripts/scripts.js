// Classe Pessoa
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    
    this.saudacao = function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  
    this.apresentarIdade = function() {
      console.log(`Eu tenho ${this.idade} anos`);
    }
  }
  
  // Classe Cliente, herda de Pessoa
  function Cliente(nome, idade, email) {
    Pessoa.call(this, nome, idade);
    this.email = email;

    this.realizarCompra = function() {
        console.log(`Cliente ${this.nome} realizou uma compra.`);
    }
}
  
  // Classe Funcionario, herda de Pessoa
  function Funcionario(nome, idade, cargo){
    Pessoa.call(this, nome, idade);
      this.cargo = cargo;
    
      this.apresentarCargo = function() {
      console.log(`Eu sou ${this.cargo}`);
    }
}
  
  // Instâncias das classes
  const pessoa1 = new Pessoa("João", 25);
  pessoa1.saudacao();
  pessoa1.apresentarIdade();
  
  const cliente1 = new Cliente("Maria", 30, "maria@example.com");
  cliente1.saudacao();
  cliente1.apresentarIdade();
  cliente1.realizarCompra();
  
  const funcionario1 = new Funcionario("Pedro", 35, "Gerente");
  funcionario1.saudacao();
  funcionario1.apresentarIdade();
  funcionario1.apresentarCargo();
  