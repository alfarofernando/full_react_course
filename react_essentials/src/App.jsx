function HelloWorld(){
  let message = "Like this";
  return(
    <div>
      <hr/>
      <h3>Hello world from a React component</h3>
      <h3>A component is just a js function that return pieces of html that can be embebed with js</h3>
      <h3>{message}</h3>
    </div>
  )
}

function App() {
 
  return (
    <div>
      <h1>This it the main component App</h1>
      <h2>We'll get out hello world down below</h2>
      <HelloWorld/>
    </div>
  )
}

export default App;
