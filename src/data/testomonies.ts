import DavidAvatar from "../assets/images/david-avatar.avif";
import AlexandraAvatar from "../assets/images/alexandra-avatar.avif";
import GustavoAvatar from "../assets/images/gustavo-avatar.avif";
import TawnyAvatar from "../assets/images/tawny-avatar.webp";
import IndiaAvatar from "../assets/images/india-avatar.webp";

export interface Testimony {
  id: number;
  image: string | any;
  name: string;
  job: string;
  blockquote: string;
}

export const testimonies: Testimony[] = [
  {
    id: 1,
    image: AlexandraAvatar,
    name: "Alexandra Rodriguez",
    job: "performance and growth marketing freelancer",
    blockquote:
      "When I started having meetings with people from other countries, they spoke so fast I couldn't understand. Having the ability to see the translations in real time has helped me tremendously with communication!",
  },
  {
    id: 2,
    image: DavidAvatar,
    name: "David Levesque",
    job: "founder of @Brite",
    blockquote:
      "I've spent the last four years trying to coordinate teams from Ukraine to Zimbabwe to Pakistan. Being able to communicate directly with Viva engineers changes the way I work.",
  },
  {
    id: 3,
    image: IndiaAvatar,
    name: "India Karn",
    job: "Backend Engineer",
    blockquote:
      "With Viva Translate, communication across different languages is no longer an issue. This technology can provide real-time translations of conversations during meetings, allowing everyone to understand each other without any misunderstandings",
  },
  {
    id: 4,
    image: TawnyAvatar,
    name: "Tawny Dimming",
    job: "Software Developer",
    blockquote:
      "In today's globalized workplace, communication has become more important than ever. But language barriers can often be a hindrance to effective collaboration. That's why Viva Translate can be so useful in the workplace",
  },
  {
    id: 5,
    image: GustavoAvatar,
    name: "Gustavo Moreno",
    job: "CTO @Kiwi",
    blockquote:
      "I found the speech-to-text conversion to be quite accurate and the translation very understandable. Fluent conversations are possible.",
  },
];
