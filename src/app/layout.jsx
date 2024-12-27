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
      <body>
        {children}
      </body>
    </html>
  );
}
