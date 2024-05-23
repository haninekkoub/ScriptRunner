import { MotionValue } from "framer-motion";

export interface CtaType {
  cta: boolean;
  ctaTitle: string;
  ctabutton: Button;
}

export interface Button {
  _key: string;
  content: string;
  link: string;
}

export interface FooterType {
  ctaComponent: CtaType;
  footerText: string;
  links: Button[];
  leftLinks: Button[];
}

export interface HeaderType {
  button: string;
  link: string;
}
export interface VideoType {
  playbackId: string;
  assetId: string;
}
export interface HeroType {
  heroText: string;
  video: VideoType;
  descritpion: string;
}
export interface CallToActionType {
  image: "image";
  title: string;
  description: string;
}
export interface FaqType {
  question: string;
  info: string;
}

export interface FaqList {
  faq: FaqType[];
}

export interface CardType {
  id: number;
  image: "image";
  title: string;
  info: string;
}

export interface CardList {
  video: VideoType;
  content: CardType[];
}
export interface Pill {
  leftPils: string;
  whitePils: string;
}
export interface Highlight {
  highlight: string;
}
export interface StatsComponent {
  pils: Pill[];
  highlights: Highlight[];
}
export interface Benifits {
  benefitscards: BenefitsCards[];
}
export interface BenefitsCards {
  scale?: MotionValue;
  icon: "image";
  title: string;
  description: string;
  topImage: "image";
  image: Array<
    | { largeImage: "image"; _type: string; _key: string }
    | {
        video: VideoType;
        _type: string;
        _key: string;
      }
    | { smallImage: "image"; _type: string; _key: string }
  >;
  bottomImage: "image";
}
export interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  content: Array<
    CallToActionType | FaqList | HeroType | StatsComponent | CardList | Benifits
  >;
}
