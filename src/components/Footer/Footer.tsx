import {useTranslation} from "react-i18next";

export default function Footer() {
  const {t} = useTranslation();

  return (
    <footer className="footer container">
      <div className="footer__flex">
        <div className="footer__links">
          <a href="">{t("footer.links.privacity")}</a>
          <a href="">{t("footer.links.terms")}</a>
          <a href="">{t("footer.links.contact")}</a>
        </div>

        <p className="footer__rights">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
