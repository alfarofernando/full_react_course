// Importa el hook `useState` desde React, que se utiliza para manejar el estado en componentes funcionales.
import { useState } from "react";

// Importa las combinaciones ganadoras posibles desde el archivo `WinningCombinations`.
import { WINNING_COMBINATIONS } from "./components/WinningCombinations";

// Importa los componentes necesarios para la interfaz de usuario del juego.
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import Instructions from "./components/Instructions";

// Define el estado inicial del tablero del juego, una matriz 3x3 con valores `null` en cada celda.
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Define los nombres predeterminados de los jugadores para los símbolos "X" y "O".
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// Función para determinar cuál es el jugador activo en base al historial de movimientos.
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"; // Asume que el jugador "X" es el activo por defecto.

  // Si el primer movimiento en `gameTurns` es del jugador "X", entonces el siguiente jugador activo será "O".
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  console.log("Derived Active Player:", currentPlayer); // Añadido para depuración

  return currentPlayer; // Devuelve el jugador activo.
}

// Función para construir el tablero del juego a partir del historial de movimientos.
function deriveGameBoard(gameTurns) {
  // Crea una copia del tablero inicial.
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  console.log("Initial Game Board:", gameBoard); // Añadido para depuración

  // Actualiza el tablero según los movimientos en `gameTurns`.
  for (const turn of gameTurns) {
    const { square, player } = turn; // Extrae la casilla y el jugador del movimiento.
    const { row, col } = square; // Extrae la fila y la columna de la casilla.

    gameBoard[row][col] = player; // Actualiza la celda del tablero con el símbolo del jugador.
    console.log("Updated Game Board:", gameBoard); // Añadido para depuración
  }

  return gameBoard; // Devuelve el tablero actualizado.
}

// Función para determinar el ganador del juego.
function deriveWinner(gameBoard, players) {
  let winner = null; // Inicializa `winner` como `null`.

  // Recorre todas las combinaciones ganadoras posibles.
  for (const combination of WINNING_COMBINATIONS) {
    // Extrae los símbolos de las tres casillas en la combinación ganadora.
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    console.log("Checking Combination:", combination); // Añadido para depuración
    console.log(
      "Symbols:",
      firstSquareSymbol,
      secondSquareSymbol,
      thirdSquareSymbol
    ); // Añadido para depuración

    // Si las tres casillas tienen el mismo símbolo y no están vacías, se ha encontrado un ganador.
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol]; // Asocia el símbolo del ganador con el nombre del jugador.
      winner = winner.toUpperCase(); // Convierte el nombre del jugador a mayúsculas.
      console.log("Winner Found:", winner); // Añadido para depuración
    }
  }

  return winner; // Devuelve el nombre del ganador o `null` si no hay ganador.
}

// Define el componente funcional `App`.
function App() {
  // Define el estado para los jugadores y los movimientos del juego.
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // Estado para controlar la visibilidad de las instrucciones
  const [showInstructions, setShowInstructions] = useState(true);

  console.log("Players State:", players); // Añadido para depuración
  console.log("Game Turns State:", gameTurns); // Añadido para depuración

  // Deriva el estado actual del tablero, el jugador activo, el ganador y si hay un empate.
  const gameBoard = deriveGameBoard(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner; // Determina si el juego ha terminado en empate.
  let instructions = true;

  console.log("Game Board:", gameBoard); // Añadido para depuración
  console.log("Active Player:", activePlayer); // Añadido para depuración
  console.log("Winner:", winner); // Añadido para depuración
  console.log("Has Draw:", hasDraw); // Añadido para depuración

  // Función para manejar la selección de una casilla en el tablero.
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns); // Determina el jugador actual.

      // Filtra los movimientos por el jugador actual
      const playerMoves = prevTurns.filter(
        (turn) => turn.player === currentPlayer
      );

      // Si el jugador actual ya ha realizado 3 movimientos, elimina el primero
      if (playerMoves.length === 3) {
        const updatedTurns = prevTurns.filter(
          (turn) => !(turn.player === currentPlayer && turn === playerMoves[0])
        );
        console.log("Updated Turns after removal:", updatedTurns); // Añadido para depuración

        // Actualiza el historial de movimientos con el nuevo movimiento
        return [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
          ...updatedTurns,
        ];
      } else {
        // Si el jugador no ha realizado 3 movimientos aún, simplemente añade el nuevo movimiento
        return [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
          ...prevTurns,
        ];
      }
    });
  }

  // Función para cerrar las instrucciones
  const handleCloseInstructions = () => {
    setShowInstructions(false);
  };

  // Función para reiniciar el juego.
  function handleRestart() {
    setShowInstructions(true); // vuelve a mostrar primero las instrucciones
    setGameTurns([]); // Borra el historial de movimientos.
    setWinner(null); // Resetea el estado del ganador.
  }

  // Función para cambiar el nombre de un jugador.
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = {
        ...prevPlayers,
        [symbol]: newName, // Actualiza el nombre del jugador para el símbolo dado.
      };
      console.log("Updated Players:", updatedPlayers); // Añadido para depuración
      return updatedPlayers;
    });
  }

  // Renderiza el componente `App`.
  return (
    <main>
      {/* Muestra el historial de movimientos. */}
      <Log turns={gameTurns} />
      <div id="game-container">
        {/* Sección de jugadores */}
        <ol id="players" className="highlight-player">
          <Player
            defaultName={PLAYERS.X} // Nombre predeterminado para el jugador "X".
            symbol="X" // Símbolo del jugador.
            isActive={activePlayer === "X"} // Marca si el jugador "X" es el activo.
            onChangeName={handlePlayerNameChange} // Función para cambiar el nombre del jugador.
          />
          <Player
            defaultName={PLAYERS.O} // Nombre predeterminado para el jugador "O".
            symbol="O" // Símbolo del jugador.
            isActive={activePlayer === "O"} // Marca si el jugador "O" es el activo.
            onChangeName={handlePlayerNameChange} // Función para cambiar el nombre del jugador.
          />
        </ol>
        {/*Muestra el comonente Instructions cuando empieza una partida*/}
        {showInstructions && (
          <Instructions instructions={handleCloseInstructions} />
        )}
        {/* Muestra el componente GameOver si hay un ganador o un empate. */}
        {winner && <GameOver winner={winner} restart={handleRestart} />}
        {/* Muestra el tablero del juego. */}
        <GameBoard
          onSelectSquare={handleSelectSquare} // Función para manejar la selección de casillas.
          board={gameBoard} // Estado actual del tablero.
        />
      </div>
    </main>
  );
}

// Exporta el componente `App` para que pueda ser utilizado en otras partes de la aplicación.
export default App;
