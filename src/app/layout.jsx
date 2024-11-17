import "./globals.css";
import logo from "./../../public/logo.svg"


export const metadata = {
  title: "MBC Кофейня",
  description: "Кофейня на каждый день",
  keywords: ["кофе", "MBC", "красивый", "вкусный", "отличный", "чай"],
  openGrapg: {
    image: logo
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./../../public/logo.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
