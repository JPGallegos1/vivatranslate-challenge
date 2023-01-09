import Header from "./components/Header/Header";
import About from "./components/About/About";
import Testimonies from "./components/Testimonies/Testimonies";
import Steps from "./components/Steps/Steps";
import Join from "./components/Join/Join";

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

      <Steps />

      <Testimonies />

      <Join />
    </>
  );
}

export default App;
