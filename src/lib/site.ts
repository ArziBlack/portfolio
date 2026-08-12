export const SECTIONS = [
  { id: "home", label: "Home", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "work", label: "Work", index: "03" },
  { id: "gallery", label: "Gallery", index: "04" },
  { id: "hire", label: "Contact", index: "05" },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export const PROFILE = {
  name: "Milton Black",
  first: "Milton",
  last: "Black",
  role: "Fullstack Developer",
  phoneDisplay: "+234 903 728 9192",
  phoneRaw: "2349037289192",
  emails: ["arziblack2@gmail.com", "eghoiazibapu@gmail.com"],
  github: "https://github.com/MiltonBlack",
  twitter: "https://twitter.com/Miltonblack13",
  location: "Lagos, Nigeria",
};

export const WHATSAPP_MESSAGE =
  "Hi Milton, I found your portfolio and I'd like to talk about a project.";

export const WHATSAPP_URL = `https://wa.me/${PROFILE.phoneRaw}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
