console.log("working");

  let gameBoard = document.querySelectorAll(".box");

  let currentPlayer = "x";
  
  let redPlayer = "x";
  
  let bluePlayer = "o";
  
  //array to hold completedMoves... use .push to add the selection to the array
  let redCompletedMoves = new Array();    
  let blueCompletedMoves = new Array();                                                  
let compareMoves = new String();

  //squares need to be clickable
  //logic to alternate player turns redPlayer, bluePlayer
  //change colors to turn red or blue with each click
  //remove event listener so box cannot be clicked again

  let clickCell = (event) => {
    if (currentPlayer === redPlayer) {
        changeBoxColorToRed(event);
        redCompletedMoves.push(event.target.id);
        redCompletedMoves.sort();
        compareWinners = redCompletedMoves.join;
        //need to add logic here that compares redCompletedMoves to winnerCombos, if true "winner", if false, proceed
        // then convert to string with a join, then for loop through winnerCombos
        event.target.removeEventListener("click", clickCell);
        currentPlayer = bluePlayer;
 } else {
    changeBoxColorToBlue(event);
    blueCompletedMoves.push(event.target.id);
    blueCompletedMoves.sort();
    //need to add logic here that compares blueCompletedMoves to winnerCombos, if true "winner", if false, proceed
    currentPlayer = redPlayer;
 };
      console.log(event.target.id);                                                                                                
  }
  function changeBoxColorToRed(event) {
    event.target.style.backgroundColor = "crimson";
}
function changeBoxColorToBlue(event) {
    event.target.style.backgroundColor = "steelblue";
} 

gameBoard.forEach (box => {
      box.addEventListener('click', clickCell);
  })



//include a reset button
function refresh() {
    window.parent.location = window.parent.location.href;
}

  //messaging for who is the winner, would like to turn this into an alert
  const winner = () => `player ${currentPlayer} is the winner!`;
  const tie = () => `sorry - this game is a tie`;

  //array to hold winner combinations
  const winnerCombos = [
      "0, 1, 2",
      "3, 4, 5",
      "6, 7, 8",
      "0, 4, 8",
      "2, 4, 6",
      "1, 4, 7",
      "2, 5, 8",
      "0, 3, 6"
  ];

//   function gameOver() {
//       if redCompletedMoves === winnerCombos;
//       window.alert(winner);
//       else blueCompletedMoves === winnerCombos;
//       window.alert(winner);
//       //continue through loop
//       }