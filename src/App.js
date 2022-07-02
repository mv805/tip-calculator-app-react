import './App.css';
import LightSwitch from './components/LightSwitch';
import TipCalculator from './components/TipCalculator';

function App() {

  return (
    <div className="App">
    <LightSwitch />
      <div className="title">
        <h1>Spli</h1>
        <h1>tter</h1>
      </div>
      <TipCalculator id="calculator" />
      <footer>
        Coded by <a href='https://github.com/mv805'>Matt Villa.</a> All Rights Reserved ©
        Project idea by <a href='https://www.frontendmentor.io/home'>Frontend Mentor. </a>V1.0.1
      </footer>
    </div>
  );
}

export default App;
