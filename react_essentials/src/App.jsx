
import { useState } from "react";
import TabButton from "./components/TabButton";


function App() {

  const [tabContent,setTabContent] = useState("Please select a tab");

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
    console.log(tabContent);
  }

  return (
    <div id="app">

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('states')}>States</TabButton>
        </menu>
        <h2>{tabContent}</h2>
      </section>


    </div>
  );
}

export default App;