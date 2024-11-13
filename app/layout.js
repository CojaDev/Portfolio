import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Aleksandar M. | Full-Stack Developer Portfolio",
  description:
    "Explore the projects and skills of a passionate full-stack developer. Discover web applications, mobile solutions, and innovative tech creations.",
  keywords: [
    "full-stack developer",
    "front-end developer",
    "web development",
    "mobile development",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Next.js 13",
    "Next.js 14",
    "Next.js 15",
    "portfolio",
    "aleksandar marcetic",
    "aleksandar marčetić",
    "marcetic aleksandar",
    "marčetić aleksandar",
    "Aleksandar Marcetic",
    "Aleksandar Marčetić",
    "Marcetic Aleksandar",
    "Marčetić Aleksandar",
    "Aleksandar",
    "aleksandar",
    "marcetic",
    "Marcetic",
    "srbija",
    "serbia",
    "posao",
    "trazi",
    "trazim",
    "trazi posao",
    "traži posao",
    "trazim posao",
    "tražim posao",
    "for hire",
    "looking for job",
    "programer",
    "web developer",
    "react developer",
    "novo",
    "hit",
  ],
  author: "Marcetic Aleksandar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-coja.vercel.app/",
    site_name: "Aleksandar M. - Full-Stack Developer Portfolio",
    images: [
      {
        url: "https://portfolio-coja.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aleksandar M. - Full-Stack Developer Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="PcVXkY3TbcO5DZLopYqYf5uz2Jgk8bEt2-W6E1Fzupw"
        />
      </head>
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
