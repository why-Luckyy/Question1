type Player = "X" | "O";
type CellValue = Player | "";
const cells = document.querySelectorAll<HTMLButtonElement>(".cell");

const result = document.getElementById("result") as HTMLHeadingElement;
const resetBtn = document.getElementById("reset") as HTMLButtonElement;
let currentPlayer: Player = "X";
let board: CellValue[] = ["", "", "", "", "", "", "", "", ""];
let gameActive: boolean = true;
const winPatterns: number[][] = [
 [0,1,2],[3,4,5],[6,7,8],
 [0,3,6],[1,4,7],[2,5,8],
 [0,4,8],[2,4,6]
];

cells.forEach((cell, index) => {
 cell.addEventListener("click", () => handleClick(cell, index));
});



function handleClick(cell: HTMLButtonElement, index: number): void {
 if (board[index] !== "" || !gameActive) return;
 board[index] = currentPlayer;
 cell.textContent = currentPlayer;
 checkWinner();
 currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner(): void {
 for (const pattern of winPatterns) {
  const [a, b, c] = pattern;
  if (

   board[a] &&
   board[a] === board[b] &&
   board[a] === board[c]
  ) {
   result.textContent = `Winner: ${board[a]}`;
   gameActive = false;
return;

  }
 }
 if (!board.includes("")) {
  result.textContent = "Draw!";
  gameActive = false;
 }
}
resetBtn.addEventListener("click", resetGame);
function resetGame(): void {
 board = ["", "", "", "", "", "", "", "", ""];
 currentPlayer = "X";
 gameActive = true;
 result.textContent = "";
 cells.forEach(cell => (cell.textContent = ""));

}