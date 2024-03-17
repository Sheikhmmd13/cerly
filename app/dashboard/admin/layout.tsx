import Aside from "@/components/dashboard/Admin/Aside";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="w-[100%] relative">
			<header className="max-w-[1400px] w-[98%] mx-auto px-3 flex items-center justify-between h-[50px] mt-3 glassmorphism fixed top-0 left-1/2 -translate-x-1/2">
				<Aside />
				<h2 className="text-2xl text-[#cc9900] font-bold">لوگو</h2>
			</header>
			<main className="w-[98%] mx-auto pt-10 max-w-[1400px] min-h-dvh flex-center">
				{children}
			</main>
		</section>
	);
}
