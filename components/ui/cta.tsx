import Button from "./button";
import { Button as ButtonType } from "@/lib/types";

export default function CtaCtaType({
  hero,
  button,
}: {
  hero: string;
  button: ButtonType;
}) {
  return (
    <div className="bg-white py-32 flex flex-col items-center gap-6 lg:gap-12 rounded-b-3xl mb-[44vh] lg:mb-[32vh] relative z-10 shadow-xl">
      <h1 className=" text-3xl lg:text-[3.75rem] font-neueMontreal font-medium text-center leading-[1.1] max-w-[400px] lg:max-w-[960px]">
        {hero}
      </h1>
      <Button
        href={button.link}
        content={button.content}
        color={"bg-primary"}
        className="hover:bg-primaryHovred"
      />
    </div>
  );
}
