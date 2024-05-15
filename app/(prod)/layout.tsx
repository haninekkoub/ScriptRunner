import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-white flex flex-col justify-between  min-h-screen mx-auto font-inter ">
      <Header />
      <main className="relative z-10 bg-white  overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
