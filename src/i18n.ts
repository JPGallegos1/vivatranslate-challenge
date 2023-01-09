import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// for all options read: https://www.i18next.com/overview/configuration-options

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navigation: {
            home: "home",
            about: "about",
            product: "product",
            testimonies: "testimonies",
            join: "join",
          },
          title: {
            h1: "transcending language barriers",
          },
          about: {
            span: "know more",
            title: "about us",
            description:
              "Viva Translate is an AI meeting translator that helps break language barriers in the workplace. With real-time translation capabilities, this tool allows you to communicate effectively with coworkers, regardless of the language they speak. No more awkward misunderstandings or language mix-ups.",
            aligned: "aligned",
            automatic: "automatic",
            global: "global",
          },
          product: {
            span: "product",
            title: "how it works",
            card: {
              first: {
                title: "Add Viva to Chrome for free",
                description: "Anchor the Viva extension for easy access to all our functions.",
              },
              second: {
                title: "Join a Google Meets call",
                description:
                  "Start an instant meeting or make a call with a colleague to try Viva.",
              },
              third: {
                title: "Experience the magic",
                description:
                  "Feel confident in multilingual meetings with real-time transcription and translation.",
              },
            },
          },
          testimonies: {
            span: "customers",
            title: "testimonies",
          },
          join: {
            span: "try it",
            title: "for free",
            button: {
              text: "Join us",
            },
          },
          footer: {
            links: {
              privacity: "Privacity",
              terms: "Terms and Conditions",
              contact: "Contact",
            },
            rights: "® 2023 Viva Translate, all rights reserved",
          },
        },
      },
      es: {
        translation: {
          navigation: {
            home: "inicio",
            about: "nosotros",
            product: "producto",
            testimonies: "testomonios",
            join: "únete",
          },
          title: {
            h1: "trascendiendo las barreras del idioma",
          },
          about: {
            span: "Conoce más",
            title: "de nosotros",
            description:
              "Viva Translate es un traductor de reuniones de IA que ayuda a romper las barreras del idioma en el lugar de trabajo. Con capacidades de traducción en tiempo real, esta herramienta le permite comunicarse de manera efectiva con sus compañeros de trabajo, independientemente del idioma que hablen. No más malentendidos incómodos o confusiones de idiomas.",
            aligned: "alineados",
            automatic: "automatico",
            global: "globalizados",
          },
          product: {
            span: "producto",
            title: "como funciona",
            card: {
              first: {
                title: "agrega viva a chrome gratis",
                description:
                  "Ancle la extensión de Viva fácilmente para acceder a todas las funciones",
              },
              second: {
                title: "ingresa a una llamada en google meets",
                description:
                  "Inicie una reunión instantánea o haga una llamada con un colega para probar Viva.",
              },
              third: {
                title: "Experimente la magia",
                description:
                  "Siéntase seguro en reuniones multilingües con transcripción y traducción en tiempo real.",
              },
            },
          },
          testimonies: {
            span: "Clientes",
            title: "testimonios",
          },
          join: {
            span: "pruebalo",
            title: "gratis",
            button: {
              text: "Únete",
            },
          },
          footer: {
            links: {
              privacity: "Privacidad",
              terms: "Términos y Condiciones",
              contact: "Contacto",
            },
            rights: "® 2023 Viva Translate, todos los derechos reservados",
          },
        },
      },
    },
  });

export default i18n;
