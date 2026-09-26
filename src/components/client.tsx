"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { SectionHeading } from "./Decor";

export function ClientDemo() {
  const images = [
    "/Img/micro1.png",
    "/Img/afara_main.jpg",
    "/Img/afara_dark.jpg",
    "/Img/afara_purple.jpg",
    "/Img/zirro.jpg",
    "/Img/zirro_white.jpg",
    "/Img/weddn.jpg",
    "/Img/yoris.jpg",
    "/Img/yoris_main.jpg",
    "/Img/chapta.jpeg",
    "/Img/commune.jpg",
    "/Img/hep.png",
    "/Img/fudlist.png",
    "/Img/commune1.png",
    "/Img/dice.png",
    "/Img/dice1.png",
    "/Img/tens.png",
    "/Img/one.png",
    "/Img/two.png",
    "/Img/three.png",
    "/Img/four.png",
    "/Img/five.png",
    "/Img/six.png",
    "/Img/seven.png",
    "/Img/eight.png",
    "/Img/nine.png",
    "/Img/overview.png",
    "/Img/fudlist1.png",
    "/Img/logo.png",
    "/Img/fudlist2.png",
    "/Img/hep.png",
    "/Img/fanful.jpg",
    "/Img/fanful1.png",
    "/Img/tensfer.png",
    "/Img/tensfer_login.png",
    "/Img/feasibility.png",
    "/Img/work/Dashboard.jpg",
    "/Img/work/Landing-page.jpg",
    "/Img/work/Responsive-mobile-application.jpg",
    "/Img/work/admin_fudlist.jpg",
    "/Img/work/basetrader.png",
  ];

  return (
    <section id="gallery" className="section bg-white/[0.02]">
      <div className="shell">
        <SectionHeading
          eyebrow="Screens & shipped work"
          title="The"
          markedWord="Gallery"
        />
        <p className="section-paragraph">
          Interfaces, dashboards and app screens pulled straight from the
          projects above.
        </p>

        <div className="relative mt-12 border border-white/10 bg-[#08080c] p-2">
          <span
            aria-hidden="true"
            className="absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 border-blue-500"
          />
          <span
            aria-hidden="true"
            className="absolute -right-2 -bottom-2 h-5 w-5 border-r-2 border-b-2 border-blue-500"
          />
          <ThreeDMarquee images={images} />
        </div>
      </div>
    </section>
  );
}
