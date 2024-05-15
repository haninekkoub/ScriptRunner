import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqList, FaqType } from "@/lib/types";

export default function Faq({ faq }: FaqList) {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 px-2 py-12 lg:px-12 lg:py-16">
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
          return (
            <AccordionItem
              key={id}
              value={faq.question}
              className="bg-[#F5F5F5] rounded-[20px] mb-2"
            >
              <AccordionTrigger className="p-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="opacity-60 px-4">
                {faq.info}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
