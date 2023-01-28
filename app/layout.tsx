import { Inter } from "@next/font/google";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Providers } from "./providers";
import "../styles/globals.css";
const InterFont = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={InterFont.className}>
        <Providers>
          <Header />
          <main className="flex flex-col justify-center px-8 min-h-[50vh]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
