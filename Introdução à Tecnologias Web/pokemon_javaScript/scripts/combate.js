$(window).ready(function() {
    IniciaBatalha(localStorage.getItem("lugar"))
  });

let pkmEscolhido = [

    ['Charmander', 'imagens/charmander.png', JSON.parse(localStorage["dadosCharmander"])[0],[
        ['Flamethrower', 'fire', JSON.parse(localStorage["dadosCharmander"])[1], 0.95],
        ['Dragon Claw', 'dragon', JSON.parse(localStorage["dadosCharmander"])[2], 0.95],
        ['Air slash', 'fly', JSON.parse(localStorage["dadosCharmander"])[3], 0.85],
        ['Cry', 'fire', JSON.parse(localStorage["dadosCharmander"])[4], 0.95]
    ]],

    ['Squirtle','imagens/squirtle.png', JSON.parse(localStorage["dadosSquirtle"])[0],[
        ['Surf','water',JSON.parse(localStorage["dadosSquirtle"])[1],0.95],
        ['Crunch','normal',JSON.parse(localStorage["dadosSquirtle"])[2],0.95],
        ['Ice Punch','ice',JSON.parse(localStorage["dadosSquirtle"])[3],0.95],
        ['Cry', 'water', JSON.parse(localStorage["dadosSquirtle"])[4], 0.95]
    ]],

    ['Bulbasaur','imagens/bulbasaur.png',JSON.parse(localStorage["dadosBulbasaur"])[0], [
        ['Petal Blizzard','grass', JSON.parse(localStorage["dadosBulbasaur"])[1], 0.95],
        ['Sludge Bomb','poison', JSON.parse(localStorage["dadosBulbasaur"])[2], 0.95],
        ['Earthquake','ground', JSON.parse(localStorage["dadosBulbasaur"])[3],0.95],
        ['Cry', 'ground',JSON.parse(localStorage["dadosBulbasaur"])[4], 0.95]
    ]],

    ['Charizard', 'imagens/charizard.png', JSON.parse(localStorage["dadosCharizard"])[0],[
        ['Flamethrower', 'fire',JSON.parse(localStorage["dadosCharizard"])[1], 0.95],
        ['Dragon Claw', 'dragon',JSON.parse(localStorage["dadosCharizard"])[2], 0.95],
        ['Air slash', 'fly',JSON.parse(localStorage["dadosCharizard"])[3], 0.85],
        ['Slash', 'normal',JSON.parse(localStorage["dadosCharizard"])[4], 0.85]
    ]],

    ['Blastoise','imagens/blastoise.png',JSON.parse(localStorage["dadosBlastoise"])[0],[
        ['Surf','water',JSON.parse(localStorage["dadosBlastoise"])[1],0.95],
        ['Crunch','normal',JSON.parse(localStorage["dadosBlastoise"])[2],0.95],
        ['Ice Punch','ice',JSON.parse(localStorage["dadosBlastoise"])[3],0.95],
        ['Flash cannon', 'steel',JSON.parse(localStorage["dadosBlastoise"])[4], 0.95]
    ]],

    ['Venusaur','imagens/venusaur-f.png',JSON.parse(localStorage["dadosVenusaur"])[0],[
        ['Petal Blizzard','grass',JSON.parse(localStorage["dadosVenusaur"])[1], 0.95],
        ['Sludge Bomb','poison',JSON.parse(localStorage["dadosVenusaur"])[2], 0.95],
        ['Earthquake','ground',JSON.parse(localStorage["dadosVenusaur"])[3],0.95],
        ['Body Slam', 'normal',JSON.parse(localStorage["dadosVenusaur"])[4], 0.95]
    ]],
];


let pkmListEasy = [

    ['Charmander', 'imagens/charmander.png', 250,[
        ['Flamethrower', 'fire', 90, 0.95],
        ['Dragon Claw', 'dragon', 60, 0.95],
        ['Air slash', 'fly', 55, 0.85],
        ['Cry', 'fire', 0, 0.95]
    ]],

    ['Squirtle','imagens/squirtle.png', 252,[
        ['Surf','water',70,0.95],
        ['Crunch','normal',60,0.95],
        ['Ice Punch','ice',55,0.95],
        ['Cry', 'water', 0, 0.95]
    ]],

    ['Bulbasaur','imagens/bulbasaur.png',254, [
        ['Petal Blizzard','grass', 70, 0.95],
        ['Sludge Bomb','poison', 70, 0.95],
        ['Earthquake','ground', 80,0.95],
        ['Cry', 'ground', 0, 0.95]
    ]],
    
    ['Caterpie','imagens/caterpie.png',200, [
        ['String Shot','grass', 60, 0.95],
        ['Tackle','normal', 50, 0.95],
        ['Bug Bite','bug', 80,0.95],
        ['Cry', 'ground', 0, 0.95]
    ]],

    ['Rattata','imagens/rattata.png', 253, [
        ['Bite','dark', 60, 1],
        ['Tackle','normal', 40, 1],
        ['Crunch','dark', 80,1],
        ['Cry', 'ground', 0, 0.95]
    ]],

    ['Pidgey','imagens/pidgey.png', 251, [
        ['Wing Attack','fly', 60, 1],
        ['Tackle','normal', 40, 1],
        ['Razor Wind','normal', 80,1],
        ['Fly', 'fly', 90, 0.95]
    ]],

    ['Ekans','imagens/ekans.png', 288, [
        ['Poison Sting','poison', 50, 1],
        ['Poison Jab','poison', 80, 1],
        ['Wrap','normal', 45,1],
        ['Dark Pulse', 'dark', 80, 0.95]
    ]],

    ['Vulpix','imagens/vulpix.png', 299, [
        ['Ember','fire', 40, 1],
        ['Incinerate','fire', 60, 1],
        ['Tail Whip','normal', 10,1],
        ['Fire Spin', 'fire', 35, 0.85]
    ]],

    ['Zubat','imagens/zubat.png', 245, [
        ['Air Cutter','fly', 60, 0.95],
        ['Bite','poison', 80, 1],
        ['Wrap','normal', 45,1],
        ['Dark Pulse', 'dark', 80, 0.95]
    ]],

    ['Mankey','imagens/mankey.png', 305, [
        ['Karate Chop','fighting', 50, 1],
        ['Low Kick','fighting', 80, 1],
        ['Headbutt','normal', 70,1],
        ['Focus Energy', 'normal', 50, 0.95]
    ]],
];

let pkmListHard = [

    ['Pikachu','imagens/pikachu.png',300, [
        ['Thunder Shock','electric', 90, 0.95],
        ['Body Slam','normal', 60, 0.95],
        ['Thunder Wave','electric', 120,0.95],
        ['Tail Whip', 'normal', 40, 0.95]
    ]],

    ['Machamp','imagens/machamp.png', 400, [
        ['Low Kick','fighting', 70, 1],
        ['Mega Punch','normal', 80, 0.85],
        ['Fire Punch','fire', 70,1],
        ['Giga Impact', 'normal', 150, 0.50]
    ]],

    ['Charizard', 'imagens/charizard.png', 360,[
        ['Flamethrower', 'fire',95, 0.95],
        ['Dragon Claw', 'dragon', 80, 0.95],
        ['Air slash', 'fly', 75, 0.85],
        ['Slash', 'normal', 70, 0.85]
    ]],

    ['Blastoise','imagens/blastoise.png', 362,[
        ['Surf','water',90,0.95],
        ['Crunch','normal',80,0.95],
        ['Ice Punch','ice',75,0.95],
        ['Flash cannon', 'steel', 80, 0.95]
    ]],

    ['Venusaur','imagens/venusaur-f.png', 364,[
        ['Petal Blizzard','grass', 90, 0.95],
        ['Sludge Bomb','poison', 90, 0.95],
        ['Earthquake','ground', 100,0.95],
        ['Body Slam', 'normal', 85, 0.95]
    ]],

    ['Gengar','imagens/gengar.png', 400, [
        ['Shadow Punch','ghost', 60, 1],
        ['Dream Eater','psych', 100, 1],
        ['Shadow Ball','ghost', 80,1],
        ['Dark Pulse', 'dark', 80, 1]
    ]],

    ['Onix','imagens/onix.png', 385, [
        ['Double Edge','normal', 120, 1],
        ['Stone Edge','rock', 100, 0.80],
        ['Dragon Breath','dragon', 60,1],
        ['Iron Tail', 'steel', 100, 0.75]
    ]],

    ['Snorlax','imagens/snorlax.png', 390, [
        ['Last Resort','normal', 140, 1],
        ['Covet','normal', 60, 1],
        ['Snore','normal', 50,1],
        ['lick', 'ghost', 30, 1]
    ]],

    ['Dragonite','imagens/dragonite.png', 400, [
        ['Outrage','dragon', 120, 1],
        ['Dragon Rush','dragon', 100, 0.75],
        ['Thunder Punch','electric', 75,1],
        ['Hyper Beam', 'normal', 150, 0.90]
    ]],

];
let pkmListLegendary = [

    ['Darkrai','imagens/darkrai.png', 600, [
        ['Last Resort','normal', 140, 1],
        ['Dream Eater','psych', 100, 1],
        ['Dark pulse','dark', 80,1],
        ['Hyper Beam', 'normal', 150, 0.90]
    ]],

    ['Suicune','imagens/suicune.png', 580, [
        ['Extreme Speed','normal', 80, 1],
        ['Blizzard','ice', 110, 0.70],
        ['Hydro Pump','water', 110,80],
        ['Hyper Beam', 'normal', 150, 0.90]
    ]],

    ['Ho-Oh','imagens/ho-oh.png', 680, [
        ['Sky Attack','fly', 140, 0.90],
        ['Burn Up','fire', 130, 1],
        ['Fire Blast','fire', 110,85],
        ['Hyper Beam', 'normal', 150, 0.90]
    ]],

    ['Rayquaza','imagens/rayquaza.png', 680, [
        ['Giga Impact','normal', 150, 0.90],
        ['Dragon Dance','dragon', 130, 1],
        ['Hurricane','fly', 110, 0.70],
        ['Hyper Beam', 'normal', 150, 0.90]
    ]],
];

let pkmBoss = [

    ['Mewtwo','imagens/mewtwo.png', 1080, [
        ['Future Sight','psych', 300, 1],
        ['Aura Sphere','fighting', 240, 0.70],
        ['Mega Kick','normal', 110,80],
        ['Confusion', 'psych', 150, 0.90]
    ]]

];

let typeMatch = {
    'Charizard' : [['ground'],['water','rock'],['fire','grass','steel']],
    'Blastoise' : [[''],['grass'],['fire','water']],
    'Venusaur'  : [['poison'],['fire','fly','ice','steel'],['grass','water']],
    'Charmander' : [['ground'],['water','rock'],['fire','grass','steel']],
    'Squirtle' : [[''],['grass'],['fire','water']],
    'Bulbasaur' : [['poison'],['fire','fly','ice','steel'],['grass','water']],
    'Caterpie' : [['grass'],['fire','fly','rock'],['ground']] ,
    'Pikachu' : [['fly'],['water','ice','steel'],['grass','fire']],
    'Machamp' : [['fly'],['ground','water','steel','rock'],['fire']],
    'Rattata': [[''],['fighting'],['normal']],
    'Gengar' : [['fly'],['ghost','dark','psych','ground'],['']],
    'Suicune' : [['ground'],['grass','electric'],['ice','water']],
    'Ho-Oh' : [['poison'],['water','electric','rock'],['fire','fly','steel']],
    'Darkrai': [['fly'],['ghost','dark','psych','ground'],['']],
    'Mewtwo' : [[''],['bug','dark','ghost'],['fighting'],['psych']],
    'Pidgey' : [['water'],['electric','ice','rock'],['normal','fly']],
    'Ekans' : [['fighting'],['psych','ground'],['poison']],
    'Vulpix' : [['fly'],['water','ground','rock'],['fire']],
    'Zubat' : [['ground'],['psych','electric','ice','rock'],['poison','fly']],
    'Mankey' : [['ice'],['psych','fly','fairy'],['fighting']],
    'Onix' : [['fire'],['steel','fighting','water','ice','grass','ground'],['rock','ground']],
    'Snorlax': [['ice'],['fighting'],['normal']],
    'Dragonite' : [['water'],['fairy','dragon','ice','rock'],['dragon','fly']],
    'Rayquaza' : [['fire'],['fairy','dragon','ice','rock'],['dragon','fly']],
}

let experiencia_pokemon = localStorage.getItem("exp");
let pokemonEscolhido = localStorage.getItem("pokemon");
let nivel_pokemon = localStorage.getItem("nivel");
let ginasios = localStorage.getItem("GinasiosDerrotados");

function IniciaBatalha(lugar){
    class Pokemon{
        constructor(name, sprite, hp, moves){
            this.name = name;
            this.sprite = sprite;
            this.hp = hp;
            this.fullhp = hp;
            this.moves = moves; 
        }
    }
    let p = null;
    function spawn(bool){
        
        if (lugar == 'BUSH'){
           p = pkmListEasy[Math.floor(Math.random()*pkmListEasy.length)];
        }
        if (lugar == 'HARD'){
           p = pkmListHard[Math.floor(Math.random()*pkmListHard.length)];
        }
        if (lugar == 'LEGENDARY'){
            p = pkmListLegendary[Math.floor(Math.random()*pkmListLegendary.length)];
         }
         if (lugar == 'MEWTWO'){
            p = pkmBoss[0];
         }
        let pkm = new Pokemon(p[0], p[1], p[2], p[3]);

        if(bool){
            for(i=0; i<4; i++){
                document.getElementById('m' + i).value = pkm.moves[i][0];
            }
        }
        return pkm;
    }

    function spawnInicial(bool, number){
        
        p = pkmEscolhido[number];
        let pkm = new Pokemon(p[0], p[1], p[2], p[3]);

        if(bool){
            for(i=0; i<4; i++){
                document.getElementById('m' + i).value = pkm.moves[i][0];
            }
        }
        return pkm;
    }

    let pk1 = spawnInicial(true, pokemonEscolhido);
    s1 = document.createElement('img');
    s1.src = pk1.sprite;
    document.getElementById('pk1').innerHTML = '';
    document.getElementById('pk1').appendChild(s1);
    document.getElementById('hp1').innerHTML = '<p>HP: ' + pk1.hp + '/' + pk1.fullhp + '</p>';

    let pk2 = spawn(false);
    s2 = document.createElement('img');
    s2.src = pk2.sprite;
    document.getElementById('pk2').innerHTML = '';
    document.getElementById('pk2').appendChild(s2);
    document.getElementById('hp2').innerHTML = '<p>HP: ' + pk2.hp + '/' + pk2.fullhp + '</p>';

    for(i=0; i<4; i++){
        let btn= document.getElementById('m'+i);
        let move = pk1.moves[i];
        function addHandler(btn, move, pk1, pk2){
            btn.addEventListener('click', function(e){
                attack(move, pk1, pk2, 'hp2', '')
                document.getElementById("m0").disabled = true;
                document.getElementById("m1").disabled = true;
                document.getElementById("m2").disabled = true;
                document.getElementById("m3").disabled = true;
                setTimeout(attack,1250,pk2.moves[Math.floor(Math.random()*3)], pk2, pk1, 'hp1', 'Foe ');
                setTimeout(function(){
                    document.getElementById("m0").disabled = false;
                    document.getElementById("m1").disabled = false;
                    document.getElementById("m2").disabled = false;
                    document.getElementById("m3").disabled = false;
                }, 1250)
                
            });
        }
        addHandler(btn, move, pk1, pk2);


    }

    function attack(move, attacker, receiver, hp, owner){
        document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' used ' + move[0] + '!</p>';
        if(Math.random() < move[3]){
            let power = move[2] += Math.floor(Math.random()*10);
            let rtype = typeMatch[receiver.name];
            let mtype = move[1];
            let scale = 1

            for(i=0; i<rtype.lenght; i++){
                if(rtype[i].includes(mtype)){
                    switch(i){
                        case 0:
                            scale = 0;
                            setTimeout(function(){
                                document.getElementById('comment').innerHTML = '<p>Não teve efeito!</p>';
                            },1000);
                            break;
                        case 1:
                            scale = 2;
                            setTimeout(function(){
                                document.getElementById('comment').innerHTML = '<p>Foi super efetivo!</p>';
                            },1000);
                            break;
                        case 2:
                            scale = 0.5;
                            setTimeout(function(){
                                document.getElementById('comment').innerHTML = '<p>Não foi muito efetivo!</p>';
                            },1000);
                            break;
                    }
                    break;
                }
            }
            power *= scale;
            receiver.hp -= Math.floor(power);
            document.getElementById(hp).innerHTML = "<p>HP: " + receiver.hp + '/' + receiver.fullhp + '</p>';
        }

        else{
            setTimeout(function(){
                document.getElementById('comment').innerHTML = '<p>Falhou o ataque!</p>';

            })
        }
        checkWinner(hp);
    }

    function evoluir(name, number){


        localStorage.setItem("exp", Number(experiencia_pokemon)+Number(number));

        if (experiencia_pokemon >= 150){
            localStorage.setItem("nivel", Number(nivel_pokemon)+1);
            document.getElementById('alert').innerHTML = '<p>O seu' + name +' subiu de nível</p>'
            localStorage["dados"+name] = (JSON.stringify([JSON.parse(localStorage["dados"+name])[0]+50, JSON.parse(localStorage["dados"+name])[1]+15, JSON.parse(localStorage["dados"+name])[2]+15, JSON.parse(localStorage["dados"+name])[3]+15, JSON.parse(localStorage["dados"+name])[4]+15]));
            localStorage.setItem("exp", 0);

        }

        if (localStorage.getItem("nivel") == 3){
            if (name == 'Charmander'){
                localStorage.setItem("pokemon", 3);
                document.getElementById('alert').innerHTML = '<p>O seu Charmander evoluiu para um Charizard!</p>';
                window.alert(`O Seu pokemon evoluiu para ${pkmEscolhido[3][0]}!`)
            }
            if (name == 'Squirtle'){
                localStorage.setItem("pokemon", 4);
                document.getElementById('alert').innerHTML = '<p>O seu Squirtle evoluiu para um Blastoise!</p>';
                window.alert(`O Seu pokemon evoluiu para ${pkmEscolhido[4][0]}!`)
            }
            if (name == 'Bulbasaur'){
                localStorage.setItem("pokemon", 5);
                document.getElementById('alert').innerHTML = '<p>O seu Bulbasaur evoluiu para um Venusaur!</p>';
                window.alert(`O Seu pokemon evoluiu para ${pkmEscolhido[5][0]}!`)
            }
      }  
    }

    function checkWinner(hp){
        let f = (pk1.hp <= 0) ? pk1 : (pk2.hp<=0) ? pk2 : false;

        if(f == pk1){
            window.alert("Game over, o teu pokemon morreu!")
            window.close();
        }
        if(f == pk2 && lugar != "MEWTWO"){
            localStorage.setItem("pokemonsDerrotados", Number(localStorage.getItem("pokemonsDerrotados"))+1)
            window.alert("Bom jogo!")
            window.close();
        }
        if(f!=false){
            document.getElementById('alert').innerHTML = 'Game Over: ' + f.name + ' fainted!';
            document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
            setTimeout(function(){
                location.reload;
            }, 1500)
            if(f == pk2 && lugar == 'BUSH'){
                document.getElementById('alert').innerHTML = '<p>Ganhou Experiência!</p>';
                evoluir(pk1.name, 50)
            }
            if(f == pk2 && lugar == 'HARD'){
                document.getElementById('alert').innerHTML = '<p>Ganhou Experiência!</p>';
                evoluir(pk1.name, 150)
            }
            if(f == pk2 && lugar == 'LEGENDARY'){
                document.getElementById('alert').innerHTML = '<p>Ganhou Experiência!</p>'; 
                evoluir(pk1.name, 1000)  
            }
            if(f == pk2 && lugar == 'MEWTWO'){
                localStorage.setItem("GinasiosDerrotados", Number(localStorage.getItem("GinasiosDerrotados"))+1);
                localStorage.setItem("Mapas", 4);
                localStorage.setItem("win", 1);
                window.alert("Você venceu o Jogo!");
                window.close();
                
            }
        }
    }
}