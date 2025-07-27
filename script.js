const boxes = document.querySelectorAll(".box");
let turnO = false;
let turnX = true;
function createPlayer(){
    let score = 0;
    return {score};
}
function Board(){
    let board = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];
    const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [6,4,2]
    ];
    return {board, winPatterns};
}
const gameBoard = Board();
const player1 = createPlayer();
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.textContent = "O";
            turnO = false;
            turnX = true;
        }
        else{
            box.textContent = "X";
            turnX = false;
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
})
const checkWinner = () =>{
    for(pattern in gameBoard.winPatterns){
        console.log(pattern)
    }
}