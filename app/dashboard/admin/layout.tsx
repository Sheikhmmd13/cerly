import Aside from "@/components/dashboard/Admin/Aside";



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
            <section className="w-[100%] relative flex-center pr-[65px]">
                  <Aside />
			<main className="w-full max-w-[1400px] min-h-dvh flex-center">
                        {children}
			</main>
		</section>
	);
}
