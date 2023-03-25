import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Recipe Finder App",
  description: "Created by Daniel Bojchovski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <Header/>
        {children}
      </body>
    </html>
  );
}
