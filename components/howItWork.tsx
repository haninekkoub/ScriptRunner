"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "./ui/card";
import { CardList } from "@/lib/types";

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

  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, screenWidth - scrollRange - 16]),
    {
      stiffness: 900,
      damping: 50,
      restDelta: 0.001,
    }
  );

  return (
    <section>
      <div className="h-fit flex flex-col gap-8 lg:hidden px-2">
        <div className="bg-cyan-500 rounded-2xl w-full h-60"></div>
        <div className="flex flex-col gap-4 ">
          <p className="uppercase text-primary">OFFERINGS</p>
          <h2 className="font-neueMontreal text-2xl font-medium">
            Unparalleled flexiblity that will fit any pharmacy&apos;s needs
          </h2>
          <p className="text-xl opacity-60">
            We give you the flexibility to deploy various last-mile offerings
          </p>
        </div>
      </div>
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
            <div className=" flex items-center lg:items-start lg:gap-10 h-[46vh] lg:h-fit lg:px-12 lg:py-16">
              <div className="h-[672px] flex items-center">
                <div className="gap-12  hidden lg:flex">
                  <div className="bg-cyan-500 rounded-2xl min-w-[min(46vw,670px)]"></div>
                  <div className="flex flex-col gap-6 py-8 w-[min(46vw,670px)]">
                    <p className="uppercase text-primary">OFFERINGS</p>
                    <h2 className=" font-neueMontreal text-[3.125rem] font-medium leading-[1.1]">
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
              </div>
              {content?.length > 0 && (
                <div className="flex gap-6">
                  {content.map((card, id) => {
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
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
