import React from "react";
import Hero from "../components/hero";
// import Clients from '../components/clients';
import MyWork from "../components/my-work";
import ContactForm from "../components/conntact-form";
import { ClientDemo } from "@/components/client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const Home: React.FC = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white dark:text-white" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-white dark:text-white" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-white dark:text-white" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-white dark:text-white" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white dark:text-white" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-white" />
      ),
      href: "#",
    },
  ];
  return (
    <>
      <Hero />
      <MyWork />
      <ClientDemo />
      {/* <Clients /> */}
      <ContactForm />
      <div className="fixed bottom-5 h-100vh flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </>
  );
};

export default Home;
