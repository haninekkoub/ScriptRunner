"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqList, FaqType } from "@/lib/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Faq({ faq }: FaqList) {
  return (
    <section className="flex flex-col lg:flex-row gap-16 lg:gap-0 px-2 py-12 lg:px-12 lg:py-16 max-w-[1440px] mx-auto">
      <div className="flex-1 flex flex-col justify-start items-start gap-4 lg:gap-6 ">
        <span className="text-primary uppercase">FAQ</span>
        <h2 className="font-neueMontreal text-[2rem] lg:text-6xl">
          Questions? <br /> Answers.
        </h2>
        <p className="text-xl lg:text-2xl opacity-60">
          We have a lot to offer,
          <br /> here is a sneak peak
        </p>
      </div>
      <Accordion type="single" collapsible className="flex-1 ">
        {faq?.map((faq: FaqType, id: number) => {
          return <FaqItem key={id} question={faq.question} info={faq.info} />;
        })}
      </Accordion>
    </section>
  );
}

const FaqItem = ({ question, info }: FaqType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeUp = {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 17,
    },
  };
  return (
    <motion.div ref={ref} animate={fadeUp}>
      <AccordionItem
        value={question}
        className="bg-[#F5F5F5] rounded-[20px] mb-2"
      >
        <AccordionTrigger className="p-4">{question}</AccordionTrigger>
        <AccordionContent className="opacity-60 px-4">{info}</AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};
