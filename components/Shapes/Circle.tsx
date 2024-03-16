"use client"

import { motion } from "framer-motion";

function Circle() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			className="w-[64px] h-[64px] rounded-full bg-[#252525] absolute md:left-[60%] md:bottom-28 max-md:hidden"></motion.div>
	);
}

export default Circle;
