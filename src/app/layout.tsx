import { Footer, Navbar } from "./components";

import { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "ecommerce store",
  description: "ecommerce store ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <main className="flex min-h-screen flex-col items-center justify-between ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
