import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { Components } from "@/components/components";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const pathname = "/" + (params.slug?.join("/") || "");
  const query = `*[_type == "page" && slug.current == $slug][0]{
    ...,
    content[]{
      ...,
       _type == "heroComponent" => {
        ...,  
        "video": video.asset-> {
            playbackId,
            assetId,
          },
          
        },
      },

      
  }`;
  const page = await client.fetch(
    query,
    { slug: pathname },
    { cache: "no-store" }
  );
  if (!page) {
    return notFound();
  }
  if (!page.content || page.content.length === 0 || page === null) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1>this page is blank</h1>
        <Link href="/">go home</Link>
      </div>
    );
  }
  console.log(page.content);
  return (
    <div>
      {page.content.map(({ _type, ...object }: any) => {
        const Component = Components[_type as keyof typeof Components];
        return <Component {...object} key={_type} />;
      })}
    </div>
  );
}
