import { Footer, Navbar } from "components";
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
      <main className={`min-h-fit ${mainClassName ?? ""}`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
