const boxes = document.querySelectorAll(".box");
const resetbtn = document.getElementById("reset");
const winnerDisplay = document.getElementById("winnerDisplay");
const winnerText = document.getElementById("winnerText");
const scoreXEl = document.getElementById("scoreX");
const scoreOEl = document.getElementById("scoreO");

let turnO = false;
let turnX = true;

const playerX = { score: 0 };
const playerO = { score: 0 };

function Board(){
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // cols
        [0,4,8],[2,4,6]          // diagonals
    ];
    return { winPatterns };
}

const gameBoard = Board();

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent !== "") return;

        box.textContent = turnO ? "O" : "X";
        turnX = turnO;
        turnO = !turnO;
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of gameBoard.winPatterns) {
        const [a, b, c] = pattern;
        const val1 = boxes[a].textContent;
        const val2 = boxes[b].textContent;
        const val3 = boxes[c].textContent;

        if (val1 && val1 === val2 && val2 === val3) {
            showWinner(val1);
            updateScore(val1);
            disableBoard();
            return;
        }
    }

    // Check for draw
    if ([...boxes].every(box => box.textContent !== "")) {
        showWinner("It's a Draw!");
    }
};

const showWinner = (winner) => {
    winnerText.textContent = winner === "X" || winner === "O" ? `${winner} Wins!` : winner;
    winnerDisplay.classList.remove("hide");
};

const updateScore = (winner) => {
    if (winner === "X") {
        playerX.score++;
        scoreXEl.textContent = playerX.score;
    } else if (winner === "O") {
        playerO.score++;
        scoreOEl.textContent = playerO.score;
    }
};

const disableBoard = () => {
    boxes.forEach((box) => box.disabled = true);
};

resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    winnerDisplay.classList.add("hide");
});
