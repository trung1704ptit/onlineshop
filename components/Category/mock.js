import { MdSportsTennis } from "react-icons/md";
import { GiSonicShoes, GiStreetLight, GiForkKnifeSpoon } from 'react-icons/gi'
import { IoIceCreamOutline, IoGameControllerOutline } from 'react-icons/io5';
import { SiApachetomcat } from 'react-icons/si'
import { BsLightning, BsBook } from 'react-icons/bs';

export const mockList = [
  {
    id: "0",
    name: "Home and Kitchen",
    slug: "home-and-kitchen",
    icon: GiForkKnifeSpoon,
    sub: [{}],
  },
  {
    id: "1",
    name: "Fashion",
    slug: "fashion",
    icon: GiSonicShoes,
    sub: [{}],
  },
  {
    id: "2",
    name: "Grocery / Market",
    slug: "grocery-market",
    icon: IoIceCreamOutline,
    sub: [{}],
  },
  {
    id: "3",
    name: "Animals and Pet",
    slug: "animals-and-pet",
    icon: SiApachetomcat,
    sub: [{}],
  },
  {
    id: "4",
    name: "Lightning",
    slug: "lightning",
    icon: GiStreetLight,
    sub: [],
  },
  {
    id: "5",
    name: "Toys and Games",
    slug: "toys-and-games",
    icon: IoGameControllerOutline,
    sub: [],
  },
  {
    id: "6",
    name: "Sport and Outdoor",
    slug: "sport-and-outdoor",
    icon: MdSportsTennis,
    sub: [{}],
  },
  {
    id: "7",
    name: "Electronics",
    slug: "electronics",
    icon: BsLightning,
    sub: [],
  },
  {
    id: "8",
    name: "Books",
    slug: "books",
    icon: BsBook,
    sub: [],
  }
];
