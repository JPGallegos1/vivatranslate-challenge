import Header from "./components/Header/Header";
import About from "./components/About/About";
import Icons from "./components/About/Icons";

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

        <section className="testomonies" />
      </main>
    </>
  );
}

export default App;
