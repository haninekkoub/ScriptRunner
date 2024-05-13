import Link from "next/link";
import Cta from "./ui/cta";
import Links from "./ui/links";

export default function Footer() {
  const cta = true;
  return (
    <div className="flex flex-col">
      {cta && <Cta />}
      <div className="min-h-[420px] lg:min-h-[370px] w-full text-white fixed bottom-0">
        <div className="bg-primary  relative min-h-[420px] lg:min-h-[370px] pt-20">
          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-start lg:items-center mx-8 pb-6 border-b-primaryHovred border-b-[1px] ">
            <div className="flex flex-col lg:flex-row gap-6 text-sm font-medium">
              <div>© 2024 Script Runner. All rights reserved.</div>
              <div>Privacy Policy</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <Links link={"/"} text={"sales@scriptrunner.ai"} />
              <Links link={"/"} text={"Book a demo"} />
            </div>
          </div>
          <p className=" font-normal text-xs mx-8 pt-6">
            Script Runner is not a pharmacy or drug manufacturer. We provide
            software solutions for pharmacies.
          </p>
          <div className=" font-neueMontreal font-bold text-[calc(23200vw/1440)]  whitespace-nowrap  leading-10 lg:leading-[150px] absolute bottom-0">
            Script Runner
          </div>
        </div>
      </div>
    </div>
  );
}
