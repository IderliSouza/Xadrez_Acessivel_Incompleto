
function inicia_jogo() {
    alert("Xadrez Acessível!\n \n\
           O jogo começa com o movimento do jogador de peças brancas.\n\
           Selecione uma peça e logo após, selecione uma posição para mover\n\
            a peça. Os locais para onde as peças podem ser movimentadas\n\
           estão destacadas com a cor azul. O jogador que imobilizar\n\
           os movimentos da peça 'Rei', será considerado o vencedor!\n\
           \n\
           BOM JOGO!");
    
    vez = "branco"; //vez de quem jogar

//muda a classe das pecas pretas(encima) para mostrar imgens das pecas
	document.getElementById("t11").className = "torre-preto";
        document.getElementById('t11').setAttribute('title', 'torre');
	document.getElementById("t12").className = "cavalo-preto";
        document.getElementById('t12').setAttribute('title', 'cavalo');
	document.getElementById("t13").className = "bispo-preto";
        document.getElementById('t13').setAttribute('title', 'bispo');
	document.getElementById("t14").className = "rainha-preto";
        document.getElementById('t14').setAttribute('title', 'rainha');
	document.getElementById("t15").className = "rei-preto";
        document.getElementById('t15').setAttribute('title', 'rei');
	document.getElementById("t16").className = "bispo-preto";
        document.getElementById('t16').setAttribute('title', 'bispo');
	document.getElementById("t17").className = "cavalo-preto";
        document.getElementById('t17').setAttribute('title', 'cavalo');
	document.getElementById("t18").className = "torre-preto";
        document.getElementById('t18').setAttribute('title', 'torre');
	
	document.getElementById("t21").className = "peao-preto";
        document.getElementById('t21').setAttribute('title', 'peão');
	document.getElementById("t22").className = "peao-preto";
        document.getElementById('t22').setAttribute('title', 'peão');
	document.getElementById("t23").className = "peao-preto";
        document.getElementById('t23').setAttribute('title', 'peão');
	document.getElementById("t24").className = "peao-preto";
        document.getElementById('t24').setAttribute('title', 'peão');
	document.getElementById("t25").className = "peao-preto";
        document.getElementById('t25').setAttribute('title', 'peão');
	document.getElementById("t26").className = "peao-preto";
        document.getElementById('t26').setAttribute('title', 'peão');
	document.getElementById("t27").className = "peao-preto";
        document.getElementById('t27').setAttribute('title', 'peão');
	document.getElementById("t28").className = "peao-preto";
        document.getElementById('t28').setAttribute('title', 'peão');
	
//muda a classe das pecas brancas(embaixo) para mostrar imgens das pecas
	document.getElementById("t81").className = "torre-branco";
        document.getElementById('t81').setAttribute('title', 'torre');
	document.getElementById("t82").className = "cavalo-branco";
        document.getElementById('t82').setAttribute('title', 'cavalo');
	document.getElementById("t83").className = "bispo-branco";
        document.getElementById('t83').setAttribute('title', 'bispo');
	document.getElementById("t84").className = "rainha-branco";
        document.getElementById('t84').setAttribute('title', 'rainha');
	document.getElementById("t85").className = "rei-branco";
        document.getElementById('t85').setAttribute('title', 'rei');
	document.getElementById("t86").className = "bispo-branco";
        document.getElementById('t86').setAttribute('title', 'bispo');
	document.getElementById("t87").className = "cavalo-branco";
        document.getElementById('t87').setAttribute('title', 'cavalo');
	document.getElementById("t88").className = "torre-branco";
        document.getElementById('t88').setAttribute('title', 'torre');
	
	document.getElementById("t71").className = "peao-branco";
        document.getElementById('t71').setAttribute('title', 'peão');
	document.getElementById("t72").className = "peao-branco";
        document.getElementById('t72').setAttribute('title', 'peão');
	document.getElementById("t73").className = "peao-branco";
        document.getElementById('t73').setAttribute('title', 'peão');
	document.getElementById("t74").className = "peao-branco";
        document.getElementById('t74').setAttribute('title', 'peão');
	document.getElementById("t75").className = "peao-branco";
        document.getElementById('t75').setAttribute('title', 'peão');
	document.getElementById("t76").className = "peao-branco";
        document.getElementById('t76').setAttribute('title', 'peão');
	document.getElementById("t77").className = "peao-branco";
        document.getElementById('t77').setAttribute('title', 'peão');
	document.getElementById("t78").className = "peao-branco";
        document.getElementById('t78').setAttribute('title', 'peão');

    //cria array que vai receber as posicoes do tabuleiro
    
cria_array();
function cria_array() {
    var x, y;

    peca = new Array();

    for (x = 1; x <= 8; x++) {
        peca[x] = new Array();

        for (y = 1; y <= 8; y++) {
            peca[x][y] = new Array();
            //Seguir com uma matrix bidimensional e com Orientação a Objetos
            peca[x][y]['peca'] = false; //defino como falso para as que não 
            //começam com peça, para ficarem nulas
            peca[x][y]['cor'] = false; //defino como falso para as que não
            // começam com peça, para ficarem nulas

        }
    }

}
    
        //posiciona as pecas pretas no array
    
	peca[1][1]['peca']="torre";		peca[1][1]['cor']="preto";	peca[1][1]['mov']=0;
	peca[1][2]['peca']="cavalo";	        peca[1][2]['cor']="preto";	peca[1][2]['mov']=0;
	peca[1][3]['peca']="bispo"; 	        peca[1][3]['cor']="preto";	peca[1][3]['mov']=0;
	peca[1][4]['peca']="rainha";	        peca[1][4]['cor']="preto";	peca[1][4]['mov']=0;
	peca[1][5]['peca']="rei";		peca[1][5]['cor']="preto";	peca[1][5]['mov']=0;
	peca[1][6]['peca']="bispo";		peca[1][6]['cor']="preto";	peca[1][6]['mov']=0;
	peca[1][7]['peca']="cavalo";	        peca[1][7]['cor']="preto";	peca[1][7]['mov']=0;
	peca[1][8]['peca']="torre";		peca[1][8]['cor']="preto";	peca[1][8]['mov']=0;

	peca[2][1]['peca']="peao";		peca[2][1]['cor']="preto";	peca[2][1]['mov']=0;
	peca[2][2]['peca']="peao";		peca[2][2]['cor']="preto";	peca[2][2]['mov']=0;
	peca[2][3]['peca']="peao"; 		peca[2][3]['cor']="preto";	peca[2][3]['mov']=0;
	peca[2][4]['peca']="peao";		peca[2][4]['cor']="preto";	peca[2][4]['mov']=0;
	peca[2][5]['peca']="peao";		peca[2][5]['cor']="preto";	peca[2][5]['mov']=0;
	peca[2][6]['peca']="peao";		peca[2][6]['cor']="preto";	peca[2][6]['mov']=0;
	peca[2][7]['peca']="peao";		peca[2][7]['cor']="preto";	peca[2][7]['mov']=0;
	peca[2][8]['peca']="peao";		peca[2][8]['cor']="preto";	peca[2][8]['mov']=0;	

        //posiciona as pecas brancas no array	
	
        peca[8][1]['peca']="torre";		peca[8][1]['cor']="branco";	peca[8][1]['mov']=0;
	peca[8][2]['peca']="cavalo";	        peca[8][2]['cor']="branco";	peca[8][2]['mov']=0;
	peca[8][3]['peca']="bispo"; 	        peca[8][3]['cor']="branco";	peca[8][3]['mov']=0;
	peca[8][4]['peca']="rainha";	        peca[8][4]['cor']="branco";	peca[8][4]['mov']=0;
	peca[8][5]['peca']="rei";		peca[8][5]['cor']="branco";	peca[8][5]['mov']=0;
	peca[8][6]['peca']="bispo";		peca[8][6]['cor']="branco";	peca[8][6]['mov']=0;
	peca[8][7]['peca']="cavalo";	        peca[8][7]['cor']="branco";	peca[8][7]['mov']=0;
	peca[8][8]['peca']="torre";		peca[8][8]['cor']="branco";	peca[8][8]['mov']=0;

	peca[7][1]['peca']="peao";		peca[7][1]['cor']="branco";	peca[7][1]['mov']=0;
	peca[7][2]['peca']="peao";		peca[7][2]['cor']="branco";	peca[7][2]['mov']=0;
	peca[7][3]['peca']="peao"; 		peca[7][3]['cor']="branco";	peca[7][3]['mov']=0;
	peca[7][4]['peca']="peao";		peca[7][4]['cor']="branco";	peca[7][4]['mov']=0;
	peca[7][5]['peca']="peao";		peca[7][5]['cor']="branco";	peca[7][5]['mov']=0;
	peca[7][6]['peca']="peao";		peca[7][6]['cor']="branco";	peca[7][6]['mov']=0;
	peca[7][7]['peca']="peao";		peca[7][7]['cor']="branco";	peca[7][7]['mov']=0;
	peca[7][8]['peca']="peao";		peca[7][8]['cor']="branco";	peca[7][8]['mov']=0;	


        //aray para movimentar as pecas
	movimenta = new Array();
	
	movimenta['selecionada'] = new Array();
	movimenta['selecionada']['x'] = 0;
	movimenta['selecionada']['y'] = 0;
	movimenta['selecionada']['peca'] = "0";
	movimenta['selecionada']['cor'] = "0";
	
	movimenta['destino'] = new Array();
	movimenta['destino']['x'] = 0;
	movimenta['destino']['y'] = 0; 
	movimenta['destino']['peca'] = "0";
	movimenta['destino']['cor'] = "0";

        ///aray para os possiveis movimentos
	possiveis = new Array();

}

function seleciona(x,y){
//    alert(x+" "+y);
    if((movimenta['selecionada']['x'] === 0 || 
        peca[x][y]['cor'] === movimenta['selecionada']['cor']) &&
            peca[x][y]['cor'] === vez){

        if(movimenta['selecionada']['x'] !== 0){
                volta_fundo(); //volta a cor de fundo normal
            }
            if(peca[x][y]['peca']){ //se tiver uma peca nessa posição
                movimenta['selecionada']['x'] = x;  //recebe x selecionado
                movimenta['selecionada']['y'] = y;  //recebe y selecionado
                movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
                movimenta['selecionada']['cor'] = peca[x][y]['cor'];   //recebe a cor selecionada
				
                cont_possiveis = possiveis_movimentos();	
            }
            
//se for segundo clique e a cor da peca destino for diferente da selecionada
    }else if(verifica_possivel(x,y,cont_possiveis)){
		
        if(peca[x][y]['peca'] === "rei"){
            alert(movimenta['selecionada']['cor']+" venceu (:");
            window.location.reload();

        }
        if(peca[x][y]['cor'] !== movimenta['selecionada']['cor']){
            movimenta['destino']['x'] =x; //recebe o x do destino(segundo clique)
            movimenta['destino']['y'] =y; //recebe y do destino(segundo clique)
			
            if(peca[x][y]['peca']){  //se tiver alguma peca nessa posição
                movimenta['destino']['peca'] = peca[x][y]['peca']; //destino recebe a peca selecionada
                movimenta['destino']['cor'] = peca[x][y]['cor']; //destino recebe a cor selecionada
            }

            document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).className = ""; //selcionada fica sem imagem
            document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).setAttribute('title',''); //selcionada fica sem titulo
            document.getElementById("t"+x+""+y).className = movimenta['selecionada']['peca']+"-"+movimenta['selecionada']['cor']; //destino recebe a imagem da peça selecinada
            document.getElementById("t"+x+""+y).setAttribute("title", movimenta['selecionada']['peca']); //destino recebe a imagem da peça selecinada
            peca[x][y]['peca']=movimenta['selecionada']['peca'];	//posicao destino recebe a peca
            peca[x][y]['cor']=movimenta['selecionada']['cor'];		//posicao destino recebe a cor
								
            peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;		//peca selecionada recebe 0
            peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		//cor selecionada recebe 0
					
            movimenta['selecionada']['x'] =0; //selecionada x recebe 0 (pra na proxima ver q Ã© o primeiro movimento)
            movimenta['selecionada']['y'] =0; //selecionada y recebe 0 (pra na proxima ver q Ã© o primeiro movimento)
            movimenta['selecionada']['peca']="0"; //selecionada peca recebe 0 (pra na proxima ver q Ã© o primeiro movimento)
            movimenta['selecionada']['cor']="0";  //selecionada cor recebe 0 (pra na proxima ver q Ã© o primeiro movimento)

        }

        volta_fundo(); //volta a cor de fundo normal

        if(vez === "branco"){
            vez="preto";
        }else{
            vez="branco";
        } //troca a vez
    }

}

function possiveis_movimentos(){
    var x,y;
    var c =0; //contador pro array possiveis
    var i; //contador pros for
    x = movimenta['selecionada']['x'];
    y = movimenta['selecionada']['y'];

    document.getElementById('t'+x+y).style.backgroundColor = "#4285f4"; //muda cor de fundo
    possiveis[c] = "t"+x+y; c++;

/////////////////////////////////////////////PEAO////////////////////////////////
    if(peca[x][y]['peca'] === 'peao'){
        if(peca[x][y]['cor'] === "branco"){
            if(!peca[x-1][y]['peca']){
                possivel(x-1,y);
            }
            if(y-1>0 && peca[x-1][y-1]['peca']){
                possivel(x-1,y-1);						
            }
            if(y+1<9 && peca[x-1][y+1]['peca']){
                possivel(x-1,y+1);					
            }
            if(x === 7){				
                if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
                    possivel(x-2,y);
                }
            }
    }
        if(peca[x][y]['cor'] === "preto"){
            if(!peca[x+1][y]['peca']){
                possivel(x+1,y);
            }
            if(y-1>0 && peca[x+1][y-1]['peca']){
                possivel(x+1,y-1);						
            }
            if(y+1<9 && peca[x+1][y+1]['peca']){
                possivel(x+1,y+1);					
            }
            if(x === 2){		
                if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
                    possivel(x+2,y);
                }
            }
         }
    }
/////////////////////////////////////////FIM PEAO//////////////////////////////

////////////////////////////////////////CAVALO ////////////////////////////////

    if(peca[x][y]['peca'] === 'cavalo'){

        possivel(x-1,y-2);
        possivel(x+1,y+2);
        possivel(x+1,y-2);
        possivel(x-1,y+2);
        possivel(x-2,y-1);
        possivel(x+2,y+1);
        possivel(x+2,y-1);
        possivel(x-2,y+1);
		
	}
////////////////////////////////////////FIM CAVALO ////////////////////////////

////////////////////////////////////////REI ///////////////////////////////////
    if(peca[x][y]['peca'] === 'rei'){
        possivel(x-1,y);
        possivel(x,y-1);
        possivel(x-1,y-1);
        possivel(x+1,y);
        possivel(x,y+1);
        possivel(x+1,y+1);
        possivel(x-1,y+1);
        possivel(x+1,y-1);
	}
////////////////////////////////////////////FIM REI ////////////////////////////


//////////////////////////////////////TORRE ///////////////////////////////////
    if(peca[x][y]['peca'] === 'torre'){

        for(i=1;possivel(x-i,y);i++);
        for(i=1;possivel(x+i,y);i++);
        for(i=1;possivel(x,y-i);i++);
        for(i=1;possivel(x,y+i);i++);
    }
//////////////////////////////////////////FIM TORRE ////////////////////////////

//////////////////////////////////////BISPO ///////////////////////////////////
    if(peca[x][y]['peca'] === 'bispo'){

        for(i=1;possivel(x-i,y-i);i++);
        for(i=1;possivel(x+i,y+i);i++);
        for(i=1;possivel(x-i,y+i);i++);
        for(i=1;possivel(x+i,y-i);i++);
    
    }
//////////////////////////////////////////FIM BISPO ////////////////////////////

//////////////////////////////////////RAINHA ///////////////////////////////////
    if(peca[x][y]['peca'] === 'rainha'){

        for(i=1;possivel(x-i,y-i);i++);
        for(i=1;possivel(x+i,y+i);i++);
        for(i=1;possivel(x-i,y+i);i++);
        for(i=1;possivel(x+i,y-i);i++);
        for(i=1;possivel(x-i,y);i++);
        for(i=1;possivel(x+i,y);i++);
        for(i=1;possivel(x,y-i);i++);
        for(i=1;possivel(x,y+i);i++);

    }
////////////////////////////////////////FIM RAINHA ////////////////////////////



function possivel(px,py){
    if(px>0 && px <9 && py>0 && py <9 &&
        peca[px][py]['cor'] !== movimenta['selecionada']['cor']){
        document.getElementById('t'+(px)+(py)).style.backgroundColor = "#4285f4"; //muda cor de fundo
        possiveis[c] = "t"+(px)+(py); c++;

        if(!peca[px][py]['peca']){
            return true;
        }
    }else{
        return false;
    }
    
}

  return c;
}

function volta_fundo(){
    var cf;
    for(cf = 0; cf < possiveis.length; cf++){
    document.getElementById(possiveis[cf]).style.backgroundColor = "";
    }	
}

function verifica_possivel(x,y,c){
    var pode = 0;
    var cp;
    var div = "t"+x+y;

    for(cp = 1;cp < c; cp++){

        if(possiveis[cp] === div){
            pode++;
        }
        if(pode > 0){
            return 1;
        }
    }	
	
}