import ScriptTag from "react-script-tag";
import "./App.css";

function App() {
  const Demo = () => <ScriptTag src="js/colorGame.js" type="text/javascript" />;
  return (
    <div className="App">
      <h1>
        COLOR
        <br />
        <span id="colorDisplay">RGB</span>
        <br />
        GAME
      </h1>

      <div id="stripe">
        <button id="reset">New Colors</button>
        <span id="message" />
        <button id="easyBtn">Easy</button>
        <button id="hardBtn" className="selected">
          Hard
        </button>
      </div>

      <div id="container">
        <div className="square" />
        <div className="square" />
        <div className="square" />
        <div className="square" />
        <div className="square" />
        <div className="square" />
      </div>
      <Demo />
    </div>
  );
}

export default App;
