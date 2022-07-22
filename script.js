const luigi = document.querySelector('.luigi');
const pipe = document.querySelector('.pipe');


const jump = () =>{
    luigi.classList.add('jump');

    setTimeout(() =>{
        luigi.classList.remove('jump');

    }, 500);

}

const loop =setInterval(() =>{


    const pipePosition = pipe.offsetLeft;
    const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px', '');

    if (pipePosition <= 90 && pipePosition > 0 && luigiPosition < 110){
        pipe.style.animation = 'nome';
        pipe.style.left= `${pipePosition}px`;

        luigi.style.animation = 'nome';
        luigi.style.bottom= `${luigiPosition}px`;


        luigi.src = './assents/imagens/game-over.png'
        luigi.style.width = '75px'
        luigi.style.marginLeft = '5px'


        clearInterval(loop)
    }



}, 10);

document.addEventListener('keydown', jump);