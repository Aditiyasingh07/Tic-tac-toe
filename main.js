console.log('Tic Tac Teo');

let music = new Audio("./img/music.mp3")
let tur = new Audio("./img/music.mp3")
let game = new Audio("./img/music.mp3")
let turn = "X"
let gameover = false

const changeTurn = ()=>{
    return turn === "X"?"O":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('box')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is the winner! "
            gameover = true
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "50px"
        }
    }) 
}

let boxs = document.getElementsByClassName('game-box')
Array.from(boxs).forEach(element =>{
    let boxtext = element.querySelector('.box')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            tur.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

let set = document.getElementById("set")
set.addEventListener('click',()=>{
    let boxs = document.getElementsByClassName('box')
    Array.from(boxs).forEach(element =>{
        element.innerText = " "
    })
})