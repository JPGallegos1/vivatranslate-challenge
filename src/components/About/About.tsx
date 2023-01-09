import Title from "../Title";
import Text from "../Text";

import Icons from "./Icons";

type Props = {
  spanText: string;
  title: string;
  text: string;
};

export default function ({spanText, title, text}: Props) {
  return (
    <section className="about text-center" id="about">
      <Title spanText={spanText} title={title} />

      <Text text={text} />

      <Icons />
    </section>
  );
}
