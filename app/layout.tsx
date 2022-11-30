import { Libre_Franklin } from "@next/font/google";
import "../styles/globals.css";
const LibreFranklin = Libre_Franklin({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={LibreFranklin.className} lang="en">
      <head>
        <title>Home - Comming soon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <header className="fixed w-full text-center text-xl uppercase font-semibold mt-3">
          @minhtri0795
        </header>
        {children}
      </body>
    </html>
  );
}
