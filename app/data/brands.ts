export type BadgeType =
  | "boss-pick"
  | "new-release"
  | "fast-withdrawal"
  | "exclusive"
  | "top-rated"
  | "hot";

export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string; // affiliate URL ending with empty param
  isMobile: boolean;
  votes: number;
  badge?: BadgeType;
}

export const brands: Brand[] = [
  {
    id: "barz",
    name: "Barz",
    logo: "/brands/barz.webp",
    rating: 9.4,
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48000&bid=1480&clickid=",
    isMobile: false,
    votes: 1438,
    badge: "boss-pick",
  },
  {
    id: "spinland",
    name: "Spinland",
    logo: "/brands/spinland.png",
    rating: 9.3,
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS ON FIRST DEPOSIT",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48778&lpid=213&bid=1617&clickid=",
    isMobile: false,
    votes: 1126,
    badge: "fast-withdrawal",
  },
];
