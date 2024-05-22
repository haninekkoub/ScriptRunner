"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Images from "./ui/images";
import { BenefitsCards, Benifits } from "@/lib/types";

export default function Benefits({ benefitscards }: Benifits) {
  const reference = useRef(null);
  const { scrollYProgress } = useScroll({ target: reference });
  const cardsAnimation = [
    {
      scale: useSpring(useTransform(scrollYProgress, [0, 0.01], [1, 0.85]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      }),
    },
    {
      scale: useSpring(useTransform(scrollYProgress, [0.44, 0.49], [1, 0.9]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      }),
    },
    {},
  ];
  return (
    <section
      className="flex flex-col items-center gap-16 px-2 py-16 lg:px-12 lg:py-32 max-w-[1440px] mx-auto"
      ref={reference}
    >
      <div className="lg:w-2/3 mx-auto ">
        <p className="text-primary w-fit mx-auto mb-6 font-medium text-sm lg:text-base">
          BENEFITS
        </p>
        <h2 className=" font-neueMontreal text-[2rem] lg:text-6xl text-center leading-[1.1]">
          Our software streamlines your existing delivery process
        </h2>
      </div>
      <motion.div className="relative w-full flex flex-col gap-16 [&>*:nth-child(2)]:top-[100px] [&>*:nth-child(2)]:lg:top-[200px]">
        {benefitscards?.map(
          (
            { title, description, image, icon }: BenefitsCards,
            index: number
          ) => {
            return (
              <Card
                key={index}
                scale={cardsAnimation[index].scale}
                icon={icon}
                title={title}
                description={description}
                image={image}
              />
            );
          }
        )}
      </motion.div>
    </section>
  );
}

const Card = ({ title, description, image, icon, scale }: BenefitsCards) => {
  return (
    <motion.div
      className="h-[800px] lg:h-[600px] w-full bg-card mx-auto sticky top-[50px] lg:top-[160px] rounded-3xl drop-shadow-card flex flex-col lg:flex-row items-center "
      style={{ scale }}
    >
      <div className="flex-1 h-full">
        <div className="h-full w-full flex flex-col justify-start gap-4 px-6 py-8 lg:px-16 lg:py-16 ">
          <div className=" w-14 h-14 rounded-full relative">
            <Images image={icon} alt={"icon"} />
          </div>
          <h3 className=" font-neueMontreal text-[3.125rem]">{title}</h3>
          <p className="opacity-60 text-2xl leading-8">{description}</p>
        </div>
      </div>
      <div className="h-full w-full flex-1 relative bg-blue-300 rounded-[1.25rem] px-16 ">
        <Images image={image} alt={"image"} className="h-full w-full" />
      </div>
    </motion.div>
  );
};
