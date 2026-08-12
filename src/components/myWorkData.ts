export type WorkCategory =
  | "Web App"
  | "Dashboard"
  | "Mobile"
  | "Backend";

export interface WorkData {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
  category: WorkCategory;
  year: string;
  href?: string;
}

export const myWorkData: WorkData[] = [
  {
    id: "1",
    imageSrc: "/Img/fudlist.png",
    title: "FudList",
    description:
      "Worked on the admin dashboard for Fudlist food vendor website, translated figma design to react js code, integrated APIs and used Redux state management.",
    badges: ["React", "Node.js", "MongoDB", "Express"],
    category: "Dashboard",
    year: "2023",
  },
  {
    id: "2",
    imageSrc: "/Img/tens.png",
    title: "Tensfer",
    description:
      "Developed the Dashboard of the Crypto exchange startup and worked remotely with team members, also made the dashboard mobile friendly.",
    badges: ["React", "Redux", "TypeScript"],
    category: "Dashboard",
    year: "2023",
  },
  {
    id: "3",
    imageSrc: "/Img/commune.png",
    title: "Commune",
    description:
      "Fixed crashing application, implemented voice and video calls using Agora SDK and implemented OTP SMS Verification using Twilio.",
    badges: ["React Native", "Agora SDK", "Twilio"],
    category: "Mobile",
    year: "2024",
  },
  {
    id: "4",
    imageSrc: "/Img/fanful.jpg",
    title: "Fanful",
    description:
      "Worked on creating different controllers with endpoints on different routes for managing the admin operations, also worked on an SDK used in the app and dashboard.",
    badges: ["Node.js", "Express", "TypeScript"],
    category: "Backend",
    year: "2024",
  },
  {
    id: "5",
    imageSrc: "/Img/feasibility.png",
    title: "Feasibility Giant",
    description:
      "A scalable e-commerce solution with a focus on user experience and a fast, accessible storefront.",
    badges: ["Next.js", "Stripe", "TypeScript", "TailwindCSS"],
    category: "Web App",
    year: "2024",
  },
  {
    id: "6",
    imageSrc: "/Img/chapta.jpeg",
    title: "Chapta",
    description:
      "Chapta is an edtech startup helping low-to-mid tier African schools digitize operations using simple, familiar tools like Google Sheets, WhatsApp, SMS, and AI.",
    badges: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "Web App",
    year: "2025",
  },
  {
    id: "7",
    imageSrc: "/Img/hep.png",
    title: "HEP",
    description:
      "Built out the marketing surface and internal tooling screens, keeping a single design language across every view.",
    badges: ["React", "TailwindCSS"],
    category: "Web App",
    year: "2023",
  },
  {
    id: "8",
    imageSrc: "/Img/dice.png",
    title: "Dice",
    description:
      "Interface work on a product dashboard — data-dense views, filtering and state handling built to stay fast as records grow.",
    badges: ["React", "Redux"],
    category: "Dashboard",
    year: "2023",
  },
  {
    id: "9",
    imageSrc: "/Img/overview.png",
    title: "Basetrader",
    description:
      "Trading overview screens with live figures, charting panels and a layout that holds together from desktop down to mobile.",
    badges: ["React", "TypeScript"],
    category: "Web App",
    year: "2022",
  },
];

export const WORK_CATEGORIES: ("All" | WorkCategory)[] = [
  "All",
  "Web App",
  "Dashboard",
  "Mobile",
  "Backend",
];
