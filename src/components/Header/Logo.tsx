type Props = {
  text: string;
};

export default function Logo({text}: Props) {
  return (
    <div className="header__logo">
      <p>{text}</p>
    </div>
  );
}
