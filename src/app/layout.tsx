import type { Metadata } from "next";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const links = [{href:"/pages/login", text:"login"},
  {href:"/pages/home", text:"home"},
  {href:"/pages/cards", text:"all cards"},
  {href:"/pages/todo", text:"to do"},
  {href:"/pages/reactQuery/get", text:"reactQ-get"}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar links={links}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
