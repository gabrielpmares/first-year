let img_player = document.querySelector('#player_preview');
let img_pokemon = document.querySelector('#pokemon_preview');
let boy = document.querySelector('#boy');
let girl = document.querySelector('#girl');
let outfit_boy1 = document.querySelector('#outfit_boy1');
let outfit_boy2 = document.querySelector('#outfit_boy2');
let outfit_girl1 = document.querySelector('#outfit_girl1');
let outfit_girl2 = document.querySelector('#outfit_girl2');
let charmander = document.querySelector('#charmander');
let squirtle = document.querySelector('#squirtle');
let bulbasaur = document.querySelector('#bulbasaur');


let player = 'imagemJogador';
let pokemon = 'pokemon';
let boy1 = 'boy1.png';
let girl1 = 'girl1.png';


function imagensDefault() {
    localStorage.setItem(player, boy1);
    localStorage.setItem(pokemon, '0');
}

window.onload = imagensDefault();


boy.addEventListener('click', () => {
    img_player.src = "imagens/boy1.png";
    localStorage.setItem(player, boy1);
})

girl.addEventListener('click', () => {
    img_player.src = "imagens/girl1.png";
    localStorage.setItem(player, girl1);
})

outfit_boy1.addEventListener('click', () => {
    img_player.src = "imagens/boy1.png";
    localStorage.setItem(player, boy1);
})

outfit_boy2.addEventListener('click', () => {
    img_player.src = "imagens/boy2.png";
    let boy2 = 'boy2.png';
    localStorage.setItem(player, boy2);
})

outfit_girl1.addEventListener('click', () => {
    img_player.src = "imagens/girl1.png";
    localStorage.setItem(player, girl1);
})

outfit_girl2.addEventListener('click', () => {
    img_player.src = "imagens/girl2.png";
    let girl2 = 'girl2.png';
    localStorage.setItem(player, girl2);
})

charmander.addEventListener('click', () => {
    img_pokemon.src = 'imagens/charmander.png';
    localStorage.setItem(pokemon, '0');
})

squirtle.addEventListener('click', () => {
    img_pokemon.src = 'imagens/squirtle.png';
    localStorage.setItem(pokemon, '1');
})

bulbasaur.addEventListener('click', () => {
    img_pokemon.src = 'imagens/bulbasaur.png';
    localStorage.setItem(pokemon, '2');
})