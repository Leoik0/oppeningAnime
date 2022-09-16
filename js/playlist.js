let musicas = [
    { titulo: 'Atack on Titan' , artista: 'Eren', src: '/audio/eren.mp3' , img:'/img/levi.png'},
    { titulo: 'Cavaleiro dos Zodíacos', artista: 'Seiya', src:  '/audio/cdz.mp3', img:'/img/seiya.png'},
    { titulo: 'Death Note', artista: 'L' ,  src:  '/audio/deathNote.mp3', img:'/img/l.png'},
    { titulo: 'Demon Slayer', artista: 'Inosuke' ,  src:  '/audio/demonSlayer.mp3', img:'/img/tanjiro.png'},
    { titulo: 'Dragon ball', artista: 'Goku' ,  src:  '/audio/dragonS.mp3', img:'/img/dragonBall1.png'},
    { titulo: 'Dragon ball gt', artista: 'Goku' ,  src:  '/audio/dragonbGT.mp3', img:'/img/dragonBall2.png'},
    { titulo: 'Fairy tail', artista: 'Natsu' ,  src: '/audio/fairyTail.mp3', img:'/img/natsu.png'},
    { titulo: 'Kuroko no Basket', artista: 'Akashi' ,  src: '/audio/kuroko.mp3', img:'/img/akashi.png'},
    { titulo: 'Naruto', artista: 'Obito' ,  src: '/audio/naruto1.mp3' , img:'/img/naruto1.png'},
    { titulo: 'Naruto', artista: 'Kakashi' ,  src:  '/audio/naruto2.mp3', img:'/img/obito.png'},
    { titulo: 'One Piece', artista: 'Luffy', src: '/audio/onePiece.mp3', img:'/img/luffy.png'},
    { titulo: 'shigatsu wa kimi no uso', artista: 'Arima' ,  src:  '/audio/arima.mp3', img:'/img/arima.png'},
    { titulo: 'Sword Art Online', artista: 'Kirito', src:  '/audio/sword.mp3', img:'/img/kirito.png'},
    { titulo: 'Tokyo Ghooul', artista: 'Kaneki', src: '/audio/tokyoGhoul.mp3', img:'/img/kaneki.png'},
    { titulo: 'Tokyo Revengers', artista: 'Takemitchy', src: '/audio/tokyoManji.mp3', img:'/img/tokyoManji.png'}
]

//Declarações

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//Eventos

document.querySelector('.botao-play').addEventListener('click',tocarMusica);
document.querySelector('.botao-pause').addEventListener('click',pararMusica);
musica.addEventListener('timeupdate',atualizaBarra);
document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 14
    }
    pararMusica()
    renderizarMusica(indexMusica);
});
document.querySelector('.proximo').addEventListener('click', () =>{
    indexMusica++;
    if(indexMusica > 14){
        indexMusica = 0
    }
    pararMusica()
    renderizarMusica(indexMusica);
});


//Funções

function renderizarMusica (index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.setAttribute('src',musicas[index].img);
        duracaoMusica.innerHTML = segundosParaMinutos(Math.floor(musica.duration));
    })
    console.log(imagem)
    console.log(musicas[index].img)
}

function tocarMusica (){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pararMusica (){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizaBarra (){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoCorrido = document.querySelector('.inicio');
    tempoCorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}



