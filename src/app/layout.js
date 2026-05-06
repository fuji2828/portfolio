import "./globals.css";
import { Lexend } from "next/font/google";
import Navbar from "../components/Navbar";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeremy Fung's Portfolio",
  description: "A showcase of my projects, photography, and profile.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
