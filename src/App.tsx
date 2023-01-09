import {useTranslation} from "react-i18next";
import {useEffect} from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Testimonies from "./components/Testimonies/Testimonies";
import Product from "./components/Product/Product";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

const lngs: any = {
  en: {nativeName: "English"},
  es: {nativeName: "Spanish"},
};

function App() {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    const lng = navigator.language;

    i18n.changeLanguage(lng);
  }, []);

  return (
    <>
      <Header />

      <main className="container main-content">
        <About spanText={t("about.span")} text={t("about.description")} title={t("about.title")} />
      </main>

      <Product />

      <Testimonies />

      <Join />

      <Footer />
    </>
  );
}

export default App;
