import {useState} from 'react';

export default function TimerChallenge({title , targetTime}){

const [timerStarted,setTimerStarted] = useState(false);
const [timerExpired,setTimerExpired] = useState(false);

function handleTimer(){
    setTimeout(()=>{
        setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
}

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>YOU LOST!</p>}
        <p className="challenge-time" >
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={handleTimer} >
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running...' : 'Timer innactive'}
        </p>
    </section>
}