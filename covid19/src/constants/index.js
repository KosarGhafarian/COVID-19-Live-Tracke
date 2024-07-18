import GreenWorld from "../assets/images/GreenWorld.svg";
import RedCoronaVirus from "../assets/images/RedCoronaVirus.svg";
import GreenCoronaVirus from "../assets/images/GreenCoronaVirus.svg";
import WhiteCoronaVirus from "../assets/images/WhiteCoronaVirus.svg";
import TrendingUpRed from "../assets/images/TrendingUpRed.svg";
import TrendingDownGreen from "../assets/images/TrendingDownGreen.svg";

export const HeaderCard = [
  {
    id: 0,
    title: "Stats Overview",
    description: "Global",
    icon: GreenWorld,
    additionalData: null,
  },
  {
    id: 1,
    title: "Total Coronavirus Cases",
    description: "1,245,347",
    icon: RedCoronaVirus,
    additionalData: {
      icon: TrendingUpRed,
      rate: "95%",
      redText: true,
    },
  },
  {
    id: 2,
    title: "Total Recovered",
    description: "259,544",
    icon: GreenCoronaVirus,
    additionalData: {
      icon: TrendingDownGreen,
      rate: "79%",
      redText: false,
    },
  },
  {
    id: 3,
    title: "Total Deaths",
    description: "68,184",
    icon: WhiteCoronaVirus,
    additionalData: {
      icon: TrendingUpRed,
      rate: "21%",
      redText: true,
    },
  },
];
