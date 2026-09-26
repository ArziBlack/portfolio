export type WorkCategory =
  | "Web App"
  | "Dashboard"
  | "Mobile"
  | "Backend"
  | "Engineering";

const RECENT_WORK: WorkData[] = [
  {
    id: "micro1",
    imageSrc: "/Img/micro1.png",
    title: "Micro1",
    description:
      "Worked as Senior FreeCAD Engineer, leading end-to-end parametric modeling projects — constrained sketches, model trees and reusable BIM components — plus IFC import/export and validation for AI training data pipelines.",
    badges: ["FreeCAD", "BIM", "IFC"],
    category: "Engineering",
    year: "2026",
  },
  {
    id: "afara",
    imageSrc: "/Img/afara_main.jpg",
    title: "Afara",
    description:
      "A payment gateway service web app — built as a Next.js CMS with a clean, fast interface across the core payment flows.",
    badges: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "Web App",
    year: "2025",
  },
  {
    id: "zirro",
    imageSrc: "/Img/zirro.jpg",
    title: "Zirro",
    description:
      "Zirro.co is an all-in-one business management platform for ecommerce, bookings, hotel and retail. Built a full CMS across frontend and backend with TypeScript and Go, and revamped the landing page.",
    badges: ["TypeScript", "Go", "CMS"],
    category: "Dashboard",
    year: "2026",
  },
  {
    id: "weddn",
    imageSrc: "/Img/weddn.jpg",
    title: "Weddn",
    description:
      "Weddn.co is a wedding planning platform for couples, planners and guests. Enhanced the dashboard UI, built a secure authentication flow with TypeScript and Go, and shipped bulk-invitation messaging.",
    badges: ["TypeScript", "Go"],
    category: "Web App",
    year: "2025",
  },
  {
    id: "yoris",
    imageSrc: "/Img/yoris_main.jpg",
    title: "Yoris",
    description:
      "A logistics service app handling international shipping from China to Africa — built as a Next.js CMS covering the core shipment and tracking flows.",
    badges: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "Web App",
    year: "2025",
  },
];

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
  ...RECENT_WORK,
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
      "Built admin controllers, endpoints and an SDK for the application and dashboard, and created 3D pipe models and workflows in FreeCAD for an oil and gas spill quantification application.",
    badges: ["Node.js", "FreeCAD", "TypeScript"],
    category: "Backend",
    year: "2024",
  },
  {
    id: "6",
    imageSrc: "/Img/chapta.jpeg",
    title: "Chapta",
    description:
      "Chapta is an edtech startup helping low-to-mid tier African schools digitize operations using simple, familiar tools like Google Sheets, WhatsApp, SMS, and AI. Built with Node.js, Mongoose and JWT authentication, with AI-driven student performance suggestions and analytics dashboards.",
    badges: ["Node.js", "Mongoose", "JWT"],
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
  "Engineering",
];
