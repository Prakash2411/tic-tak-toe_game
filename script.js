console.log("Welcome to tic tac toe")
let music=new Audio("bip.mp3")
let audioturn=new Audio("bip.mp3")
let gameover=new Audio("gameover.mp3")
let turn = "x"
let isgameover=true

       


// function to change the turn
const changeturn= () => {
    return turn === "x"?"o":"x"
}
//function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[0]].innerText !== ""))
        document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won"
        isgameover=false
        
    })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn
            turn=changeturn();
            audioturn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " +  turn;   
            }
            checkwin();  
        }
})
})
// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText=""
    });
    turn="x";
    checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " +  turn;   
            }
})