
const asbrinca = 1
let cor = 0 //brancas


let sfundo;
let sataque;
let imgfundo;


let imgrei;
let imgrainha;
let imgpeao;
let imgbispo;
let imgcavalo;
let imgtorre;

let imgbrei;
let imgbrainha;
let imgbpeao;
let imgbbispo;
let imgbcavalo;
let imgbtorre;

let posicoes= [];
let selecao 
let gquadrados
let gpecas
let gtelas
let gcasaslivres;
let gataques;
let board =[64];
let lpecas = [];
let jsonpecas = []


function preload()
{
	jsonpecas = loadJSON ("pecas.json")
	imgrei = loadImage ("rei.png")
	imgcavalo = loadImage ("cavalo.png")
	imgpeao = loadImage("peao.png")
	imgrainha = loadImage("rainha.png")
	imgbispo = loadImage("bispo.png")
	imgtorre = loadImage("torre.png")
	
	imgbrei = loadImage ("brei.png")
	imgbcavalo = loadImage ("bcavalo.png")
	imgbpeao = loadImage("bpeao.png")
	imgbrainha = loadImage("brainha.png")
	imgbbispo = loadImage("bbispo.png")
	imgbtorre = loadImage("btorre.png")
	
	
	gtelas = new Group()
	gquadrados = new Group()
	gpecas = new Group()
	gcasaslivres = new Group()
	gataques = new Group()
	
	imgfundo = loadImage("fundo.png")
	sfundo = new Sprite()
	sfundo.overlap(allSprites)
	sfundo.addImage(imgfundo)


//MATRIZ DE POSICIONAMENTO LOGICO	
mposicoes = [
			{x:0, y: 0},
			
			{x:0, y: 1},
			{x:1, y: 0},
			
			{x:0, y: 2},
			{x:1, y: 1},
			{x:2, y: 0},
			
			{x:0, y: 3},
			{x:1, y: 2},
			{x:2, y: 1},
			{x:3, y: 0},
			
			{x:0, y: 4},
			{x:1, y: 3},
			{x:2, y: 2},
			{x:3, y: 1},
			{x:4, y: 0},
			
			{x:0, y: 5},
			{x:1, y: 4},
			{x:2, y: 3},
			{x:3, y: 2},
			{x:4, y: 1},
			{x:5, y: 0},
			
			{x:0, y: 6},
			{x:1, y: 5},
			{x:2, y: 4},
			{x:3, y: 3},
			{x:4, y: 2},
			{x:5, y: 1},
			{x:6, y: 0},
			
			{x:0, y: 7},
			{x:1, y: 6},
			{x:2, y: 5},
			{x:3, y: 4},
			{x:4, y: 3},
			{x:5, y: 2},
			{x:6, y: 1},
			{x:7, y: 0},
			
			{x:1, y: 7},
			{x:2, y: 6},
			{x:3, y: 5},
			{x:4, y: 4},
			{x:5, y: 3},
			{x:6, y: 2},
			{x:7, y: 1},
			
			{x:2, y: 7},
			{x:3, y: 6},
			{x:4, y: 5},
			{x:5, y: 4},
			{x:6, y: 3},
			{x:7, y: 2},
			
			{x:3, y: 7},
			{x:4, y: 6},
			{x:5, y: 5},
			{x:6, y: 4},
			{x:7, y: 3},
			
			{x:4, y: 7},
			{x:5, y: 6},
			{x:6, y: 5},
			{x:7, y: 4},
			
			{x:5, y: 7},
			{x:6, y: 6},
			{x:7, y: 5},

			{x:6, y: 6},
			{x:7, y: 7},
			
			{x:7, y: 7},
];
	
//MATRIZ DE POSICIONAMENTO NA TELA
posicoes = [
  { x: 305, y: 570 },// 1 [0,0]
  { x: 270, y: 515 },// 2[0,1]
  { x: 369, y: 546 },// 3[1,0]
  { x: 233, y: 465 },// 4[0,2]
  { x: 336, y: 485 },// 5[1,1]
  { x: 440, y: 516 },// 6[2,0]
  { x: 208, y: 411 },// 7[0,3]
  { x: 308, y: 426 },//8 [1,2]
  { x: 404, y: 460 },
  { x: 505, y: 484 },
  { x: 175, y: 361 },
  { x: 268, y: 381 },
  { x: 361, y: 404 },
  { x: 462, y: 432 },
  { x: 564, y: 450 },
  { x: 144, y: 315 },
  { x: 240, y: 335 },
  { x: 336, y: 358 },
  { x: 437, y: 378 },
  { x: 532, y: 400 },
  { x: 632, y: 420 },
  { x: 119, y: 266 },
  { x: 211, y: 288 },
  { x: 304, y: 307 },
  { x: 394, y: 326 },
  { x: 492, y: 346 },
  { x: 590, y: 366 },
  { x: 689, y: 391 },
  { x: 91, y: 223 },
  { x: 182, y: 241 },
  { x: 271, y: 262 },
  { x: 363, y: 283 },
  { x: 457, y: 297 },
  { x: 552, y: 318 },
  { x: 650, y: 338 },
  { x: 752, y: 362 },
  { x: 154, y: 201 },
  { x: 246, y: 217 },
  { x: 333, y: 236 },
  { x: 423, y: 255 },
  { x: 520, y: 274 },
  { x: 612, y: 295 },
  { x: 708, y: 312 },
  { x: 212, y: 172 },
  { x: 299, y: 194 },
  { x: 390, y: 214 },
  { x: 481, y: 228 },
  { x: 571, y: 247 },
  { x: 671, y: 268 },
  { x: 272, y: 152 },
  { x: 359, y: 171 },
  { x: 450, y: 185 },
  { x: 541, y: 203 },
  { x: 634, y: 223 },
  { x: 330, y: 127 },
  { x: 418, y: 145 },
  { x: 503, y: 163 },
  { x: 595, y: 182 },
  { x: 389, y: 106 },
  { x: 473, y: 123 },
  { x: 563, y: 140 },
  { x: 442, y: 84 },
  { x: 531, y: 99 },
  { x: 499, y: 61 },
  ];	
  
  
}


function criapeca ( nome, img, posicao)
{	
	
		
	//CRIA UMA PEÇA PARA TESTES NA POSIÇÃO 8, ANDA 1 CASA, PARA N, NO, NE E SUL	
	peca = new Sprite (0,0,40)
	peca.overlap (allSprites)//ELE NAO SOFRE  COLISOES
	peca.posicao = posicao //QUAL POSIÇÃO ----ORDINAL----
	peca.dist = 1//QUANTAS CASA ANDA
	
	//se for maior que posicao 44 faz movimentos para o sul
	if (posicao < 44)
	{
		peca.movimentos = ["N","NO","NE"]//movimentos permitidos por essa peça	
		//peca branca
		peca.cor = 0
	}else
	{
		peca.movimentos = ["S","SO","SE"]
		//peca preta
		peca.cor = 1	
	}
	peca.nome = nome //nome da peça
	peca.addImage (img) // adiciona o buffer da imagem
	
	peca.x = posicoes[peca.posicao].x //Plota na tela com ajuda da matriz de posicionamento na tela
	peca.y = posicoes[peca.posicao].y
	gpecas.add (peca)//adiciona ela no grupo de peças
	board[posicao]= {"nome":nome, "posicao":posicao}
	//gera dados para json peças
	//lpecas.push({"nome":nome,"pinicial":posicao,"img":nome+".png","movimentos":["N","NO","NE"], "atributos":[10,10,10,10]})
	return peca
}

function btn ()
{
	let item = sel.value();	
	
}


//recebe os dados do php
//apresenta na tela o status
async function getText() {
  let file = "cerebro.php?a=1"
  let myObject = await fetch(file);
  let myText = await myObject.text();
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("status").innerHTML = time + " - " + myText
}


function setup (){
	
	createCanvas (849,721)
	
	//roda getText a cada segundo
	setInterval(getText, 1000);	
	
	noStroke() 
	
	sel = createSelect();
  	sel.position(10, 10);
 	sel.option('Brancas');
  	sel.option('Negras');
  	sel.changed(btn);

	
	//plota fundo
	sfundo.x = window.width/2
	sfundo.y= window.height/2
	
	//zera o tabuleiro
	for(let i = 0; i<64; i++)
	{
		board[i]= {"nome":"vazio", "posicao":i}	
	}
	/*
	for (ps in jsonpecas)
	{
		console.log (jsonpecas[ps].nome)
		
	}*/	
	
	criapeca ("brei", imgbrei,63)// deixa essa peça no buffer de selecao
	criapeca ("bcavalo", imgbcavalo,62)
	criapeca ("bcavalo2", imgbcavalo,61)
	
	criapeca ("bbispo", imgbbispo,60)
	criapeca ("brainha",imgbrainha,59)
	criapeca ("bbispo", imgbbispo,58)
	
	criapeca ("bpeao", imgbpeao, 57)
	criapeca ("btorre", imgbtorre, 56)
	criapeca ("btorre", imgbtorre, 55)
	criapeca ("bpeao", imgbpeao, 54)
	
	criapeca ("bpeao", imgbpeao, 53)
	criapeca ("bpeao", imgbpeao, 52)
	criapeca ("bpeao", imgbpeao, 51)
	criapeca ("bpeao", imgbpeao, 50)
	criapeca ("bpeao", imgbpeao, 49)
	
	criapeca ("bPeao", imgbpeao, 45)
	criapeca ("bPeao",imgbpeao, 46)
	
	
	criapeca ("rei", imgrei,0)// deixa essa peça no buffer de selecao
	criapeca ("cavalo", imgcavalo,1)
	criapeca ("cavalo2", imgcavalo,2)
	
	criapeca ("bispo", imgbispo,3)
	criapeca ("rainha",imgrainha,4)
	criapeca ("bispo", imgbispo,5)
	
	criapeca ("peao", imgpeao, 6)
	criapeca ("torre", imgtorre, 7)
	criapeca ("torre", imgtorre, 8)
	criapeca ("peao", imgpeao, 9)
	
	criapeca ("peao", imgpeao, 10)
	criapeca ("peao", imgpeao, 11)
	criapeca ("peao", imgpeao, 12)
	criapeca ("peao", imgpeao, 13)
	criapeca ("peao", imgpeao, 14)
	
	criapeca ("peao", imgpeao, 17)
	selecao = criapeca ("peao", imgpeao, 18)
	

	around(selecao) //plota caminhos validos
	//console.log (JSON.stringify(board))	
	//console.log (JSON.stringify(lpecas))
}
	
	function draw ()
	{	
		allSprites.draw()
		if (!asbrinca)
		{
		for (tela of gtelas)
		{
			if (tela.nome == "Ataque")
			{
				textSize(40)
				fill (10)
		
				text ("Escolha a habilidade",width/2-190,250)
				textSize(30)
				text ("ataque: 8\ndefesa: 8", width/2-190,300)
				
				textSize(30)
				text ("inteligencia: 8\nsabedoria: 8", width/2,300)
							
			}
			if (tela.nome == "Pergunta")
			{
				textSize(40)
				fill (10)
				
				text ("Perguntas",width/2-190,250)
				textSize(30)
				text ("Qual a capital do Brasil?", width/2-190,300)
				
				textSize(30)
				text ("\nA) Brasília\nB) Paraná", width/2,300)			
				
			
			}
			if (tela.nome == "Erro")
			{
				textSize(40)
				fill (10)
				
				text ("Errou",width/2-190,250)
				textSize(30)
				text ("A resposta correta era :", width/2-190,300)
				
				textSize(30)
				text ("\n\nA) Brasília", width/2,300)							
			}
		}
		}
	}
	
function mousePressed ()
{
	//renderiza janelas:
	
	for  (tela of gtelas)
	{
		if (tela.mouse.pressed())
		{
			if (tela.nome == "Ataque")
			{
				if (!asbrinca)
				{
					let bogus = new Sprite (590,600);
					bogus.addImage(imgbrei)
					bogus.overlap(allSprites)				
				}
				
				gtelas.removeAll()
			}
			if (tela.nome == "Erro")
			{
				tela.nome = "Ataque"
			}
			if (tela.nome == "Pergunta")
			{
				tela.nome = "Erro"
			}
			
		}			
	}
	//verifica se 
	for (casalivre of gcasaslivres)
	{
		if (casalivre.mouse.pressed())
		{
			selecao.x = casalivre.x
			selecao.y = casalivre.y
			selecao.posicao = casalivre.posicao
			around (selecao)
		}
		
	}
	for(pecaselecionada of gpecas)
	{
		if (pecaselecionada.mouse.pressed())
		{
			selecao = pecaselecionada
			around(selecao)
			
		}
	}
	for (ataque of gataques)
	{
		if (ataque.mouse.pressed())
		{
			for (let peca of gpecas)
			{	
				if (peca.posicao == ataque.posicao)
				{
					//executa ataque !
					peca.remove()
					around(selecao)
					if (!asbrinca)
					{
						tela = new Sprite (width/2,height/2,500,300)
						tela.overlap (allSprites)
						tela.shapeColor = color (120,100,100)
						tela.nome = "Pergunta"
						gtelas.add(tela)					
					}
				}
			}	
			
		}
		
	}
	
}
	
	
//ESSA FUNÇÃO MOSTRA AS POSIÇOES VALIDAS AO REDOR DA PEÇA SELECIONADA MOSTRANDO A DISTANCIA TAMBEM
function around (peca)
{
	//PRA TRABALHAR A DISTANCIA, FAZ UM FOR PARA CADA DIREÇÃO 
	//todo: COM O VALOR MAXIMO DE DISTANCIA E VOLTA VERIFICANDO SE TIVER OBSTACULO PARA
	
	gcasaslivres.removeAll() //limpa sprites de movimentos validos
	gataques.removeAll() //Limpa possiveis ataques
		
	let posicao = peca.posicao
	let poslivre = 0
	
	let bemovlivre=[]
	let beataque=[]
	
	
	for (mov of peca.movimentos)
	{	
		let destino = 0
		//PARA NORTE
		if (mov == "N")
		{
			let x = mposicoes[posicao].x + 1 //posiciona o vetor ao norte 
			let y = mposicoes[posicao].y + 1
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao ao norte
						destino = posicoes[p]
						poslivre = p		
					}
					p++
				}	
			}
		}
		
		//PARA NOROESTE			
		if (mov == "NO")
		{
			let x = mposicoes[posicao].x //posiciona o vetor ao norte 
			let y = mposicoes[posicao].y + 1
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao ao norte
						destino = posicoes[p]			
						poslivre = p	
					}
					p++
				}	
			}
		}
		
		//PARA NORDESTE	
		if (mov == "NE")
		{
			let x = mposicoes[posicao].x + 1//posiciona o vetor
			let y = mposicoes[posicao].y 
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao 
						destino = posicoes[p]
						poslivre = p				
					}
					p++
				}	
			}
		}	
		
		//PARA SUL	
		if (mov == "S")
		{
			let x = mposicoes[posicao].x - 1//posiciona o vetor ao sul
			let y = mposicoes[posicao].y - 1
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao
						destino = posicoes[p]
						poslivre = p
					}
					p++
				}	
			}
		}
		
				//PARA SUDOESTE	
		if (mov == "SO")
		{
			let x = mposicoes[posicao].x - 1//posiciona o vetor
			let y = mposicoes[posicao].y 
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao
						destino = posicoes[p]
						poslivre = p
					}
					p++
				}	
			}
		}
	
			//PARA SUDESTE	
		if (mov == "SE")
		{
			let x = mposicoes[posicao].x//posiciona o vetor
			let y = mposicoes[posicao].y - 1 
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao
						destino = posicoes[p]
						poslivre = p
					}
					p++
				}	
			}
		}
		
		//PARA LESTE	
		if (mov == "L")
		{
			let x = mposicoes[posicao].x + 1//posiciona o vetor
			let y = mposicoes[posicao].y - 1
			let p = 0
			//verifica se esta dentro dos limites
			if (x<=7 && y <= 7 && x>=0 && y>=0) 
			{
				//mapeia as posicoes
				for (let mp of mposicoes)
				{
					//encontra dentro das posicoes 
					if (mp.x == x && mp.y == y)
					{
						//encontrou a posicao
						destino = posicoes[p] //armazena num buffer
						poslivre = p //numero da posição dela no tabuleiro ORDINAL
					}
					p++
				}	
			}
		}
		//todo: transformar em uma func
		let ataque = 0
		if (destino)
		{
			//verifica se o destino esta preenchido por uma peça
			for (mpeca of gpecas)
			{
				if (mpeca.posicao == poslivre){
					
					if (selecao.cor != mpeca.cor){
					 	ataque = destino
					}
					destino = 0		
				}
				
			}	
			
		}		
			
		
		//plota as casas ao redor	
		if (destino)
		{
			bemovlivre.push (poslivre)
			
			//cria um sprite na posição encontrada como valida
			let pode = new Sprite (destino.x, destino.y, 30)
			//muda cor da shape
			pode.shapeColor = color (10,90,10,70)
			//deliga colisoes
			pode.overlap(allSprites)
			//coloca posição ORDINAL dessa casa	
			pode.posicao = poslivre
			// armazena no grupo de sprites
			gcasaslivres.add(pode)
		}else
		{
			if (ataque)
			{						
				beataque.push(poslivre)
				//cria um sprite na posição encontrada como valida
				let pode = new Sprite (ataque.x, ataque.y, 40)
				//muda cor da shape
				pode.shapeColor = color (90,10,10,70)
				//deliga colisoes
				pode.overlap(allSprites)
				//coloca posição ORDINAL dessa casa	
				pode.posicao = poslivre
				// armazena no grupo de ataques
				gataques.add(pode)				
			}	
		}
	}
	
	console.log ("ataques : "+ beataque)
	console.log ("cerebro.php: OK")
	console.log ("\nmovimentos livres :"+ bemovlivre)
	console.log ("cerebro.php: OK")
}
	

	
	
	/*
0N = X+1, Y+1
1NO = X ,Y +1
2O = X-1, Y+1
3SO = X-1, Y
4S = X- 1,Y -1
5SE= X,Y -1
6L = X+1 ,Y -1
7NE =X +1, Y

	*/
	
	
	
	 
 /*
	if (quem.x == noque.x && quem.y == noque.y){
		
		//console.log ("a peça " + quem.nome + " esta na casa " + noque.nome)	
		noque.block = true
		quem.onde = noque

	}else{
		if (quem == selecao){
			
			if (!noque.block){
				
		}
	}	
		
	}*/
	
	