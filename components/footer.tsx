"use client";

import { useInView } from "framer-motion";
import Cta from "./ui/cta";
import Links from "./ui/links";
import { useRef } from "react";
import { FooterType } from "@/lib/types";

export default function Footer({
  ctaComponent,
  footerText,
  links,
  leftLinks,
}: FooterType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const textfade = {
    opacity: isInView ? 1 : 0,
    transitionDelay: "3s",
    transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  return (
    <div className="flex flex-col bg-red-400" ref={ref}>
      {ctaComponent.cta && (
        <Cta hero={ctaComponent.ctaTitle} button={ctaComponent.ctabutton} />
      )}
      <div className="h-screen w-screen text-white fixed bottom-0">
        <div className="bg-primary  flex items-end relative h-full w-full pb-[17vh] lg:pb-[24vh]">
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between items-start lg:items-center mx-8 w-full ">
            <div className="flex flex-col lg:flex-row gap-6 text-sm font-medium">
              <div>{footerText}</div>
              {links.map((link) => (
                <Links
                  key={link._key}
                  link={link.link}
                  text={link.content}
                  svg={false}
                />
              ))}
              <span className="h-[1px] w-0 bg-white absolute top-[100%] left-0 group-hover:w-full transition-width duration-300 rounded-3xl"></span>
            </div>
            {leftLinks?.length > 0 && (
              <div className="flex flex-col lg:flex-row gap-6 ">
                {leftLinks.map((leftLink) => (
                  <Links
                    key={leftLink._key}
                    link={leftLink.link}
                    text={leftLink.content}
                    svg={true}
                  />
                ))}
              </div>
            )}
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
