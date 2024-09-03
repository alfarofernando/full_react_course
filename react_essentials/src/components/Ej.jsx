import { useState } from "react";
// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function Ej() {

const [ button , setButton] = useState(false);

function handleDelete(){
    setButton(true);
}

function handleProceed(){
    setButton(false);
}

const proceedView = (
    <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceed}>Proceed</button>
        </div>
    );

const deleteView = (
    <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );

    return button ? proceedView : deleteView;
}