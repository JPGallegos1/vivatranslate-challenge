import {useTranslation} from "react-i18next";

import Wave from "../../assets/images/wave.svg";
import FirstStep from "../../assets/images/step-1.avif";
import SecondStep from "../../assets/images/step-2.avif";
import ThirdStep from "../../assets/images/step-3.avif";
import Title from "../Title";

export default function Product() {
  const {t} = useTranslation();

  return (
    <section className="product" id="product">
      <img alt="step section with wave image" className="steps__wave container" src={Wave} />

      <Title spanText={t("product.span")} title={t("product.title")} />

      <div className="product__grid container">
        <div className="product__step">
          <div className="product__image--container">
            <img alt="step one of how to use the tool" src={FirstStep} />
          </div>

          <h3 className="product__text text-center">{t("product.card.first.title")}</h3>

          <p className="text-center">{t("product.card.first.description")}</p>
        </div>
        <div className="product__step">
          <div className="product__image--container">
            <img alt="step one of how to use the tool" src={SecondStep} />
          </div>
          <h3 className="product__text text-center">{t("product.card.second.title")}</h3>

          <p className="text-center">{t("product.card.second.description")}</p>
        </div>
        <div className="product__step">
          <div className="product__image--container">
            <img alt="step one of how to use the tool" src={ThirdStep} />
          </div>
          <h3 className="product__text text-center">{t("product.card.third.title")}</h3>

          <p className="text-center">{t("product.card.third.description")}</p>
        </div>
      </div>
    </section>
  );
}
