import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor Genesis",
  description: "AI to the humanity",
  icons: {
    icon: "/vercel.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={"font-sans"}
    >
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
