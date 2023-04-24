import { Footer, Navbar, ReturnTop } from "./components";
import Head from "next/head";
import { MainLayoutProps } from "types";

const MainLayout = ({
  children,
  mainClassName,
  title,
  pageDescription = "Talents Valley platform",
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`min-h-fit scroll-smooth ${mainClassName ?? ""}`}>
        {children}
      </main>
      <ReturnTop />
      <Footer />
    </>
  );
};

export default MainLayout;
