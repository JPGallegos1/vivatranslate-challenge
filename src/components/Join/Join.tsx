import Joinus from "../../assets/images/joinus.webp";
import Title from "../Title";

export default function Join() {
  return (
    <section className="join main-content container" id="joinus">
      <Title spanText="Try it" title="for free" />
      <div className="join__grid">
        <img alt="official Viva Translate site image" src={Joinus} />

        <div className="join__link">
          <a href="#">Join us</a>
        </div>
      </div>
    </section>
  );
}
