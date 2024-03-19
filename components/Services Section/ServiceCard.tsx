"use client";

import React, { useEffect } from "react";
import { Scissor } from "iconsax-react";
import { inView, motion, useAnimate, useInView } from "framer-motion";

//local
import { type ServicesTitle, type serviceItem } from "@/config/config";

type ServiceCardProps = {
	services: serviceItem[];
	index: number;
	categoryName: "hairCut" | "beardCut" | "hairColor";
};
function ServiceCard({ services, index, categoryName }: ServiceCardProps) {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	useEffect(() => {
		if (isInView) {
			const EnterAnimation = () => {
				animate(
					scope.current,
					{
						opacity: [0, 1],
						y: [100, 0],
					},
					{
						type: "spring",
						delay: index * 0.25,
					},
				);
				animate(
					".trim-card",
					{ y: [150, 0], opacity: [0, 1] },
					{ type: "spring", delay: 0.15 },
				);
			};

			EnterAnimation();
		}
	}, [isInView]);

	return (
		services.length !== 0 && (
			<motion.div
				ref={scope}
				className={`w-[90%] md:w-[380px] min-h-[500px] bg-[#252525] rounded-lg py-10 px-8 mt-40 `}>
				<header className="w-full flex items-center justify-start gap-6">
					<span className="rounded-full bg-[#1d1d1d] w-[80px] h-[80px] flex-center">
						<Scissor
							size={40}
							color="#cc9900"
							variant="TwoTone"
							className="-rotate-90"
						/>
					</span>
					<h2 className="text-2xl text-[#cc9900] font-bold">
						{categoryName === "hairCut"
							? "اصلاح مو"
							: categoryName === "beardCut"
							? "اصلاح ریش"
							: "رنگ مو"}
					</h2>
				</header>

				<main className="flex-center flex-col gap-14 mt-10">
					{services.map((info, Serviceindex) => (
						<motion.div
							key={Serviceindex}
							className="flex justify-between items-start w-full trim-card"
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								type: "spring",
								delay: Serviceindex * 0.15,
							}}>
							<div className="w-3/5 text-[#f1f1f1]">
								<h2 className="text-lg pb-2 font-bold">
									{info.title}
								</h2>
								<p className="text-sm text-[#f1f1f195]">
									{info.description}
								</p>
							</div>
							<div className="w-2/5 text-[#cc9900] font-bold flex gap-2 pt-1">
								<div className="line flex-1 h-[1px] bg-[#cc990090] my-auto"></div>
								<p>{info.price} تومان</p>
							</div>
						</motion.div>
					))}
				</main>
			</motion.div>
		)
	);
}

export default ServiceCard;
