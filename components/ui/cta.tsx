import Button from "./button";

export default function Cta() {
  return (
    <div className="bg-white py-32 flex flex-col items-center gap-6 lg:gap-12 rounded-b-3xl mb-[380px] lg:mb-[320px] relative z-10 shadow-xl">
      <h1 className=" text-3xl lg:text-6xl font-neueMontreal font-medium text-center leading-[1.1] max-w-[400px] lg:max-w-[960px]">
        Cost-effective, reliable and used by hundreds of pharmacies today
      </h1>
      <Button
        href={"/"}
        content={"Get started"}
        color={"bg-primary"}
        className="hover:bg-primaryHovred"
      />
    </div>
  );
}
