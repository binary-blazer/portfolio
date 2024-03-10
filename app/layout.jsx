import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileProvider from "providers/mobile";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - BinaryBlazer",
  description: "BinaryBlazer's portfolio and blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " select-none"}>
        <MobileProvider>
          <Header />
          {children}
          <Footer />
        </MobileProvider>
      </body>
    </html>
  );
}
