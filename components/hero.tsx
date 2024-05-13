import React from "react";
import Video from "./ui/video";

export default function Hero({ heroText, video, descritpion }: any) {
  return (
    <section className="relative my-2 lg:my-4 w-[calc(100vw-1rem)] lg:w-[calc(100vw-2rem)] h-[calc(100vh-1rem)] lg:h-[calc(100vh-2rem)] flex flex-col gap-6 lg:gap-8 justify-center items-center rounded-3xl mx-auto text-center text-white overflow-hidden">
      <h1 className=" font-neueMontreal text-5xl lg:text-8xl w-2/3 leading-tight lg:leading-[115px]">
        {heroText}
      </h1>
      <h3 className="text-xl lg:text-2xl w-[87vw] lg:w-1/2">{descritpion}</h3>
      <div className="absolute left-0 top-0 h-full w-full object-cover bg-gray-600 videoGradien -z-10"></div>
      <Video playbackId={video.playbackId} />
    </section>
  );
}
