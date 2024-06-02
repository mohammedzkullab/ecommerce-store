import { Transition } from "lib/@headlessUi";
import { Footer, Navbar, ReturnTop } from "./components";
import Head from "next/head";
import { MainLayoutProps } from "types";

const MainLayout = ({
  children,
  mainClassName,
  title,
  pageDescription = "E-commerce Services",
}: MainLayoutProps) => {
  return (
    <Transition
      show
      appear
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative min-h-fit scroll-smooth">
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
    </Transition>
  );
};

export default MainLayout;
