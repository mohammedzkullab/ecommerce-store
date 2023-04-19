import type { AppProps } from "next/app";
import "../../styles/global.css";
import MainLayout from "layouts/MainLayout";
import { NextPageWithLayout } from "types";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getNestedLayout = Component.getNestedLayout ?? ((page) => page);
  const mainLayoutProps = Component.mainLayoutProps ?? {
    title: "Ecommerce Store",
  };
  return (
    <MainLayout {...mainLayoutProps}>
      {getNestedLayout(<Component {...pageProps} />)}
    </MainLayout>
  );
}
