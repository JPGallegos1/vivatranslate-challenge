import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header header__background">
      <div className="header__content container">
        <div className="header__bar">
          <Logo text="Viva " />

          <nav className="header__navigation">
            <Link to="/">Home</Link>
            <HashLink smooth to="/#about">
              About
            </HashLink>
            <HashLink smooth to="/#product">
              Product
            </HashLink>
            <HashLink smooth to="/#testimonies">
              Testimonies
            </HashLink>
            <HashLink smooth to="/#joinus">
              Join
            </HashLink>
          </nav>
        </div>
      </div>

      <div className="header__heading container">
        <h1>Transcending Language Barriers</h1>
      </div>
    </header>
  );
}
