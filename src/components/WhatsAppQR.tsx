import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { PROFILE, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

interface WhatsAppQRProps {
  className?: string;
  size?: number;
}

/**
 * Scannable block that opens a WhatsApp chat with me. The QR encodes the same
 * wa.me link the button below it uses, so phone and desktop both have a route.
 */
const WhatsAppQR: React.FC<WhatsAppQRProps> = ({ className, size = 168 }) => {
  return (
    <div
      className={cn(
        "relative border border-white/10 bg-[#08080c] p-6",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-blue-500"
      />
      <span
        aria-hidden="true"
        className="absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-blue-500"
      />

      <p className="eyebrow mb-1">Scan me</p>
      <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
        Chat on WhatsApp
      </p>

      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        {/* White plate — QR needs the light quiet zone to scan reliably. */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open a WhatsApp chat with ${PROFILE.name}`}
          className="group relative block bg-white p-3 transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1"
          style={{ boxShadow: "8px 8px 0 0 #3b82f6" }}
        >
          <QRCodeSVG
            value={WHATSAPP_URL}
            size={size}
            level="M"
            bgColor="#ffffff"
            fgColor="#08080c"
            marginSize={0}
          />
        </a>

        <div className="min-w-0">
          <p className="text-xs leading-relaxed text-white/50">
            Point your camera at the block — it opens a chat with me, message
            already written.
          </p>
          <p className="mt-4 font-display text-sm text-white">
            {PROFILE.phoneDisplay}
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-block mt-5"
          >
            <IconBrandWhatsapp size={16} />
            <span>Message me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppQR;
