import "./globals.scss";
export { metadata } from "@/constants";
import { Montserrat_Alternates } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["cyrillic", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--montserrat",
});

// export const metadata: Metadata =

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserratAlternates.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
