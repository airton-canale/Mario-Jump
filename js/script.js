const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')
const gameOver = document.querySelector('.gameover-logo')
const button = document.querySelector('.restart-button')
const jumpScore = document.querySelector('.score')

const jump = () => {
    mario.classList.add('jump')
setTimeout(() => {
    mario.classList.remove('jump')
}, 500)
}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft 
    const cloudPosition = cloud.offsetLeft 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        button.classList.remove('invisible')
        gameOver.classList.remove('invisible')

        jumpScore.classList.add('invisible')


        
        clearInterval(loop)
    }
}, 10)
let options = {
    root: document.querySelector('.game-board'),
    rootMargin: '0px',
    threshold: 1.0
  }

  let added = false
  let score = -1
  
  let observer = new IntersectionObserver(e =>{
    if(e[0].intersectionRatio == 1){
        if (!added) {
            score = score + 1
            added = true
            document.querySelector('.score').innerHTML = `<h1 class="score-jump"> Score: ${score}</h1>`
        }
      }else{
          added = false
      }
  } ,options);  


  let target = document.querySelector('.pipe');
  observer.observe(target);

document.addEventListener('keydown', jump)
