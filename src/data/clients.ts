import type { ImageMetadata } from "astro";
import starsoft from "../assets/clients/starsoft.png";
import antares from "../assets/clients/logo-antaresgolden.png";
import brent from "../assets/clients/logo-brentservice.png";
import autonomoz from "../assets/clients/autonomoz.png";
import agile from "../assets/clients/agile-innovatti-icon.png";
import aparas from "../assets/clients/aparas-macedo.png";
import funeraria from "../assets/clients/logo-funeraria.png";
import rs from "../assets/clients/rsaccountants.png";
import schioppa from "../assets/clients/schioppa.webp";
import ministrapp from "../assets/clients/ministrapp-icon.png";

export type Client = { name: string; logo: ImageMetadata; onHome: boolean };

// Same list and order as the previous /clientes page; onHome marks the eight the old home page showed.
export const clients: Client[] = [
  { name: "StarSoft", logo: starsoft, onHome: true },
  { name: "Antares Golden", logo: antares, onHome: true },
  { name: "Brent Service", logo: brent, onHome: true },
  { name: "Autonomoz", logo: autonomoz, onHome: true },
  { name: "Agile Innovatti", logo: agile, onHome: true },
  { name: "Aparas Macedo", logo: aparas, onHome: false },
  { name: "Funerária Central de Barueri", logo: funeraria, onHome: true },
  { name: "R&S Accountants", logo: rs, onHome: false },
  { name: "Schioppa", logo: schioppa, onHome: true },
  { name: "MinistrApp", logo: ministrapp, onHome: true },
];
