import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Panti Asuhan Ulil Abshar",
  description: "Panti Asuhan Putra Muhammadiyah Ulil Abshar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
