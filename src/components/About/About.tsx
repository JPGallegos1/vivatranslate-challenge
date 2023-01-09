import Title from "../Title";
import Text from "../Text";
import useScroll from "../../hooks/useScroll";

import Icons from "./Icons";

type Props = {
  spanText: string;
  title: string;
  text: string;
};

export default function ({spanText, title, text}: Props) {
  const {sectionRef} = useScroll();

  return (
    <section className="about text-center" id="about">
      <Title spanText={spanText} title={title} />

      <Text text={text} />

      <Icons />
    </section>
  );
}
