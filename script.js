function createPlayer(){
    let score = 0;
    return {score};
}
function Board(){
    const board = [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ];
    return {board};
}
const gameBoard = Board();
function playGame(){

}
const player1 = createPlayer();
console.log(gameBoard.board[2][1]);