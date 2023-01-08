import {useState} from "react";

import reactLogo from "./assets/react.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="header header__background">
        <div className="header__content container">
          <div className="header__bar">
            <div className="header__logo">
              <p>Viva Translate</p>
            </div>

            <nav className="header__navigation">
              <a href="#">About</a>
              <a href="#">Join</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>

        <div className="header__heading">
          <h1>we are breaking langueage's barriers</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
