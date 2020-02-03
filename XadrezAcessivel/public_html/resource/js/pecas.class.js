//classe Peca
//construtor com propriedades: nome, cor
function Peca(nome, cor) {
    this.nome = nome;
    this.cor = cor;

    this.mostrarDados = function() {
        alert("Nome da Peça: " + this.nome + "\nCor: " + this.cor);
    }
}