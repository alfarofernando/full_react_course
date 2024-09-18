import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
    console.log("comp-App-handleChange : input identifier: " + inputIdentifier);
    console.log("comp-App-handleChange : new Value: " + newValue);
  }

  return (
    <div>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </div>
  );
}

export default App;
