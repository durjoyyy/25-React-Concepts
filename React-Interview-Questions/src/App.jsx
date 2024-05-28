import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from './components/Random-Color/index';

function App() {
  return (
    <>
      <div className="App">
        {/* Accordian Component */}
        <Accordian></Accordian>
        {/* Random Color Component */}
        <RandomColor></RandomColor>
      </div>
    </>
  );
}

export default App;
