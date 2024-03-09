"use client";

import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SocialIcon } from "react-social-icons";
const { useRef } = React;

const Hayme = () => {
  const addressBlock = useRef<HTMLDivElement | null>(null);
  const addressContent = useRef<HTMLDivElement | null>(null);
  const contactBlock = useRef<HTMLDivElement | null>(null);
  const contactContent = useRef<HTMLDivElement | null>(null);
  const mainImageBlock = useRef<HTMLDivElement | null>(null);
  const mainImageContent = useRef<HTMLDivElement | null>(null);
  const headTrigger = useRef<HTMLDivElement | null>(null);
  const [divCount, setDivCount] = useState<number[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: headTrigger.current,
        start: "top top",
        // end: "15000 bottom",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    if (addressBlock.current) {
      tl.to(addressBlock.current, { x: "-=36vw" }, 0);
    }
    if (addressContent.current) {
      tl.to(addressContent.current, { x: "-=26vw" }, 0);
    }
    if (contactBlock.current) {
      tl.to(contactBlock.current, { x: "+=13vw" }, 0);
    }
    if (contactContent.current) {
      tl.to(contactContent.current, { x: "+=15vw", opacity: 1 }, 0);
    }
    if (mainImageBlock.current) {
      tl.to(mainImageBlock.current, { x: "-=10vw" }, 0);
    }
    if (mainImageContent.current) {
      tl.to(mainImageContent.current, { x: "-=10vw", opacity: 1 }, 0);
    }

    setDivCount(() => {
      return Array.from({ length: 3 }).map(() => getRandomNumber());
    });
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 2;
  }

  function generateDivElements(count: number) {
    return Array.from({ length: count }, (_, index) => (
      <div key={`${index}-${Math.random()}`} className="flex-1 bg-black" />
    ));
  }

  return (
    <div
      ref={headTrigger}
      className="h-screen flex flex-col items-center justify-center"
    >
      {/* Address */}
      <div
        ref={addressBlock}
        className="flex flex-col h-20 w-full gap-1 z-9 fixed"
        style={{ right: "63vw" }}
      >
        {generateDivElements(divCount[0])}
      </div>
      <div ref={addressContent}>
        <h1 className="text-3xl font-light text-center">Hey There! I'm</h1>
        <h1 className="text-5xl font-extrabold text-center">Hayme Belgica</h1>
      </div>

      {/* Contacts */}
      <div
        ref={contactBlock}
        className="flex flex-col h-20 w-full gap-1 z-9 fixed mt-64 -left-full "
      >
        {generateDivElements(divCount[1])}
      </div>
      <div
        ref={contactContent}
        className="flex flex-col gap-2 fixed mt-64 -left-0 opacity-0"
      >
        <h1 className="text-3xl font-light text-center">Connect with me</h1>
        <div className="flex gap-2">
          <SocialIcon
            network="github"
            target="_blank"
            href="https://github.com/Bukangliwayway"
          />
          <SocialIcon
            network="dribbble"
            target="_blank"
            href="https://dribbble.com/haymeb"
          />
          <SocialIcon
            network="facebook"
            target="_blank"
            href="https://www.facebook.com/haymeeeb"
          />
          <SocialIcon
            network="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/james-matthew-belgica-b044a4193/"
          />
        </div>
      </div>

      {/* mainPic */}
      <div
        ref={mainImageBlock}
        className="flex flex-col h-4/5 w-full gap-3 z-9 fixed mt-24 -right-full"
      >
        {generateDivElements(divCount[2])}
      </div>
      <div ref={mainImageContent} className="fixed -right-0 opacity-0">
        <img src="/front.png" />
      </div>
    </div>
  );
};

export default Hayme;
