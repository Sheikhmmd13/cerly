"use client"

import { sideAnimation } from "@/config/motion";
import { motion } from "framer-motion";

function DottedShape() {
	const dottedNumber = new Array(132);
	for (let i = 0; i < dottedNumber.length; i++) {
		dottedNumber[i] = "";
	}
	return (
		<div className={`w-[110px] flex flex-wrap gap-[4px] absolute md:left-[38%] md:top-0 max-md:top-44 max-md:left-0`}>
			{dottedNumber.map((_, index) => (
				<motion.span
					initial={{ scale: 0, opacity: 0, x: -100}}
					animate={{ scale: 1, opacity: 1, x: 0 }}
					transition={{
						type: "spring",
						duration: 0.25,
						delay: index * 0.01,
					}}
					key={index}
					className="w-[5px] h-[5px] rounded-full bg-[#cc990085]"></motion.span>
			))}
		</div>
	);
}

export default DottedShape;
