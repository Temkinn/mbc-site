import "./globals.css"

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
