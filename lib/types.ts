import { MotionValue } from "framer-motion";

interface CtaType {
  cta: boolean;
  ctaTitle: string;
  ctabutton: Button;
}

interface Button {
  _key: string;
  content: string;
  link: string;
}

interface FooterType {
  ctaComponent: CtaType;
  footerText: string;
  links: Button[];
  leftLinks: Button[];
}

interface HeaderType {
  button: string;
  link: string;
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
  leftPils: string;
  whitePils: string;
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
  CtaType,
  FooterType,
  HeroType,
  CallToActionType,
  FaqType,
  FaqList,
  CardType,
  CardList,
  Button,
  Pill,
  Highlight,
  BenefitsCards,
  Benifits,
  StatsComponent,
  Page,
};
