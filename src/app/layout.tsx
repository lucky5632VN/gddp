import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Nghe An Heritage | Di sản Dân tộc Nghệ An",
  description: "Khám phá và bảo tồn bản sắc văn hóa các dân tộc Thổ, Khơ Mú, Thái, Ơ Đu tại Nghệ An.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans text-foreground bg-background">
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
