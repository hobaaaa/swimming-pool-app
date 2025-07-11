import { Assets, Project, Service } from "@/types";
import logo from "./logo.png";
import menu_black from "./menu-black.png";
import close_black from "./close-black.png";
import pool from "./pool.png";
import spa_sauna from "./spa-sauna.png";
import send_icon from "./send-icon.png";
import giriş from "./giriş.jpg";

export const assets: Assets = {
  logo,
  menu_black,
  close_black,
  pool,
  spa_sauna,
  send_icon,
  giriş,
};

export const serviceData: Service[] = [
  {
    icon: assets.pool,
    title: "Havuz",
    description:
      "Havuzlar, yaşam alanlarına değer katan ve keyifli vakit geçirme imkanı sunan önemli unsurlardır. Firmamız, yılların verdiği tecrübe ve uzmanlıkla, kaliteli ve estetik havuzlarınızı hayata geçirmek için hizmetinizdedir.",
  },
  {
    icon: assets.spa_sauna,
    title: "Spa ve Sauna",
    description:
      "Günümüzde spa ve sauna, insanların yaşam kalitesini artıran önemli unsurlardan biri haline gelmiştir. Sauna, vücudu terleterek detoks etkisi sağlarken, spa ise stresi azaltarak rahatlama ve dinlenme imkanı sunar. Bu nedenle, spa ve sauna imalatı kaliteli ve özenli bir şekilde yapılmalıdır.",
  },
];

export const workData: Project[] = [
  {
    title: "Muhammet Kızıl Havuz Projesi",
    description: "Muhammet Kızıl beye yapmış olduğumuz havuz projemiz. ",
    id: "muhammet-kızıl",
    bgImage: "/work-1.webp",
  },
  {
    title: "Kazım Kaynak Havuz Projesi",
    description: "Kazım Kaynak beye yapmış olduğumuz havuz projemiz. ",
    id: "kazım-kaynak",
    bgImage: "/work-2.webp",
  },
  {
    title: "DNT Nakliyat Önder Bey Havuz Projesi",
    description: "Önder beye yapmış olduğumuz havuz projemiz. ",
    id: "dnt-önder",
    bgImage: "/work-3.jpg",
  },
  {
    title: "Kinyas Bel Havuz Projesi",
    description: "Kinyas Bel beye yapmış olduğumuz havuz projemiz. ",
    id: "kinyas-bel",
    bgImage: "/work-4.webp",
  },
];
