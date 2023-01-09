import Header from "./components/Header/Header";
import About from "./components/About/About";
import Testimonies from "./components/Testimonies/Testimonies";
import Product from "./components/Product/Product";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="container main-content">
        <About
          spanText="Know more"
          text="Viva Translate is an AI meeting translator that helps break language barriers in the
            workplace. With real-time translation capabilities, this tool allows you to communicate
            effectively with coworkers, regardless of the language they speak. No more awkward
            misunderstandings or language mix-ups."
          title="About us"
        />
      </main>

      <Product />

      <Testimonies />

      <Join />

      <Footer />
    </>
  );
}

export default App;
