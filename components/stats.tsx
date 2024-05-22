"use client";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Pils from "./ui/pils";
import { Highlight, StatsComponent } from "@/lib/types";

export default function Stats({ pils, highlights }: StatsComponent) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setScreenWidth(viewportWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["#FF6200", "#FFFFFF"]
  );

  const titleFade = useSpring(
    useTransform(scrollYProgress, [0.2, 0.25], [0, -400]),
    {
      stiffness: 300,
      damping: 40,
      restDelta: 0.001,
    }
  );

  const pilSpringAnimations = [
    {
      bgColors: "linear-gradient(180deg, #fb701b, #ffa36b 56.5%, #e65700)",
      left: useSpring(
        useTransform(
          scrollYProgress,
          [0.17, 0.45, 0.54, 0.81],
          [
            screenWidth * 0.1,
            screenWidth * 0.5,
            screenWidth * 0.5,
            screenWidth * 0.1,
          ]
        ),
        {
          stiffness: 900,
          damping: 50,
          restDelta: 0.001,
        }
      ),
      rotateZ: useSpring(
        useTransform(
          scrollYProgress,
          [0.17, 0.45, 0.54, 0.81],
          [-24, 0, 0, -24]
        ),
        {
          stiffness: 900,
          damping: 50,
          restDelta: 0.001,
        }
      ),
    },
    {
      bgColors: "linear-gradient(180deg, #fb9e1b, #ffc16b 56.5%, #e68600)",
      left: useSpring(
        useTransform(
          scrollYProgress,
          [0.17, 0.45, 0.54, 0.81],
          [
            screenWidth * 0.9,
            screenWidth * 0.5,
            screenWidth * 0.5,
            screenWidth * 0.9,
          ]
        ),
        {
          stiffness: 900,
          damping: 50,
          restDelta: 0.001,
        }
      ),
      rotateZ: useSpring(
        useTransform(scrollYProgress, [0.17, 0.45, 0.54, 0.81], [25, 0, 0, 25]),
        {
          stiffness: 900,
          damping: 50,
          restDelta: 0.001,
        }
      ),
    },
    {
      bgColors: "linear-gradient(180deg, #fb411b, #ff836b 56.5%, #e62600)",
      rotateZ: useSpring(
        useTransform(scrollYProgress, [0.17, 0.45, 0.54, 0.81], [15, 0, 0, 15]),
        {
          stiffness: 900,
          damping: 120,
          restDelta: 0.001,
        }
      ),
    },
  ];

  return (
    <motion.div
      id="switchheadercolor2"
      className="w-full relative lg:px-0 min-h-screen py-[160px] overflow bg-white"
      style={{ backgroundColor }}
      ref={ref}
    >
      <motion.div
        className="h-[350px] lg:h-[68vh] relative "
        style={{ y: titleFade }}
      >
        <motion.div className="sticky top-1/3 lg:top-[160px] flex flex-col gap-4 items-center lg:gap-6 text-white  ">
          <p className="uppercase">Stats</p>
          <h2 className=" text-6xl font-neueMontreal">Why now?</h2>
          <p className="text-center text-base lg:text-2xl max-w-[680px]">
            As the scope of pharmacy expands, Script Runner&apos;s mission is to
            free up the time of pharmacists to allow them to focus on patient
            care and not on delivery and logistics
          </p>
        </motion.div>
      </motion.div>
      <div className="h-[600px] relativel">
        <div className="sticky top-[40%] lg:top-1/3 w-full ">
          <div className=" w-full flex flex-col gap-6 lg:gap-8 ">
            {pils.map((pils, index) => (
              <Pils
                key={index}
                bgColors={pilSpringAnimations[index].bgColors}
                leftPils={pils.leftPils}
                whitePils={pils.whitePils}
                left={pilSpringAnimations[index].left}
                rotateZ={pilSpringAnimations[index].rotateZ}
              />
            ))}
          </div>
        </div>
      </div>
      {highlights?.length > 0 && (
        <div className="py-[200px] lg:py-[40vh] mx-auto flex flex-col justify-center items-center gap-8 lg:gap-10 ">
          {highlights.map((highlight, index) => {
            return <Highlights key={index} highlight={highlight.highlight} />;
          })}
        </div>
      )}
    </motion.div>
  );
}

const Highlights = ({ highlight }: Highlight) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const fadeUp = {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 300,
    transition: {
      duration: 400,
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  };
  return (
    <motion.p
      className="text-3xl lg:text-6xl text-primary font-neueMontreal text-center"
      ref={ref}
      animate={fadeUp}
    >
      {highlight}
    </motion.p>
  );
};
