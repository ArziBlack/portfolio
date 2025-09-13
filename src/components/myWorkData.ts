interface WorkData {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
}

export const myWorkData: WorkData[] = [
  {
    id: "1",
    imageSrc: "/Img/fudlist.png", // Placeholder image
    title: "FudList",
    description:
      "Worked on the admin dashboard for Fudlist food vendor website, translated figma design to react js code, integrated APIs and used Redux state management. ",
    badges: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "2",
    imageSrc: "/Img/tens.png", // Placeholder image
    title: "Tensfer",
    description:
      "Developed the Dashboard of the Crypto exchange startup and worked remotely with team members, also made the dashboard mobile friendly. ",
    badges: ["React Native", "Firebase", "Redux"],
  },
  {
    id: "3",
    imageSrc: "/Img/commune.png", // Placeholder image
    title: "Commune",
    description:
      "Fixed crashing application, implemented voice and video calls using Agora SDK and implemented OTP SMS Verification using Twilo. ",
    badges: ["Next.js", "Stripe", "TypeScript", "TailwindCSS"],
  },
  {
    id: "4",
    imageSrc: "/Img/fanful.jpg", // Placeholder image
    title: "Fanful",
    description:
      "Worked on Creating different controllers with endpoints on different routes for managing the admin operations, also worked on an SDK used in the app and dashboard. ",
    badges: ["Next.js", "Stripe", "TypeScript", "TailwindCSS"],
  },
  {
    id: "5",
    imageSrc: "/Img/feasibility.png", // Placeholder image
    title: "Feasibility Giant",
    description:
      "A scalable e-commerce solution with a focus on user experience.",
    badges: ["Next.js", "Stripe", "TypeScript", "TailwindCSS"],
  },
  {
    id: "6",
    imageSrc: "/Img/chapta.jpeg", // Placeholder image
    title: "Chapta",
    description:
      " Chapta is an edtech startup helping low-to-mid tier African schools digitize operations using simple, familiar tools like Google Sheets, WhatsApp, SMS, and AI.",
    badges: ["Next.js", "Stripe", "TypeScript", "TailwindCSS"],
  },
];
