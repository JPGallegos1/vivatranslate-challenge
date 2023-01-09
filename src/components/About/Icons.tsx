import MeetIcon from "../../assets/icons/meet-icon.webp";
import BrainIcon from "../../assets/icons/brain-icon.webp";
import GlobalIcon from "../../assets/icons/global-icon.webp";

export interface Icons {
  id: number;
  name: string;
  icon: string | any;
}

export default function Icons() {
  const icons: Icons[] = [
    {
      id: 1,
      name: "aligned",
      icon: MeetIcon,
    },
    {
      id: 2,
      name: "automatic",
      icon: BrainIcon,
    },
    {
      id: 3,
      name: "global",
      icon: GlobalIcon,
    },
  ];

  return (
    <section className="icons">
      <ul className="icons__list">
        {icons.map((i: Icons) => (
          <li key={i.id} className="text-center">
            <img alt={i.name} src={i.icon} />
            <p>{i.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
