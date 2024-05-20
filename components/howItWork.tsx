"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "./ui/card";
import { CardList, CardType } from "@/lib/types";

export default function HowItWork({ content }: CardList) {
  const [scrollRange, setScrollRange] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    setScrollRange(scrollRef.current!.scrollWidth);
    const clampedViewportWidth = Math.min(screenWidth, 1440);
    setScrollRange(clampedViewportWidth);
  }, [scrollRef, screenWidth]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const clampedViewportWidth = Math.min(viewportWidth, 1440);
      setScreenWidth(clampedViewportWidth);
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screenWidth - scrollRange - 20]
  );

  return (
    <div
      className="relative max-w-[1440px] mx-auto"
      ref={targetRef}
      style={{ height: scrollRange }}
    >
      <div className="sticky top-0 h-screen  px-2 lg:px-0 lg:mx-auto overflow-hidden ">
        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="h-full w-fit flex items-center relative"
        >
          <div className=" flex items-center lg:gap-10 h-[46vh] lg:px-12">
            <div className="gap-12 h-fit hidden lg:flex">
              <div className="bg-cyan-500 rounded-2xl hidden lg:block min-w-[min(46vw,670px)]"></div>
              <div className="hidden lg:flex flex-col gap-6 py-8 w-[min(46vw,670px)]">
                <p className="uppercase text-primary">OFFERINGS</p>
                <h2 className=" font-neueMontreal text-5xl font-medium">
                  Unparalleled flexiblity <br />
                  that will fit any <br />
                  pharmacy&apos;s needs
                </h2>
                <p className=" text-2xl opacity-60 w-2/3">
                  We give you the flexibility to deploy various last-mile
                  offerings
                </p>
              </div>
            </div>
            <div className="flex gap-6 ">
              {content?.map((card: CardType, id: number) => {
                return (
                  <Card
                    key={id}
                    id={id + 1}
                    image={card.image}
                    title={card.title}
                    info={card.info}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
