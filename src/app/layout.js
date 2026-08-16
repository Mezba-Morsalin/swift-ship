import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SwiftShip",
  description: "Fast, Secure & Reliable Courier Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
         <Toaster
    position="top-right"
    richColors
    closeButton
  />
      </body>
    </html>
  );
}
