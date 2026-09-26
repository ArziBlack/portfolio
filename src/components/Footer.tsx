import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { SECTIONS, PROFILE, WHATSAPP_URL } from "@/lib/site";

const Footer: React.FC = () => (
  <footer className="mt-10 border-t border-white/10 bg-[#08080c] pb-28">
    <div className="shell grid gap-10 py-16 md:grid-cols-3">
      <div>
        <img
          src="/brand/single_logo.png"
          alt={PROFILE.name}
          className="h-36 w-auto shrink-0 mix-blend-screen"
        />
        <p className="mt-5 max-w-xs text-xs leading-relaxed text-white/40">
          {PROFILE.role} — building web, desktop and mobile products end to end.
        </p>
      </div>

      <div>
        <p className="eyebrow-muted mb-5">Sections</p>
        <ul className="space-y-3">
          {SECTIONS.map(({ id, label, index }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/50 uppercase transition-colors hover:text-white"
              >
                <span className="text-blue-500">{index}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="eyebrow-muted mb-5">Elsewhere</p>
        <div className="flex gap-3">
          {[
            { href: PROFILE.github, label: "GitHub", icon: <FaGithub /> },
            { href: PROFILE.twitter, label: "X", icon: <FaTwitter /> },
            {
              href: WHATSAPP_URL,
              label: "WhatsApp",
              icon: <IconBrandWhatsapp size={18} />,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40">{PROFILE.phoneDisplay}</p>
      </div>
    </div>

    <div className="shell flex flex-col gap-2 border-t border-white/10 py-6 text-[10px] tracking-[0.24em] text-white/25 uppercase md:flex-row md:items-center md:justify-between">
      <span>
        © {new Date().getFullYear()} {PROFILE.name}
      </span>
      <span>Built with React, Vite & TailwindCSS</span>
    </div>
  </footer>
);

export default Footer;
