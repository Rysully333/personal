import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Web App, by yours truly!
              <br/>Times clicked: {count}.
          </p>
          <MyButton clickFunc={handleClick} />
        </header>
      </div>
  );
}

function MyButton({clickFunc}) {


  return (
      <button onClick={clickFunc}>
        Hold it now...
        Hit it!
      </button>
  );
}


export default App;
