"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Benefits() {
  const reference = useRef(null);
  const { scrollYProgress } = useScroll({ target: reference });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.01], [1, 0.9]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scaletwo = useSpring(
    useTransform(scrollYProgress, [0.5, 0.55], [1, 0.9]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );
  return (
    <section
      className="flex flex-col items-center gap-16 px-2 py-16 lg:px-12 lg:py-32"
      ref={reference}
    >
      <div className="w-2/3 mx-auto ">
        <p className="text-primary w-fit mx-auto mb-6 font-medium">BENEFITS</p>
        <h2 className=" font-neueMontreal text-6xl text-center">
          Our software streamlines your existing delivery process
        </h2>
      </div>
      <motion.div className="relative w-full flex flex-col gap-16">
        <motion.div
          className="h-[800px] lg:h-[600px] w-full bg-gray-300 mx-auto sticky top-[124px] lg:top-[200px] rounded-[20px] drop-shadow-card"
          style={{ scale }}
        ></motion.div>
        <motion.div
          className="h-[800px] lg:h-[600px] w-full bg-green-300 mx-auto sticky top-[150px] lg:top-[250px] rounded-[20px] drop-shadow-card"
          style={{ scale: scaletwo }}
        ></motion.div>
        <div className="h-[800px] lg:h-[600px] w-full bg-blue-300 mx-auto sticky top-[124px] lg:top-[200px] rounded-[20px] drop-shadow-card"></div>
      </motion.div>
    </section>
  );
}
//  overflow-clip rounded-3xl bg-primary-gray shadow-[rgba(0,0,0,0.2)_2px_-1px_10px_-4px]
// transition-all duration-500  lg:scale-[85%]
