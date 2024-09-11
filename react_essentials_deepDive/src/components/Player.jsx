import { useState } from "react";

export default function Player({name , symbol}) {

    const [isEditing , setIsEditing] = useState(false);


    function handleEditButton(){
        if(isEditing){
            setIsEditing(false)
        }else{
            setIsEditing(true)
        }
    }

    let editMessage =  "Edit"
    if(isEditing){
        editMessage = "Save"
    }

    let playerName = <span className="player-name">{name}</span>;
    if(isEditing) {
        playerName = <input type="text" required  />
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol" >{symbol}</span>
                <button onClick={handleEditButton}>{editMessage}</button>
            </span>
            
        </li>
    );
}