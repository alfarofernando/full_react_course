import {useState} from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {

  const [activePlayer , setActivePlayer] = useState("X");

  function handleSelectSquare(){
    setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === "X" ? "O" : "X" )
  }

  return (
    <main>
      <div id="game-container">
        {/*PLAYERS*/}
        <ol id="players" className="highlight-player">
          <Player defaultName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
            <Player defaultName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>

        <GameBoard  onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />

      </div>
    </main>
  );
}

export default App
