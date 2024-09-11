import { useState } from "react";

export default function Player({ defaultName , symbol}) {

    const [isEditing , setIsEditing] = useState(false);

    const [ newPlayerName , setNewPlayerName] = useState(defaultName);

    function handleEditButton(){
        setIsEditing( (editing) => !editing );
    }

    function handleNameChange(e){
        setNewPlayerName(e.target.value);


    }

    let editMessage =  "Edit"
    let playerName = <span className="player-name">{newPlayerName}</span>;

    if(isEditing) {
        playerName = <input type="text" required value={newPlayerName} onChange={handleNameChange}/>
        editMessage = "Save"
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