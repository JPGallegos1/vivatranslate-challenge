import {useTranslation} from "react-i18next";

import Title from "../Title";
import {testimonies} from "../../data/testomonies";

export default function Testimonies() {
  const {t} = useTranslation();

  return (
    <section className="testimonies main-content container" id="testimonies">
      <Title spanText={t("testimonies.span")} title={t("testimonies.title")} />

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
