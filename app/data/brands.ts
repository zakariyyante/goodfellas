export type BadgeType =
  | "boss-pick"
  | "new-release"
  | "fast-withdrawal"
  | "exclusive"
  | "top-rated"
  | "hot"
  | "editors-choice"
  | "expert-choice"
  | "top-pick";

export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string; // affiliate URL ending with empty param
  displayUrl?: string; // shown to users (optional)
  isMobile: boolean;
  votes: number;
  badge?: BadgeType;
}

export const brands: Brand[] = [
  {
    id: "vegashero",
    name: "VegasHero",
    logo: "/brands/VegasHero.png",
    rating: 9.5,
    bonus: "125% UP TO £1,250 + 250 FS",
    url: "https://vgr.lynmonkel.com/?mid=314792_2079715&subid=VegasHero-UK12ZZ&clickid=",
    displayUrl: "https://vegashero.com",
    isMobile: true,
    votes: 1842,
    badge: "editors-choice",
  },
  {
    id: "bananzia",
    name: "Bananzia",
    logo: "/brands/bananzia.svg",
    rating: 9.2,
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 FS!",
    url: "https://go.drctvoodoo.com/click?pid=6&offer_id=12&sub2=Bananzia-UK12ZZ&sub1=",
    displayUrl: "https://bananzia.com",
    isMobile: true,
    votes: 1340,
    badge: "expert-choice",
  },
  {
    id: "spinpolo",
    name: "SpinPolo",
    logo: "/brands/spinpolo.webp",
    rating: 9.0,
    bonus: "400% UP TO £12,750 + 400 FS",
    url: "https://bestcpa.online/click?o=468&a=75&aff_click_id=",
    displayUrl: "https://spinpolo.com",
    isMobile: true,
    votes: 1105,
    badge: "top-pick",
  },
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
