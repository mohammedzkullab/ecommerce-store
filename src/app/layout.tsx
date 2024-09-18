import MainLayout from "layouts/MainLayout";
import { Metadata } from "next";
import "../../styles/global.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
