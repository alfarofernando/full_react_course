export default function Instructions({ instructions }) {
  return (
    <div id="game-over">
      <h2>INSTRUCTIONS TATETI 2.0</h2>
      <p>
        Cada jugador puede colocar sus símbolos donde quiera, ¡pero hay una
        sorpresa! NO PUEDES TENER MAS DE 3 SIMBOLOS EN EL TABLERO A LA VEZ, por
        lo que al llegar al 4to movimiento , el primer símbolo que pusiste
        desaparecerá automáticamente. Así que tendrás que pensar muy bien en
        dónde colocar tus fichas.
      </p>
      <p>
        <button onClick={instructions}>!JUGAR!</button>
      </p>
    </div>
  );
}
