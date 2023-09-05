import { Inter } from "next/font/google";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Home from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-[100vh]">
          <LeftSidebar />
          {children}
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
