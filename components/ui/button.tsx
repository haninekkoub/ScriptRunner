import { ButtonType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Button({
  href,
  color,
  content,
  className,
}: ButtonType) {
  return (
    <Link
      href={href}
      className={cn(
        `whitespace-nowrap py-2 px-4 rounded-full text-white font-inter font-normal  tracking-base cursor-pointer ${color}`,
        className
      )}
    >
      {content}
    </Link>
  );
}
