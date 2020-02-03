//classe Tabuleiro
//construtor com propriedades: x,y (horizontal e vertical) 
//objeto array que vai receber as posicoes do tabuleiro
function Tabuleiro(x, y) {
    this.x = x;
    this.y = y;

    this.mostrarPosicao = function () {
        alert("Posição: " + this.x + "," + this.y);
    };
}

//Rainha branca
    var RainhaBranca = new Peca("Rainha", "branca");
    this.x = 8;
    this.y = 4;
    RainhaBranca.mostrarDados();

//Rei branco
    var ReiBranco = new Peca("Rei", "branco");
    Tabuleiro.call(this, x, y);
    this.x = 8;
    this.y = 5;
    ReiBranco.mostrarDados();
    Tabuleiro.mostrarPosicao();


