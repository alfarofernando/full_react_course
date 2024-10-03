import { forwardRef , useImperativeHandle , useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal =  forwardRef(function ResultModal({ onReset, targetTime , timeRemaining} , ref){
const dialog = useRef();

const userLost = timeRemaining <= 0 ;

const formattedTimeRemaining = (timeRemaining/1000).toFixed(2);

const score = Math.round(( 1 - timeRemaining / (targetTime * 1000)) * 100);

useImperativeHandle(ref , () => {
    return{
        open(){
            dialog.current.showModal();
        }
    };
});
    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>YOU LOST</h2>}
            {!userLost && <h2>YOUR SCORE: {score}</h2>}
            <p>your time was <strong>{targetTime}</strong> second.</p>
            <p>you stop the timer <strong>{formattedTimeRemaining}</strong> seconds left</p>
            <form method="dialog" onSubmit={onReset}>
                <button>CLOSE</button>
            </form>
        </dialog> , 
        document.getElementById('modal')
    );
})

export default ResultModal;