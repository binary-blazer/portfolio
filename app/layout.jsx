import { Inter } from "next/font/google";
import NewYearNotice from "@/components/client/NewYearNotice";
import FireworksProvider from "@/providers/fireworks";
import Loading from "components/client/Loading";
import Footer from "components/Footer";
import Header from "components/Header";
import FontLoader from "loaders/font";
import ThemeLoader from "loaders/theme";
import MetaProvider from "providers/meta";
import MobileProvider from "providers/mobile";
import "styles/globals.css";
import "styles/theme.css";
import "styles/font.css";

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
          <MetaProvider>
            <ThemeLoader>
              <FontLoader>
                <FireworksProvider>
                  <NewYearNotice />
                  <Loading />
                  <Header />
                  {children}
                  <Footer />
                </FireworksProvider>
              </FontLoader>
            </ThemeLoader>
          </MetaProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
