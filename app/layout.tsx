import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import DynamicHeader from "@/components/DynamicHeader";
import { DeletePassedTime } from "@/lib/dataBase/timeActions";

const myFont = localFont({
	src: [
		{
			path: "./DanaFaNum-Light.woff",
			weight: "300",
		},
		{
			path: "./DanaFaNum-Regular.woff",
			weight: "500",
		},
		{
			path: "./DanaFaNum-Bold.woff",
			weight: "700",
		},
		{
			path: "./DanaFaNum-Black.woff",
			weight: "900",
		},
	],
});

export const metadata: Metadata = {
	title: "Celry",
	description: "Barber, Haircutter",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="rtl">
			<body className={myFont.className}>
				<DynamicHeader>
					<Header />
				</DynamicHeader>
				{children}
			</body>
		</html>
	);
}
