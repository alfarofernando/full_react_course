export default function GameOver({winner}){

    return (
        <div id ="game-over">
            <h2>Game Over</h2>
            { winner && <p>{winner} WON</p>}
            { !winner && <p>ITS A DRAW</p>}
            <p>
                <button>REMATCH</button>
            </p>
        </div>
    );
}