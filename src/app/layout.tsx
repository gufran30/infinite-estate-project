import type { Metadata } from "next";
import { Inter, Manrope, Saira_Stencil_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const sairaStencil = Saira_Stencil_One({
  variable: "--font-saira-stencil-one",
  subsets: ["latin"],
  weight: ["400"]
});

const manrope = Manrope({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]

});

export const metadata: Metadata = {
  title: "Infinite Building Technologies",
  description: "Infinite Building Technologies is a company that specializes in providing innovative solutions for the construction industry. We offer a wide range of services, including project management, design, and construction. Our team of experts is dedicated to delivering high-quality results on time and within budget.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${sairaStencil.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
