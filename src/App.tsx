import {useState} from "react";

import reactLogo from "./assets/react.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <div className="header__logo">
          <img alt="vite" src="/vite.svg" />
        </div>
        <nav className="header__navigation">
          <a href="#">A</a>
          <a href="#">B</a>
          <a href="#">C</a>
          <a href="#">D</a>
        </nav>
      </header>
    </div>
  );
}

export default App;
