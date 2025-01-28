import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  weight: ["400", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoLive",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      url: "/zap.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} bg-[radial-gradient(ellipse_at_center,theme(colors.gray.900)_0%,theme(colors.gray.950)_100%)] text-white select-none`}
      >
        {children}
      </body>
    </html>
  );
}
