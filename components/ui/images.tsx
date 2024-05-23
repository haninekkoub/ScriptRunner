import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import DefaultImage from "@/public/defaultImage.png";
import Image from "next/image";

interface Props {
  image: "image" | string;
  alt: string;
  className?: string;
}
export default function Images({ image, alt, className }: Props) {
  const getUrl = (currentImage: "image") => {
    if (currentImage) {
      return urlFor(currentImage).url();
    } else {
      return DefaultImage;
    }
  };
  const imageUrl = typeof image === "string" ? image : getUrl(image);
  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      priority={true}
      sizes="(max-width: 768px) 60%, 70%"
      className={cn("", className)}
    />
  );
}
