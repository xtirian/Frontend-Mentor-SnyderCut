import type { Metadata } from "next";
import "../sass/global.scss";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

export const metadata: Metadata = {
  title: "Typemaster Keyboard",
  description: "Typemaster Keyboard landingpage created ",
  robots: "none",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />

        {children}

        <FooterComponent />
      </body>
    </html>
  );
}
