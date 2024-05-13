import Link from "next/link";

export default function Cta() {
  return (
    <div className="bg-white py-32 flex flex-col items-center gap-6 lg:gap-12 rounded-b-3xl mb-[400px] lg:mb-[340px] relative z-10 shadow-xl">
      <h1 className=" text-3xl lg:text-6xl font-neueMontreal font-medium text-center leading-[1.1] max-w-[400px] lg:max-w-[960px]">
        Cost-effective, reliable and used by hundreds of pharmacies today
      </h1>
      <Link
        href={"/"}
        className=" whitespace-nowrap rounded-full bg-primary text-white py-2 px-4 hover:bg-primaryHovred cursor-pointer"
      >
        Get started
      </Link>
    </div>
  );
}
