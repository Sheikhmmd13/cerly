"use client"

import { sideAnimation } from "@/config/motion";
import { motion } from "framer-motion";

type SquareProps = {
	direction: string;
};

function Square({ direction }: SquareProps) {
	return (
		// <div className="absolute bg-[#252525] top-0 -right-[250px] md:w-[680px] md:h-[460px] max-md:w-[50%] max-md:h-[250px] -z-10 rounded-xl"></div>
		<motion.div
			{...sideAnimation("down")}
			className={`absolute bg-[#252525] ${direction} md:w-[680px] md:h-[460px] max-md:w-[50%] max-md:h-[250px] -z-10 rounded-xl`}></motion.div>
	);
}

export default Square;
