"use client";

import { useInView } from "framer-motion";
import Cta from "./ui/cta";
import Links from "./ui/links";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const textfade = {
    opacity: isInView ? 1 : 0,
    transitionDelay: "3s",
    transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  const cta = true;
  return (
    <div className="flex flex-col" ref={ref}>
      {cta && <Cta />}
      <div className="min-h-[400px] lg:min-h-[340px] w-full text-white fixed bottom-0">
        <div className="bg-primary  relative min-h-[400px] lg:min-h-[340px] pt-20">
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between items-start lg:items-center mx-8  ">
            <div className="flex flex-col lg:flex-row gap-6 text-sm font-medium">
              <div>© 2024 Script Runner. All rights reserved.</div>
              <div>Privacy Policy</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <Links link={"/"} text={"sales@scriptrunner.ai"} />
              <Links link={"/"} text={"Book a demo"} />
            </div>
          </div>
          <div
            className=" font-neueMontreal font-bold text-[calc(23200vw/1440)] whitespace-nowrap leading-[50%] absolute bottom-0 -left-2 lg:-left-8"
            style={textfade}
          >
            Script Runner
          </div>
        </div>
      </div>
    </div>
  );
}
