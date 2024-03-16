"use client";

import React from "react";
import Square from "../Shapes/Square";
import HeroText from "./HeroText";
import Button from "./Button";
import Image from "next/image";
import Slider from "../Slider";
import DottedShape from "../Shapes/dottedTable";
import Circle from "../Shapes/Circle";

//framer motion
import { motion, AnimatePresence } from "framer-motion";
import { sideAnimation } from "@/config/motion";

function HeroSection() {
	return (
		<section className="w-full relative md:h-[110vh] max-h-[850px] flex-between flex-col-reverse px-10 md:flex-row  max-md:pt-10 overflow-hidden mt-[5rem]">
			<Square direction="top-0 -right-[250px]" />
			<Square direction="-bottom-28 -left-[100px] max-md:left-1/2 max-md:top-0" />
			<DottedShape />
			<Circle />
			<div className="relative md:w-2/5 w-full flex-center flex-col gap-10 before:content-[''] before:h-full before:w-[1px] before:bg-[#cc990085] before:absolute before:top-0 before:right-0 before:rounded-full max-md:before:-right-5">
				<motion.div
					{...sideAnimation("up")}
					className="md:w-[90%] w-full">
					<HeroText />
				</motion.div>
				<motion.div
					{...sideAnimation("up")}
					className="md:w-[90%] w-full">
					<Button />
				</motion.div>
			</div>
			<motion.div
				className="md:w-2/4 w-full h-full flex-center md:ml-14 max-md:mb-10"
				{...sideAnimation("left")}>
				<Slider />
			</motion.div>
		</section>
	);
}

export default HeroSection;
