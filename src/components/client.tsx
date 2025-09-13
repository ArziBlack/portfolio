"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ClientDemo() {
  const images = [
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
    "/Img/chapta.jpeg",
    "/Img/chapta.jpeg",
    "/Img/chapta.jpeg",
    "/Img/chapta.jpeg",
    "/Img/chapta.jpeg",
    "/Img/chapta.jpeg",
    "/Img/chapta.jpeg",
  ];
  return (
    <div className="mx-auto my-2 max-w-7xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
