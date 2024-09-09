import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./Data";
import Section from "./Section";

export default function Examples(){

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

    return(
        <Section title="Examples" id="examples">
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>States</TabButton>
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

      </Section>
    );
}