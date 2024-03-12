import { Inter } from "next/font/google";
import Header from "components/Header";
import Footer from "components/Footer";
import Loading from "components/client/Loading";
import MobileProvider from "providers/mobile";
import MetaProvider from "providers/meta";
import ThemeLoader from "loaders/theme";
import FontLoader from "loaders/font";
import "styles/globals.css";
import "styles/theme.css";
import "styles/font.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loading... - BinaryBlazer",
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
                <Loading />
                <Header />
                {children}
                <Footer />
              </FontLoader>
            </ThemeLoader>
          </MetaProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
