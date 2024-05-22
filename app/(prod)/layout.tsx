import Header from "@/components/header";
import Footer from "@/components/footer";
import { client } from "@/lib/sanity";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const query = `{
    "footer": *[_type == "footer"][0],
    "header": *[_type == "header"][0]
  }`;
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return (
    <div className="relative bg-white flex flex-col justify-between  min-h-screen mx-auto font-inter ">
      <Header {...data.header} />
      <main className="relative z-10 bg-white ">{children}</main>
      <Footer {...data.footer} />
    </div>
  );
}
