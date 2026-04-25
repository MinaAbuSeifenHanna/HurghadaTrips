import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata = {
  title: "Hurghada Travel - Discover Egypt",
  description: "Experience the magic of Hurghada, Luxor, and Cairo with our premium travel packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

