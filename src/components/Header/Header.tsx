import {HashLink} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

import SpainIcon from "../../assets/icons/icon-spain.webp";
import UsaIcon from "../../assets/icons/icon-usa.webp";

import Logo from "./Logo";

const lngs: any = {
  en: {nativeName: "English"},
  es: {nativeName: "Español"},
};

export default function Header() {
  const {t, i18n} = useTranslation();

  return (
    <header className="header header__background">
      <div className="header__content container">
        <div className="header__bar">
          <Logo text="Viva " />

          <nav className="header__navigation">
            <HashLink smooth to="/#home">
              {t("navigation.home")}
            </HashLink>
            <HashLink smooth to="/#about">
              {t("navigation.about")}
            </HashLink>
            <HashLink smooth to="/#product">
              {t("navigation.product")}
            </HashLink>
            <HashLink smooth to="/#testimonies">
              {t("navigation.testimonies")}
            </HashLink>
            <HashLink smooth to="/#joinus">
              {t("navigation.join")}
            </HashLink>
          </nav>

          <div className="header__flags">
            <div role="button" onClick={() => i18n.changeLanguage("es")}>
              <img alt="Span flag" src={SpainIcon} />
            </div>

            <div role="button" onClick={() => i18n.changeLanguage("en")}>
              <img alt="USA flag" src={UsaIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className="header__heading container">
        <h1>{t("title.h1")}</h1>
      </div>
    </header>
  );
}
