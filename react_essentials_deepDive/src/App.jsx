import Player from "./components/Player";

function App() {


  return (
    <main>
      <div id="game-container">
        {/*PLAYERS*/}
        <ol id="players">
          <Player defaultName="Player 1" symbol="X" />
            <Player defaultName="Player 2" symbol="O" />
        </ol>

        GAMEBOARD

      </div>
    </main>
  );
}

export default App
