export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface Doctor {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Review {
  name: string;
  text: string;
  tag: string;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export const clinic = {
  name: "Stomatološka ordinacija dr Jovanović",
  phone: "+387 65 010 200",
  viber: "+387 65 010 200",
  email: "info@drjovanovic.com",
  address: "Jovana Cvijića 27, 76300 Bijeljina",
};

export const services: Service[] = [
  {
    id: "pregled",
    name: "Pregled i savjetovanje",
    description:
      "Detaljan pregled, procjena stanja zuba i jasan plan terapije prije početka liječenja.",
    price: "od 20 KM",
  },
  {
    id: "plombe",
    name: "Estetske plombe",
    description:
      "Prirodno oblikovane plombe u boji zuba za funkcionalan i estetski rezultat.",
    price: "od 60 KM",
  },
  {
    id: "kamenac",
    name: "Skidanje kamenca",
    description:
      "Ultrazvučno uklanjanje kamenca uz završno poliranje za čist i svjež osmijeh.",
    price: "od 50 KM",
  },
  {
    id: "bijeljenje",
    name: "Izbjeljivanje zuba",
    description:
      "Profesionalno izbjeljivanje u ordinaciji za vidljivo svjetliji i blistaviji osmijeh.",
    price: "od 250 KM",
  },
  {
    id: "djeca",
    name: "Dječija stomatologija",
    description:
      "Pažljiv pristup najmlađim pacijentima i stvaranje pozitivnog odnosa prema stomatologu.",
    price: "od 25 KM",
  },
  {
    id: "protetika",
    name: "Krunice i mostovi",
    description:
      "Estetska i funkcionalna protetika izrađena uz saradnju sa našom laboratorijom.",
    price: "od 300 KM",
  },
];

export const doctors: Doctor[] = [
  {
    name: "dr Milica Jovanović",
    role: "Doktor stomatologije",
    initials: "MJ",
    bio: "Bavi se opštom stomatologijom i estetskim plombama, sa posebnim fokusom na prirodan izgled osmijeha.",
  },
  {
    name: "dr Nikola Petrović",
    role: "Specijalista protetike",
    initials: "NP",
    bio: "Bavi se protetikom i izradom krunica, mostova i proteza, sa više od 12 godina iskustva.",
  },
  {
    name: "dr Jelena Savić",
    role: "Stomatolog za djecu",
    initials: "JS",
    bio: "Poseban pristup djeci i njihovim prvim posjetama stomatologu, uz strpljenje i puno razumijevanja.",
  },
];

export const hours = [
  {
    day: "Ponedjeljak – petak",
    time: "08:00 – 19:00",
  },
  {
    day: "Subota",
    time: "09:00 – 14:00",
  },
  {
    day: "Nedjelja",
    time: "Zatvoreno",
  },
];

export const slots = [
  "09:00",
  "10:30",
  "12:00",
  "14:00",
  "16:30",
  "18:00",
];

export const images = {
  hero: "/hero.jpg",
  clinic: "/dentist.jpg",
  services: "/usluge.jpg",
  smile: "/smile.jpg",
  doctors: [
    "/doktor-1.jpg",
    "/doktor-3.jpg",
    "/doktor-2.jpg",
  ],
};

export const steps = [
  {
    number: "01",
    title: "Zakažete termin",
    text: "Odaberite uslugu i termin putem forme ili nas kontaktirajte telefonom.",
  },
  {
    number: "02",
    title: "Pregled i plan",
    text: "Nakon pregleda dobijate jasan plan terapije i procjenu troškova.",
  },
  {
    number: "03",
    title: "Liječenje bez žurbe",
    text: "Radimo pažljivo i prilagođavamo tretman vašim potrebama.",
  },
  {
    number: "04",
    title: "Kontrola",
    text: "Pratimo vaš napredak i podsjećamo vas kada je vrijeme za kontrolu.",
  },
];

export const reviews: Review[] = [
  {
    name: "Ana M.",
    tag: "Dječija stomatologija",
    text: "Sin je prvi put sjeo u stomatološku stolicu i nije plakao. Doktorica mu je sve objasnila kroz igru.",
  },
  {
    name: "Stefan R.",
    tag: "Pregled i savjetovanje",
    text: "Dobio sam tačnu cijenu prije nego što smo počeli i sve je bilo jasno od samog početka.",
  },
  {
    name: "Marija K.",
    tag: "Izbjeljivanje zuba",
    text: "Izbjeljivanje je prošlo brzo i prijatno. Posebno mi se dopao odnos prema pacijentu.",
  },
];

export const features: Feature[] = [
  {
    icon: "monitor",
    title: "Savremena oprema",
    text: "Digitalna dijagnostika i savremena oprema za precizniji i sigurniji tretman.",
  },
  {
    icon: "heart",
    title: "Ugodno liječenje",
    text: "Posvećujemo vrijeme svakom pacijentu i radimo u opuštenoj atmosferi.",
  },
  {
    icon: "coin",
    title: "Jasne cijene",
    text: "Troškove terapije objašnjavamo unaprijed, bez skrivenih iznenađenja.",
  },
  {
    icon: "shield",
    title: "Iskusan tim",
    text: "Tim koji objedinjuje različite oblasti stomatologije na jednom mjestu.",
  },
];