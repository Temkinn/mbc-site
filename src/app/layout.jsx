import "./globals.css"
import { Montserrat_Alternates } from "next/font/google"


export const montserratAlternates = Montserrat_Alternates({
  subsets: ["cyrillic", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--montserrat",
})

export const metadata = {
  title: "MBC Кофейня",
  description: "Кофейня на каждый день",
  keywords: ["кофе", "MBC", "красивый", "вкусный", "отличный", "чай"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserratAlternates.variable}>
        {children}
      </body>
    </html>
  );
}
