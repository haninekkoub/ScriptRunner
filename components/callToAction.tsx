"use client";
import { CallToActionType } from "@/lib/types";
import Button from "./ui/button";
import Images from "./ui/images";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CallToAction({
  image,
  title,
  description,
}: CallToActionType) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0.5, 0.9], [0, 25]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );
  return (
    <motion.section
      id="switchheadercolor"
      className="py-16 max-w-[960px] mx-2 lg:mx-auto"
    >
      <motion.div
        style={{ perspective: "1000px" }}
        className=" drop-shadow-cta"
      >
        <motion.div
          className="relative lg:w-[960px] h-80 lg:h-[620px]"
          style={{ rotateX: rotateX }}
          ref={ref}
        >
          <Images
            image={image}
            alt={"cta Images"}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
      <div className="w-4/5 lg:w-3/4 flex flex-col justify-center items-center gap-4 font-neueMontreal font-meduim text-center mx-auto mt-16">
        <h2 className="text-2xl lg:text-[2rem] leading-[1.1] ">{title}</h2>
        <p className=" lg:w-4/5 opacity-60 text-lg lg:text-xl font-inter ">
          {description}
        </p>
        <Button
          href={"/"}
          color={"bg-primary"}
          content={"Get started"}
          className="hover:bg-primaryHovred"
        />
      </div>
    </motion.section>
  );
}
