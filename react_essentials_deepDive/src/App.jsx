import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/WinningCombinations";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }

  return currentPlayer;
}

function App() {

  //const [activePlayer , setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  //const [hasWinner,setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

    for (const turn of gameTurns ){
        const {square , player} = turn;
        const {row , col } = square;

        gameBoard[row][col] = player;
    }

  for (const combination of WINNING_COMBINATIONS){

  }

  function handleSelectSquare(rowIndex, colIndex) {

    //setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === "X" ? "O" : "X" )
    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        {/*PLAYERS*/}
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            defaultName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>

      <Log turns={gameTurns} />

    </main>
  );
}

export default App
