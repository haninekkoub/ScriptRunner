import Cta from "./ui/cta";
import Links from "./ui/links";

export default function Footer() {
  const cta = true;
  return (
    <div className="flex flex-col">
      {cta && <Cta />}
      <div className="min-h-[400px] lg:min-h-[340px] w-full text-white fixed bottom-0">
        <div className="bg-primary  relative min-h-[400px] lg:min-h-[340px] pt-20">
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between items-start lg:items-center mx-8  ">
            <div className="flex flex-col lg:flex-row gap-6 text-sm font-medium">
              <div>© 2024 Script Runner. All rights reserved.</div>
              <div>Privacy Policy</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <Links link={"/"} text={"sales@scriptrunner.ai"} />
              <Links link={"/"} text={"Book a demo"} />
            </div>
          </div>
          <div className=" font-neueMontreal font-bold text-[calc(23200vw/1440)]  whitespace-nowrap  leading-10 lg:leading-[150px] absolute bottom-0">
            Script Runner
          </div>
        </div>
      </div>
    </div>
  );
}
