import {useTranslation} from "react-i18next";

import Joinus from "../../assets/images/joinus.webp";
import Title from "../Title";

export default function Join() {
  const {t} = useTranslation();

  return (
    <section className="join main-content container" id="joinus">
      <Title spanText={t("join.span")} title={t("join.title")} />
      <div className="join__grid">
        <img alt="official Viva Translate site image" src={Joinus} />

        <div className="join__link">
          <a href="#">{t("join.button.text")}</a>
        </div>
      </div>
    </section>
  );
}
