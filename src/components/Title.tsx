type Props = {
  spanText: string;
  title: string;
};

export default function Title({spanText, title}: Props) {
  return (
    <h2>
      <span>{spanText}</span>
      {title}
    </h2>
  );
}
