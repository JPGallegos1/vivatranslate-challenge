import Title from "../Title";
import {testimonies} from "../../data/testomonies";

export default function Testimonies() {
  return (
    <section className="testimonies main-content container">
      <Title spanText="Customers" title="Testimonies" />

      <div className="testimonies__grid">
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="testimony">
            <header className="testimony__header">
              <div className="testimony__image">
                <img
                  alt={`${testimony.name} avatar`}
                  className="testimony__image"
                  src={testimony.image}
                />
              </div>

              <div className="testimony__author">
                <p>
                  {testimony.name}, {testimony.job}
                </p>
              </div>
            </header>

            <blockquote className="testimony__blockquote">{testimony.blockquote}</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
