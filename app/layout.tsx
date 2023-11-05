import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] }); // Font que usa Next.js ; podemos importar cualquier otra de google o local fácilmente :)

export const metadata: Metadata = {
	title: "Apple Geeks",
	description:
		"Plataforma en línea dedicada exclusivamente a la publicación y promoción de servicios relacionados con la gama de productos de Apple",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={inter.className}>
				<Navbar />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
