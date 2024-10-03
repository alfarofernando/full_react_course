import { forwardRef } from "react";

const ResultModal =  forwardRef(function ResultModal({result , targetTime} , ref){

    return(
        <dialog ref={ref} className="result-modal">
            <h2>YOU {result}</h2>
            <p>your time was <strong>{targetTime}</strong> second.</p>
            <p>you stop the timer <strong>X</strong> seconds left</p>
            <form method="dialog">
                <button>CLOSE</button>
            </form>
        </dialog>
    );
})

export default ResultModal;