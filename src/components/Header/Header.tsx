import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header header__background">
      <div className="header__content container">
        <div className="header__bar">
          <Logo text="Viva" />

          <nav className="header__navigation">
            <a href="#">About</a>
            <a href="#">Join</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>

      <div className="header__heading container">
        <h1>Transcending Language Barriers</h1>
      </div>
    </header>
  );
}
