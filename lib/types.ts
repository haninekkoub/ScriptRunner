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

interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  content: Array<CallToActionType | FaqList | HeroType | CardList>;
}

export type {
  ButtonType,
  HeroType,
  CallToActionType,
  FaqType,
  FaqList,
  CardType,
  CardList,
  Page,
};
