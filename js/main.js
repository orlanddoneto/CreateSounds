
const listaTeclas = document.querySelectorAll(".tecla")
let contador = 0;

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        console.log("Elemento não encontrado!")
    }
    else if(elemento.localName === 'audio'){
        elemento.play();
    }

}

for(let contador = 0;contador < listaTeclas.length;contador++){
    let tecla = listaTeclas[contador]
    let instrumento = tecla.classList[1];
    let nomeAudio = `#som_${instrumento}`
    
    tecla.onclick = function(){
        tocaSom(nomeAudio);
    }
    
    tecla.onkeydown = function (evento) {

        if(evento.code == 'Space' || evento.code == 'Enter')
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
