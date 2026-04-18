import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ILÉ BOLU Agro Venture Ltd. | Pure Palm Oil",
  description: "High-quality, hygienically processed palm oil for homes, retailers, and bulk buyers across Nigeria. From Soil to Value.",
  keywords: "palm oil, Nigeria, Lagos, pure palm oil, bulk palm oil, agro venture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
