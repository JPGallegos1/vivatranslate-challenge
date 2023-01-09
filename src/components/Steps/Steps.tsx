import Wave from "../../assets/images/wave.svg";
import FirstStep from "../../assets/images/step-1.avif";
import SecondStep from "../../assets/images/step-2.avif";
import ThirdStep from "../../assets/images/step-3.avif";
import Title from "../Title";

export default function Steps() {
  return (
    <section className="steps">
      <img alt="step section with wave image" className="steps__wave container" src={Wave} />

      <Title spanText="The tool" title="How it works" />

      <div className="steps__grid container">
        <div className="steps__step">
          <div className="steps__image--container">
            <img alt="step one of how to use the tool" src={FirstStep} />
          </div>

          <h3 className="step__text text-center">Add Viva to Chrome for free</h3>

          <p className="text-center">
            Anchor the Viva extension for easy access to all our functions.{" "}
          </p>
        </div>
        <div className="steps__step">
          <div className="steps__image--container">
            <img alt="step one of how to use the tool" src={SecondStep} />
          </div>
          <h3 className="step__text text-center">Join a Google Meets call</h3>

          <p className="text-center">
            Start an instant meeting or make a call with a colleague to try Viva.{" "}
          </p>
        </div>
        <div className="steps__step">
          <div className="steps__image--container">
            <img alt="step one of how to use the tool" src={ThirdStep} />
          </div>
          <h3 className="step__text text-center">Experience the magic</h3>

          <p className="text-center">
            Feel confident in multilingual meetings with real-time transcription and translation.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
