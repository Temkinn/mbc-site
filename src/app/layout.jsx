import "./globals.css"
import Head from "next/head";

export const metadata = {
  title: "MBC Кофейня",
  description: "Кофейня на каждый день",
  keywords: ["кофе", "MBC", "красивый", "вкусный", "отличный", "чай"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="G2mTqATf8B1VK2cSIrbUkOMlWGRRG32VQs23KQgW0ng" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
