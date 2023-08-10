import { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nils Emmenegger",
    template: "%s | Nils Emmenegger",
  },
  description: "Hi, I'm Nils, and this is my website :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira_code.className} min-h-screen flex flex-col`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
