import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectedSquare(rowIndex, colIndex) {
        setGameBoard((previousGameBoard) => {

            if (previousGameBoard[rowIndex][colIndex]) {
                return previousGameBoard;
            }

            const updatedBoard = [...previousGameBoard.map((innerArray) => 
                [...innerArray])];

            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

            onSelectSquare();

            return updatedBoard;

        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() =>
                                    handleSelectedSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>)
            )}
        </ol>
    );
}