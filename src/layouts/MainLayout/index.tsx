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
    <div className="min-h-fit scroll-smooth relative">
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${mainClassName ?? ""}`}>{children}</main>
      <ReturnTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
