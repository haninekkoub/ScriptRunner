import { CardType } from "@/lib/types";
import React from "react";
import Images from "./images";

export default function Card({ id, image, title, info }: CardType) {
  return (
    <div className="flex flex-col justify-between h-[550px] lg:h-[600px] w-[90vw] lg:w-[432px] bg-[#F5F5F5] rounded-3xl p-4 lg:p-8">
      <div className="flex flex-col gap-6">
        <span className="bg-white w-12 h-12 flex justify-center items-center rounded-full">
          {id}
        </span>
        <div className="relative w-full aspect-[1512/1113] object-contain ">
          <Images
            className="h-full w-full rounded-[20px]"
            image={image}
            alt={"card"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/3 h-32">
        <div className=" text-xl">{title}</div>
        <div className="opacity-60">{info}</div>
      </div>
    </div>
  );
}
