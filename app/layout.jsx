import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Toaster } from "sonner";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono"
})

export const metadata = {
  title: "Portfolio Website",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-primary">
        <Header />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
