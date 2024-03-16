"use client"

import { Calendar } from "iconsax-react";
import React, { useEffect } from "react";
import TimeBox from "./TimeBox";
import { month } from "@/config/Times";
import { useAnimate, useInView, motion } from "framer-motion";

type TimesContainerProps = {
	month: month;
	monthName: string;
};

// should be ssr
// data fetching here

function TimesContainer({ month, monthName }: TimesContainerProps) {
	const days = Object.keys(month);

	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	useEffect(() => {
		const FadeUpAnimation = () => {
			animate(
				scope.current,
				{ y: [100, 0], opacity: [0, 1] },
				{ type: "spring", duration: 0.45 },
			);
		};
		if (isInView) FadeUpAnimation();
	});

	return days.map((day, index) => {
		return (
			<motion.section
				className="w-full h-full my-14"
				key={index}
				ref={scope}>
				<header className="w-full flex justify-start items-center gap-5">
					<div className="flex-center gap-3">
						<Calendar
							size={28}
							color="#cc9900"
							variant="TwoTone"
						/>
						<h2 className="text-2xl font-bold text-[#cc9900]">
							{monthName} {day}
						</h2>
					</div>
					<div className="line h-[1px] flex-1 bg-[#cc9900]"></div>
				</header>
				<main className="w-full flex items-start justify-center flex-wrap gap-9 mt-10">
					{Object.keys(month[day].hours).map(
						(hour, index) => (
							<TimeBox
								key={"hour" + "index"}
								hour={hour}
								status={month[day].hours[hour]}
								index={index}
							/>
						),
					)}
				</main>
			</motion.section>
		);
	});
}

export default TimesContainer;
