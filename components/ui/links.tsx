import Link from "next/link";

interface Props {
  link: string;
  text: string;
}
export default function Links({ link, text }: Props) {
  return (
    <Link
      href={link}
      className="group flex gap-2 items-center text-sm font-medium hover:cursor-pointer relative"
    >
      <p>{text}</p>
      <span>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.00003 13.1183L12.6667 4.45163M12.6667 4.45163V12.7716M12.6667 4.45163H4.3467"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="h-[1.5px] w-0 bg-primaryHovred absolute top-[100%] left-0 group-hover:w-full transition-width duration-300 rounded-3xl"></span>
    </Link>
  );
}
