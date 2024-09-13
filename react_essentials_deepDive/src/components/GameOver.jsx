export default function GameOver({winner , restart}){

    return (
        <div id ="game-over">
            <h2>Game Over</h2>
            { winner && <p>{winner} WON</p>}
            { !winner && <p>ITS A DRAW</p>}
            <p>
                <button onClick={restart}>REMATCH</button>
            </p>
        </div>
    );
}