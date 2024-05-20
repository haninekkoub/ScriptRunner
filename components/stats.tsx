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
import { Highlight, Pill, StatsComponent } from "@/lib/types";

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
    [0.76, 0.78],
    ["#FF6200", "#FFFFFF"]
  );

  const titleFade = useSpring(
    useTransform(scrollYProgress, [0.17, 0.2], [0, -300]),
    {
      stiffness: 100,
      damping: 40,
      restDelta: 0.001,
    }
  );

  const pilSpringAnimations = [
    {
      x: useSpring(
        useTransform(
          scrollYProgress,
          [0.2, 0.3, 0.46, 0.49],
          [
            screenWidth * 0.1,
            screenWidth * 0.5,
            screenWidth * 0.5,
            screenWidth * 0.1,
          ]
        ),
        {
          stiffness: 400,
          damping: 75,
          restDelta: 0.001,
        }
      ),
      z: useSpring(
        useTransform(scrollYProgress, [0.2, 0.3, 0.46, 0.49], [-24, 0, 0, -24]),
        {
          stiffness: 400,
          damping: 75,
          restDelta: 0.001,
        }
      ),
    },
    {
      x: useSpring(
        useTransform(
          scrollYProgress,
          [0.2, 0.3, 0.46, 0.49],
          [
            screenWidth * 0.9,
            screenWidth * 0.5,
            screenWidth * 0.5,
            screenWidth * 0.9,
          ]
        ),
        {
          stiffness: 400,
          damping: 75,
          restDelta: 0.001,
        }
      ),
      z: useSpring(
        useTransform(scrollYProgress, [0.2, 0.3, 0.46, 0.49], [25, 0, 0, 25]),
        {
          stiffness: 400,
          damping: 75,
          restDelta: 0.001,
        }
      ),
    },
    {
      x: useSpring(
        useTransform(
          scrollYProgress,
          [0.2, 0.49],
          [screenWidth * 0.5, screenWidth * 0.5]
        ),
        {
          stiffness: 400,
          damping: 75,
          restDelta: 0.001,
        }
      ),
      z: useSpring(
        useTransform(scrollYProgress, [0.2, 0.3, 0.46, 0.49], [15, 0, 0, 15]),
        {
          stiffness: 400,
          damping: 75,
          restDelta: 0.001,
        }
      ),
    },
  ];

  return (
    <motion.div
      className="w-full relative lg:px-0 min-h-screen py-[160px] test"
      style={{ backgroundColor }}
      ref={ref}
    >
      <motion.div
        className="h-[350px] lg:h-[50vh] relative "
        style={{ y: titleFade }}
      >
        <motion.div className="sticky top-1/3 lg:top-[160px] flex flex-col gap-4 items-center lg:gap-6 text-white  ">
          <p className="uppercase">Stats</p>
          <h2 className=" text-6xl font-neueMontreal">Why now?</h2>
          <p className="text-center max-w-[640px]">
            As the scope of pharmacy expands, Script Runner&apos;s mission is to
            free up the time of pharmacists to allow them to focus on patient
            care and not on delivery and logistics
          </p>
        </motion.div>
      </motion.div>
      <div className="h-[500px] relativel">
        <div className="sticky top-[40%] lg:top-1/3 w-full ">
          <div className=" w-full flex flex-col gap-6 lg:gap-8 ">
            {pils.map((pils: Pill, index: number) => (
              <Pils
                key={index}
                orangePils={pils.orangePils}
                whitePils={pils.whitePils}
                x={pilSpringAnimations[index].x}
                z={pilSpringAnimations[index].z}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" pt-[200px] lg:pt-[40vh] mx-auto flex flex-col justify-center items-center gap-8 ">
        {highlights.map((highlight: Highlight, index: number) => {
          return <Highlights key={index} highlight={highlight.highlight} />;
        })}
      </div>
    </motion.div>
  );
}

const Highlights = ({ highlight }: Highlight) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const fadeUp = {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 200,
    transition: {
      duration: 300,
      type: "spring",
      stiffness: 200,
      damping: 17,
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
