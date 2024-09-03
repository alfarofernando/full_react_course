import TabButton from "./components/TabButton";
import UserLogging from "./components/UserLogging";


function handleSelect(selectedButton){
    console.log(selectedButton);
}

function App() {
  return (
    <div id="app">

      <UserLogging/>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('states')}>States</TabButton>
        </menu>
      </section>


    </div>
  );
}

export default App;