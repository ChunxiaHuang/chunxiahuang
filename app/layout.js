
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 添加所需的权重
});

export const metadata = {
  title: "Chunxia Huang",
  description: "Welcome to my personal website! I am a passionate software developer with a background in graphic design. Explore my portfolio, discover my projects, and connect with me to collaborate on creating impactful and user-friendly solutions. Let's bring ideas to life together!",
  icons: {
    icon: "/ch.png", 
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {/* 添加导航栏 */}
       <Header />
        {/* 页面内容 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
