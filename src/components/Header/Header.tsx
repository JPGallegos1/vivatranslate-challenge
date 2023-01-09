import {HashLink} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

import Logo from "./Logo";

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
        </div>
      </div>

      <div className="header__heading container">
        <h1>{t("title.h1")}</h1>
      </div>
    </header>
  );
}
