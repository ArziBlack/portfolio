import React from "react";
import Hero from "../components/hero";
import About from "../components/About";
import MyWork from "../components/my-work";
import ContactForm from "../components/conntact-form";
import Footer from "../components/Footer";
import NavigationDots from "../components/NavigationDots";
import SiteHeader from "../components/SiteHeader";
import { ClientDemo } from "@/components/client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { PROFILE, WHATSAPP_URL } from "@/lib/site";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandX,
  IconHome,
  IconLayoutGrid,
  IconMail,
  IconUser,
} from "@tabler/icons-react";

const Home: React.FC = () => {
  const iconClass = "h-full w-full text-white";

  const links = [
    { title: "Home", icon: <IconHome className={iconClass} />, href: "#home" },
    { title: "About", icon: <IconUser className={iconClass} />, href: "#about" },
    {
      title: "Work",
      icon: <IconLayoutGrid className={iconClass} />,
      href: "#work",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className={iconClass} />,
      href: WHATSAPP_URL,
    },
    {
      title: "Email",
      icon: <IconMail className={iconClass} />,
      href: `mailto:${PROFILE.emails[1]}`,
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className={iconClass} />,
      href: PROFILE.github,
    },
    {
      title: "Twitter",
      icon: <IconBrandX className={iconClass} />,
      href: PROFILE.twitter,
    },
  ];

  return (
    <>
      <SiteHeader />
      <NavigationDots />

      <main>
        <Hero />
        <About />
        <MyWork />
        <ClientDemo />
        <ContactForm />
      </main>

      <Footer />

      <div className="pointer-events-none fixed bottom-5 z-40 flex w-full items-center justify-center">
        <div className="pointer-events-auto">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
      </div>
    </>
  );
};

export default Home;
