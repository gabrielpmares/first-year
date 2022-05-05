
window.onload = principal;

function principal() {
    /*mostraPosicaoInicial()*/
    moverPersonagem(3, 0, mapaAtual)
    imprimirMapa(mapaAtual)
}

let BUSH = 'Arbusto';
let PATH = 'Caminho';
let TREE = 'Arvore';
let ROCK = 'Rocha';
let WATER = 'Agua';
let GYM = 'Ginasio';
let START = 'Inicio';
let HOUSE = 'Casa';
let BOAT = 'Barco';
let WOOD = 'ChaoMadeira';
let SMAP = 'MudancaMapa';
let FLOOR = 'ChaoGinasio';
let STAND = 'Bancada';
let STAND2 = 'Bancada2';
let STAND3 = 'Bancada3';
let STD1 = 'BancadaDiagonal1';
let STD2 = 'BancadaDiagonal2';
let STD3 = 'BancadaDiagonal3';
let STD4 = 'BancadaDiagonal4';
let BATTLE = 'Batalha';
let SAIDA = "Exit";
let BATTLEMEWTWO = "BattleFinal"
let BATTLELEGENDARY = "BattleLengendary"
        
        let mapa1 = [
                    [WATER, WATER, WATER, WATER, WATER, WATER, WATER, BOAT, WATER],
                    [WATER, WATER, HOUSE, PATH, PATH, PATH, WOOD, WOOD, WATER],
                    [WATER, TREE, PATH, PATH, PATH, PATH, PATH, WATER, WATER],
                    [START, PATH, PATH, PATH, HOUSE, PATH, PATH, TREE, WATER],
                    [WATER, PATH, PATH, PATH, PATH, PATH, PATH, BUSH, WATER],
                    [WATER, ROCK, PATH, PATH, PATH, PATH, BUSH, PATH, SMAP],
                    [WATER, WATER, PATH, ROCK, WOOD, PATH, BUSH, WATER, WATER],
                    [WATER, BOAT, WATER, WATER, WOOD, WATER, WATER, WATER, WATER],
                    [WATER, WATER, WATER, WATER, BOAT, WATER, WATER, WATER, WATER]
                ];

        let mapa2 = [[TREE, TREE, BUSH, BUSH, BUSH, BUSH, PATH, BUSH, BUSH],
                     [TREE ,PATH, BUSH, TREE, TREE, TREE, TREE, TREE, PATH],
                     [TREE, PATH, TREE, TREE, PATH, BUSH, WATER, WATER, PATH],
                     [TREE, PATH, TREE, HOUSE, PATH, HOUSE, WATER, WATER, SMAP],
                     [PATH, PATH, PATH, PATH, PATH, PATH, WOOD, WATER, WATER],
                     [START, PATH, PATH, PATH, PATH, BUSH, WATER, WATER, WATER],
                     [PATH, WOOD, PATH, WOOD, BUSH, PATH, WOOD, BOAT, WATER],
                     [WATER, WOOD, WATER, WOOD, WATER, WATER, WATER, WATER, WATER],
                     [WATER, BOAT, WATER, WATER, WATER, WATER, WATER, WATER, WATER]]

        let mapa3 = [
                     [BUSH, PATH, PATH, PATH, PATH, BUSH, WATER, WATER, WATER],
                     [TREE, PATH, ROCK, BUSH, ROCK, PATH, PATH, PATH, PATH],
                     [PATH, BUSH, ROCK, PATH, TREE, PATH, ROCK, ROCK, PATH],
                     [PATH, ROCK, TREE, PATH, ROCK, BUSH, ROCK, BUSH, PATH],
                     [START, ROCK, PATH, PATH, ROCK, PATH, ROCK, PATH, TREE],
                     [PATH, ROCK, ROCK, BUSH, PATH, PATH, TREE, PATH, GYM],
                     [PATH, TREE, ROCK, PATH, WATER, WATER, WATER, WATER, WATER],
                     [PATH, PATH, ROCK, PATH, PATH, PATH, PATH, BUSH, WATER],
                     [TREE, PATH, BUSH, PATH, WATER, WATER, WATER, PATH, WATER]
        ];

        let mapa4 = [
                    [STD2, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STD1],
                    [STAND2, WOOD, WOOD, WATER, WATER, WATER, WOOD, WOOD, STAND2],
                    [STAND2, WOOD, WOOD, WATER, WATER, WATER, WOOD, WOOD, STAND2],
                    [WOOD, WOOD, WOOD, BATTLE, BATTLE, WATER, WOOD, WOOD, STAND2],
                    [WOOD, WOOD, WOOD, BATTLE, BATTLELEGENDARY, BATTLELEGENDARY, BATTLEMEWTWO, WOOD, STAND2],
                    [WOOD, WOOD, WOOD, BATTLE, BATTLE, WATER, WOOD, WOOD, STAND2],
                    [STAND2, WOOD, WOOD, WATER, WATER, WATER, WOOD, WOOD, STAND2],
                    [STAND2, SAIDA, WOOD, WATER, WATER, WATER, WOOD, WOOD, STAND2],
                    [STD4, STAND3, STAND3, STAND3, STAND3, STAND3, STAND3, STAND3, STD3]
        ];

        var img = new Image();
        
        let textures = {
            Agua: "imagens/water.png",
            Arbusto: "imagens/bush.png",
            Caminho: "imagens/path.png",
            Arvore: "imagens/tree.png",
            Rocha: "imagens/rock.png",
            Ginasio: "imagens/gym.png",
            Inicio: "imagens/path.png",
            Casa: "imagens/house.png",
            Barco: "imagens/boat.png",
            ChaoMadeira: "imagens/wood.png",
            MudancaMapa: "imagens/path.png",
            Bancada: "imagens/stand.png",
            Bancada2: "imagens/stand2.png",
            Bancada3: "imagens/stand3.png",
            BancadaDiagonal1: "imagens/standdia.png",
            BancadaDiagonal2: "imagens/standdia2.png",
            BancadaDiagonal3: "imagens/standdia3.png",
            BancadaDiagonal4: "imagens/standdia4.png",
            Batalha: "imagens/battle.png",
            Exit: "imagens/exit.png",
            BattleFinal: "imagens/battleMewtwo.png",
            BattleLengendary: "imagens/battleLendarios.png"


        };

        const Separacao = "--------------------------------------------------------------------"

        

        let mapaAtual = mapa1

        let posicao = {

            personagem: null,

        }

        function imprimirMapa(map) {
            let table = document.getElementById('mapa');
        
            if (table) {
                removerMapaAnterior();
                let table = document.createElement('table');
                table.setAttribute('id', 'mapa')
                // let tableBody = document.createElement("tbody");
        
                for (let i = 0; i < map.length; i++) {
                    let row = document.createElement("tr");
                    for (let j = 0; j < map[i].length; j++) {
                        let cel = document.createElement("td");
                        let img = document.createElement("img");
                        if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == PATH){
                            img.src = "imagens/path" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == SMAP){
                            img.src = "imagens/path" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BUSH){
                            img.src = "imagens/bush" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == WOOD){
                            img.src = "imagens/wood" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == START){
                            img.src = "imagens/path" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BATTLE){
                            img.src = "imagens/battle" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BATTLEMEWTWO){
                            img.src = "imagens/battle" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BATTLELEGENDARY){
                            img.src = "imagens/battle" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else{
                            img.src = textures[map[i][j]];
                            cel.appendChild(img);
                            row.appendChild(cel);
                        }
                    }
                    //adicionar esta Row a table para renderizar
                    table.appendChild(row);
                }
        
                // table.appendChild(tableBody);
                // put <table> in the <body>
                document.body.append(table);
        
            } else {
        
                let table = document.createElement('table');
                table.setAttribute('id', 'mapa')
                // let tableBody = document.createElement("tbody");
        
                for (let i = 0; i < map.length; i++) {
                    let row = document.createElement("tr");
                    for (let j = 0; j < map[i].length; j++) {
                        let cel = document.createElement("td");
                        let img = document.createElement("img");  
                        if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == PATH){
                            img.src = "imagens/path" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == SMAP){
                            img.src = "imagens/path" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BUSH){
                            img.src = "imagens/bush" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == START){
                            img.src = "imagens/path" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BATTLE){
                            img.src = "imagens/battle" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BATTLEMEWTWO){
                            img.src = "imagens/battle" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else if (i == posicao.personagem[0] && j == posicao.personagem[1] && posicao.personagem[2] == BATTLELEGENDARY){
                            img.src = "imagens/battle" + localStorage.getItem("imagemJogador");
                            cel.appendChild(img)
                            row.appendChild(cel)
                        }
                        else{
                            img.src = textures[map[i][j]];
                            cel.appendChild(img);
                            row.appendChild(cel);
                        }
                    }
                    //adicionar esta Row a table para renderizar
                    table.appendChild(row);
                }
        
                // table.appendChild(tableBody);
                // put <table> in the <body>
                document.body.append(table);
        
            }
        
        }

        let novoMapa = null

        function removerMapaAnterior() {
            mapa = document.getElementById('mapa');
            mapa.remove();
        }
        

        function mostraPosicaoInicial() {

        posicao.personagem = [3, 1, PATH]

        return console.log(`A personagem está na posição ${[posicao.personagem[0], posicao.personagem[1]]} : ${START}` )
        }

        function walkable(str) {
            lista_walkables = ['Caminho', 'Arbusto', 'ChaoMadeira', 'MudancaMapa', 'Inicio', 'Ginasio', "Batalha", "Exit", "BattleFinal", "BattleLengendary"]
            if (lista_walkables.includes(str)) {
                return 1
            } else {
                return 0
            }
        }

        function spawnPokemon(str) {
            lista_spawnable = ['Arbusto']
            if (lista_spawnable.includes(str)) {
                return 1
            } else {
                return 0
            }
        }

        function switchable(str) {
            lista_switchable = ['Ginasio', 'MudancaMapa']
            if (lista_switchable.includes(str)) {
                return 1
            } else {
                return 0
            }
        }

        function gobackable(str){
            lista_backable = ["Exit"]
            if (lista_backable.includes(str)){
                return 1
            } else {
                return 0
            }
        }
        const TAMANHO_MAPA = 9;

        function moverPersonagem(y, x, mapa) {
            if (x >= 9 || y >= 9) {
                return console.log('Fora do mapa')
            }
            if (x < 0 || y < 0) {
                return console.log('Fora do mapa')
            }
            let posicaoAtual = mapa[y][x];
            if (walkable(posicaoAtual) == 0) {
                console.log(`O seu personagem atingiu um obstáculo, neste caso atingiu ${posicaoAtual}, tente outra posição`)
                return Separacao
            }
            if (spawnPokemon(posicaoAtual) == 1) {
                console.log('Um pokémon selvagem apareceu!')
            }
            if (switchable(posicaoAtual) == 1) {
                switchMap();
                console.log('Você passou de mapa.')
                return Separacao
            }
            if (gobackable(posicaoAtual) == 1) {
                goBack();
                console.log("Você foi para trás.")
                return Separacao
            }
            posicao.personagem = [y, x, mapa[y][x]]
            console.log(`O seu personagem está na posição ${y},${x} : ${mapa[y][x]}`)
            imprimirMapa(mapa)

            if (posicao.personagem[2] == BUSH){
                if (Math.random() <= 0.7){
                    Batalhar("BUSH");
                }
                else if(Math.random() <=0.9 && Math.random() > 0.7){
                    Batalhar("HARD")
                }
            }
            if (posicao.personagem[2] == BATTLELEGENDARY && localStorage.getItem("win") == 1){
                window.alert("O jogo acabou!");
                window.location.href = "estatisticas.html";
            }
            if (posicao.personagem[2] == BATTLELEGENDARY){
                if (Math.random() <= 0.9){
                    Batalhar("LEGENDARY");
                }
            }

            if (posicao.personagem[2] == BATTLEMEWTWO){
                Batalhar("MEWTWO");
            }

            if (posicao.personagem[2] == WOOD && localStorage.getItem("win") == 1){
                window.alert("O jogo acabou!");
                window.location.href = "estatisticas.html";
            }

        }

        let listaMapas = [mapa1, mapa2, mapa3, mapa4]

        function switchMap(){
            x = 0
            novoMapa = listaMapas[(listaMapas.indexOf(mapaAtual))+1]
            mapaAtual = novoMapa
            posicao.personagem = [4, x, mapaAtual[4][x]]
            imprimirMapa(novoMapa)
            if (mapaAtual == mapa2){
                document.getElementById("lore").innerHTML = "Minha nossa, esta pequena criatura está a defender-me de outros inimigos que encontro<br> pelo caminho, talvez ele vai ajudar-me a encontrar a saída dessa ilha.<br> Numa das casas está escrito 'pokémon' com uma foto de um desses pequenos animais,<br> acho que deve ser o nome da raça dessas criaturas... pokémon. O que é aquilo, um bosque? <br>Aparentemente é o único caminho possível para seguir em frente... <br>Espero que o meu novo amigo pokémon me ajude!"
                document.getElementById("loreTitle").innerHTML="Lore"
            }
            if (mapaAtual == mapa3){
                document.getElementById("lore").innerHTML = "Parece-me que existem vários animais exóticos e diferentes nessa ilha, <br> esses tais pokémons são muitos, será que já encontrei todos? Vejo uma construção<br> diferente ao longe, porém está depois de um imenso labirinto. Terei que encontrar alguma<br> forma de chegar até lá, talvez eu encontre alguém para me ajudar a sair desta ilha."
                document.getElementById("loreTitle").innerHTML="Lore"
            }
            if (mapaAtual == mapa4){
                document.getElementById("lore").innerHTML = "É uma espécie de ginásio, e possui vários monstros a minha espera no centro.<br>Há uma pequena placa na entrada escrita:<br> 'Pode apenas sair da ilha de Pokechill após derrotar os Reis da ilha.' Se eu não conseguir<br> derrotá-los agora, <br>vou tentar treinar o meu pokémon até ter força o suficiente para derrotá-los."
                document.getElementById("loreTitle").innerHTML="Lore"
            }
        }

        function goBack(){
            x = 0
            novoMapa = listaMapas[(listaMapas.indexOf(mapaAtual))-1]
            mapaAtual = novoMapa
            posicao.personagem = [4, x, mapaAtual[4][x]]
            imprimirMapa(novoMapa)
        }

        function imprimeMapa(mapa){
            for (let y = 0; y < mapa.length; y++){
                console.log(mapa[y])
            }
            return Separacao
        }

    //y-1 x 
    //y-1 x-1
    //y x-1
    //y+1 x
    //y+1 x+1
    //y x+1
    //y-1 x+1
    //y+1 x-1

        function mostrarLore(){
            if (mapaAtual[posicao.personagem[0]-1][posicao.personagem[1]] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]-1][posicao.personagem[1]-1] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]][posicao.personagem[1]-1] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]+1][posicao.personagem[1]] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]+1][posicao.personagem[1]+1] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]][posicao.personagem[1]+1] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]-1][posicao.personagem[1]+1] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]+1][posicao.personagem[1]-1] == HOUSE){
                document.getElementById("loreTitle").innerHTML="Casa"
                document.getElementById("lore").innerHTML="Uma casa colorida que aparenta ser relaxante."
            }
            if (mapaAtual[posicao.personagem[0]-1][posicao.personagem[1]] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]-1][posicao.personagem[1]-1] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]][posicao.personagem[1]-1] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]+1][posicao.personagem[1]] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]+1][posicao.personagem[1]+1] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]][posicao.personagem[1]+1] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]-1][posicao.personagem[1]+1] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
            if (mapaAtual[posicao.personagem[0]+1][posicao.personagem[1]-1] == ROCK){
                document.getElementById("loreTitle").innerHTML="Rocha"
                document.getElementById("lore").innerHTML="Uma rocha grande no meio," + "\n" + "com várias outras rochas soltas à sua volta."
            }
        }
        
        localStorage.setItem("passos", 0);

        function moverParacima(){
            moverPersonagem(Number(posicao.personagem[0]-1), Number(posicao.personagem[1]), mapaAtual)
            localStorage.setItem("passos", Number(localStorage.getItem("passos"))+1)
        }

        function moverParabaixo(){
            moverPersonagem(Number(posicao.personagem[0]+1), Number(posicao.personagem[1]), mapaAtual)
            localStorage.setItem("passos", Number(localStorage.getItem("passos"))+1)
        }

        function moverParaEsquerda(){
            moverPersonagem(Number(posicao.personagem[0]), Number(posicao.personagem[1]-1), mapaAtual)
            localStorage.setItem("passos", Number(localStorage.getItem("passos"))+1)
        }

        function moverParaDireita(){
            moverPersonagem(Number(posicao.personagem[0]), Number(posicao.personagem[1]+1), mapaAtual)
            localStorage.setItem("passos", Number(localStorage.getItem("passos"))+1)
        }

document.onkeydown = function(e) {
    if(e.which == 87) {
        moverParacima();
    }
    if(e.which == 83) {
        moverParabaixo();
    }
    if(e.which == 65) {
        moverParaEsquerda();
    }
    if(e.which == 68) {
        moverParaDireita();
    }
    if(e.which == 70) {
        mostrarLore();
    }
}

//TEMPO


const SPAN_TEMPO_JOGO = "spanTempoJogo";
let jogo = {
    inicio: null,
  };
let temporizadorTempoJogo = "spanTempoJogo";
jogo.inicio = Math.floor(Date.now() / 1000);
function mostraTempoJogo() {
  let agora = Math.floor(Date.now() / 1000) - jogo.inicio;
  document.getElementById(SPAN_TEMPO_JOGO).textContent = agora;
  localStorage.setItem("tempoJogado", agora);
  return agora
}

temporizadorTempoJogo = setInterval(mostraTempoJogo, 1000);




// COMBATE <------------------------------------------------->

let experiencia_pokemon = 0;
let nivel_pokemon = 0;
let dadosCharmander = [250, 90, 60, 55, 0]
let dadosSquirtle = [252, 70, 60, 55, 0];
let dadosBulbasaur = [254, 70, 70, 80, 0];
let dadosCharizard = [360, 95, 80, 75, 70];
let dadosBlastoise = [362, 90, 80, 75, 80];
let dadosVenusaur = [364, 90, 90, 100, 85];


localStorage.setItem("nivel", nivel_pokemon);
localStorage.setItem("exp", experiencia_pokemon);
localStorage.setItem("pokemonsDerrotados", 0);
localStorage.setItem("GinasiosDerrotados", 0);
localStorage.setItem("win", 0);

localStorage["dadosCharmander"] = JSON.stringify(dadosCharmander);
localStorage["dadosSquirtle"] = JSON.stringify(dadosSquirtle);
localStorage["dadosBulbasaur"] = JSON.stringify(dadosBulbasaur);
localStorage["dadosCharizard"] = JSON.stringify(dadosCharizard);
localStorage["dadosBlastoise"] = JSON.stringify(dadosBlastoise);
localStorage["dadosVenusaur"] = JSON.stringify(dadosVenusaur);




function Batalhar(lugar){
    localStorage.setItem("lugar", lugar);
    window.open("combate.html","popup","width=1375,height=705,scrollbars=0,resizable=no");
}
