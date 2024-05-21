import { MotionValue } from "framer-motion";

interface HeaderType {
  button: string;
  link: string;
}
interface ButtonType {
  href: string;
  content: string;
  color: string;
  className?: string;
}
interface HeroType {
  heroText: string;
  video: {
    playbackId: string;
    assetId: string;
  };
  descritpion: string;
}
interface CallToActionType {
  image: "image";
  title: string;
  description: string;
}
interface FaqType {
  question: string;
  info: string;
}

interface FaqList {
  faq: FaqType[];
}

interface CardType {
  id: number;
  image: "image";
  title: string;
  info: string;
}

interface CardList {
  content: CardType[];
}

interface Pill {
  orangePils: string;
  whitePils: string;
  left?: MotionValue;
  rotateZ: MotionValue;
}
interface Highlight {
  highlight: string;
}
interface StatsComponent {
  pils: Pill[];
  highlights: Highlight[];
}
interface BenefitsCards {
  icon: "image";
  title: "string";
  description: "string";
  scale?: MotionValue;
  image: "image";
}
interface Benifits {
  benefitscards: BenefitsCards[];
}

interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  content: Array<
    CallToActionType | FaqList | HeroType | StatsComponent | CardList | Benifits
  >;
}

export type {
  HeaderType,
  ButtonType,
  HeroType,
  CallToActionType,
  FaqType,
  FaqList,
  CardType,
  CardList,
  Pill,
  Highlight,
  BenefitsCards,
  Benifits,
  StatsComponent,
  Page,
};
