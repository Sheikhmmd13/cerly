import "../globals.css";
import { useState } from "react";
import Image from "next/image";
import barberImage from "@/app/assets/imgs/img5.jpg";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
            <section className="w-[95%] max-w-[1400px] mx-auto h-fit md:h-[650px] pb-5 md:pb-0 bg-[#252525] mt-[110px] rounded-lg overflow-hidden">
			<main className="w-full h-full flex-between md:flex-row flex-col gap-8 md:gap-0">
				{/* img */}
				<div className="w-full md:w-4/5 h-full flex-center">
					<Image src={barberImage} alt="form-image" className="w-full h-full"/>
				</div>
				{/* form elements */}
				<div className="w-full md:w-2/5 h-full flex-center relative px-7">
					{children}
					<div className="line w-[100px] h-[1px] bg-[#cc9900] absolute max-md:hidden bottom-8 right-[-50px]" />
				</div>
			</main>
		</section>
	);
}
