"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Images from "./ui/images";
import { BenefitsCards, Benifits } from "@/lib/types";
import Video from "./ui/video";

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
      <motion.div className="relative w-full flex flex-col gap-16 [&>*:nth-child(2)]:top-[50px] [&>*:nth-child(2)]:lg:top-[200px]">
        {benefitscards?.map((card, index) => {
          return (
            <Card key={index} scale={cardsAnimation[index].scale} {...card} />
          );
        })}
      </motion.div>
    </section>
  );
}

const Card = ({
  title,
  description,
  image,
  icon,
  scale,
  topImage,
  bottomImage,
}: BenefitsCards) => {
  return (
    <motion.div
      className="h-[800px] lg:h-[600px] w-full bg-card mx-auto sticky top-0 lg:top-[160px] rounded-3xl drop-shadow-card flex flex-col lg:flex-row items-center "
      style={{ scale }}
    >
      <div className="lg:flex-1 h-fit lg:h-full ">
        <div className="h-full w-full flex flex-col justify-start gap-4 px-6 py-8 lg:px-16 lg:py-16 ">
          <div className=" w-14 h-14 rounded-full relative">
            <Images image={icon} alt={"icon"} />
          </div>
          <h3 className=" font-neueMontreal text-[1.75rem] lg:text-[3.125rem]">
            {title}
          </h3>
          <p className="opacity-60 text-[1.25rem] lg:text-2xl leading-8">
            {description}
          </p>
        </div>
      </div>
      <div className="relative h-full w-full flex-1 rounded-[1.25rem] lg:px-12 flex justify-center items-center ">
        {topImage && (
          <div className="w-[30%] h-44  absolute top-8  left-2 lg:-left-2 z-20">
            <Images
              image={topImage}
              alt={"image"}
              className="h-full w-full object-contain object-top"
            />
          </div>
        )}
        {bottomImage && (
          <div className="w-[40%] h-60 lg:h-80 absolute bottom-12 lg:bottom-8 right-2 lg:right-9 z-20 test">
            <div className="relative h-full w-full">
              <Images
                image={bottomImage}
                alt={"image"}
                className="w-full object-contain object-bottom"
              />
            </div>
          </div>
        )}
        {image?.map((img) => {
          if (img._type === "largeImage") {
            return <LargeImage image={img} key={img._key} />;
          } else if (img._type === "video") {
            return <Videos video={img.video} key={img._key} />;
          } else if (img._type === "smallImage") {
            return <SmallImage image={img} key={img._key} />;
          }
        })}
      </div>
    </motion.div>
  );
};

const LargeImage = ({ image }: any) => (
  <div className="w-full h-full lg:h-4/5 relative overflow-clip ">
    <Images
      image={image}
      alt={"image"}
      className="h-full w-full  object-contain object-top lg:object-center"
    />
  </div>
);
const Videos = ({ video }: any) => {
  return (
    <div className=" w-[300px] h-[350px] lg:h-[450px] relative overflow-clip aspect-[3600 / 2400] ">
      <Video playbackId={video.playbackId} />
    </div>
  );
};
const SmallImage = ({ image }: any) => (
  <div className=" w-5/6 h-3/5 relative overflow-clip aspect-[3600 / 2400]">
    <Images
      image={image}
      alt={"image"}
      className="h-full w-full rounded-[1.25rem] object-cover lg:object-contain"
    />
  </div>
);
