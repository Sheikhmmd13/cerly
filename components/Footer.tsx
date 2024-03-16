"use client";

import React, { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";
import { Instagram, Location } from "iconsax-react";

function Footer() {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	useEffect(() => {
		const FooterAnimate = () => {
			animate(
				scope.current,
				{ y: [50, 0], opacity: [0, 1], scale: [0.8, 1] },
				{ type: "spring", duration: 0.75 },
			);
		};

		if (isInView) FooterAnimate();
	}, [isInView]);

	return (
		<footer
			ref={scope}
			className="p-4 w-full mx-auto mt-24 pt-10 border-t-2 border-t-[#cc990060] max-w-[1400px] flex-between max-md:flex max-md:items-start max-md:justify-center max-md:gap-5  max-md:flex-col">
			<div className="flex-center text-[#f1f1f1]">
				<Location size={28} variant="TwoTone" color="#cc9900" />
				<p className="mr-5 text-lg ">
					اصفهان پایگاه هشتم شکاری همافری 3 طبقه اول
				</p>
			</div>

			<div className="flex-center flex-row-reverse md:flex-row">
				<p className="text-lg md:ml-5 mr-5 text-white h-[20px]">
					Instagram ID
				</p>
				<p className="text-lg md:ml-5 mr-5 text-[#f1f1f1] h-[20px]">
					Instagram ID
				</p>
				<Instagram
					size={28}
					variant="TwoTone"
					color="#cc9900"
				/>
			</div>
		</footer>
	);
}

export default Footer;
