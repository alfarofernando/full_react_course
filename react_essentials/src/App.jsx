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


const dinamicMessage = ["Hello there","Hi, glad to see you","Welcome to AOE2 haha"];

function generateRandomInt(max){
    return Math.floor(Math.random() * (max+1));
}

const salute = dinamicMessage[generateRandomInt(2)];

function App() {
 
  return (
    <div>
      <h1>This it the main component App</h1>
      <h2>We'll get out hello world down below</h2>
      <HelloWorld/>
      <hr/>
      <h2>lets get a dinamic message with jsx code every time we reload the page </h2>
      <h2>{dinamicMessage[generateRandomInt(2)]}</h2>
      <h2>Or we can simplify the code by adding the function into a constant</h2>
      <h2>{salute}</h2>
    </div>
  )
}

export default App;
