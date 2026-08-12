import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";
import { SectionHeading } from "./Decor";
import WhatsAppQR from "./WhatsAppQR";
import { PROFILE, WHATSAPP_URL } from "@/lib/site";

const Form: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const summary = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

  // No backend here, so the form hands off to a real channel instead of
  // silently doing nothing like it used to.
  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project enquiry${form.name ? ` from ${form.name}` : ""}`
    );
    window.location.href = `mailto:${PROFILE.emails[1]}?subject=${subject}&body=${encodeURIComponent(summary)}`;
  }

  function sendWhatsApp() {
    const text = encodeURIComponent(
      `Hi Milton, I found your portfolio.\n\n${summary}`
    );
    window.open(
      `https://wa.me/${PROFILE.phoneRaw}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="hire" className="section">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Let's build something"
            title="Hire"
            markedWord="Me"
          />
          <p className="section-paragraph">
            Feel free to reach out any time, through any of the channels below —
            or just scan the block and message me straight away.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Form block */}
            <form onSubmit={sendEmail} className="border border-white/10 p-6 md:p-10">
              <div className="space-y-8">
                <div>
                  <label htmlFor="contact-name" className="field-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="field"
                    name="name"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="field-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="field"
                    name="email"
                    placeholder="you@company.com"
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    className="field resize-none"
                    placeholder="What are you building?"
                    onChange={handleChange}
                    value={form.message}
                    required
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button type="submit" className="btn-block">
                  <IconMail size={16} />
                  <span>Send it</span>
                </button>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="btn-ghost"
                >
                  <IconBrandWhatsapp size={16} />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </form>

            {/* Channels + QR */}
            <div className="space-y-8">
              <WhatsAppQR />

              <div className="border border-white/10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 border-b border-white/10 px-6 py-5 transition-colors hover:bg-blue-500/10"
                >
                  <IconPhone size={18} className="text-blue-400" />
                  <span className="text-sm text-white/70 group-hover:text-white">
                    {PROFILE.phoneDisplay}
                  </span>
                </a>
                {PROFILE.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}?subject=${encodeURIComponent(
                      "Project enquiry"
                    )}`}
                    className="group flex items-center gap-4 border-b border-white/10 px-6 py-5 transition-colors last:border-b-0 hover:bg-blue-500/10"
                  >
                    <IconMail size={18} className="text-blue-400" />
                    <span className="text-sm break-all text-white/70 group-hover:text-white">
                      {email}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="flex h-14 w-14 items-center justify-center border border-white/10 text-white/70 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <FaGithub size="1.4rem" />
                </a>
                <a
                  href={PROFILE.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="X / Twitter"
                  className="flex h-14 w-14 items-center justify-center border border-white/10 text-white/70 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <FaTwitter size="1.4rem" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="WhatsApp"
                  className="flex h-14 w-14 items-center justify-center border border-white/10 text-white/70 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <IconBrandWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => <Form />;

export default ContactForm;
