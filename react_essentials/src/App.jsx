
import { useState } from "react";
import { EXAMPLES } from "./components/Data.js";
import TabButton from "./components/TabButton";
import Ej from "./components/Ej.jsx";


function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  return (
    <div id="app">

      <Ej/>


      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>States</TabButton>
        </menu>

        {selectedTopic ? <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div> : <p>Please select a topic</p>}

      </section>


    </div>
  );
}

export default App;