import TabButton from "./components/TabButton";

function App() {
  return (
    <div id="app">

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>States</TabButton>
        </menu>
      </section>


    </div>
  );
}

export default App;