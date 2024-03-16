"use client"

import React from "react";
import ServiceCard from "./ServiceCard";
import { Services } from "@/config/config";

function ServicesSection() {
	return (
		<section id="Services" className="w-full max-w-[1400px] mx-auto flex-center flex-col md:flex-row md:gap-10">
			{/* Hair Color */}
			{Services.map((Services, index) => (
				<ServiceCard
					TrimInfo={Services.hairColor}
					key={index}
				/>
			))}
			{/* Hair Cut */}
			{Services.map((Services, index) => (
				<ServiceCard
					TrimInfo={Services.hairCut}
					key={index}
				/>
			))}
			{/* Beard Trim */}
			{Services.map((Services, index) => (
				<ServiceCard
					TrimInfo={Services.beardCut}
					key={index}
				/>
			))}
		</section>
	);
}

export default ServicesSection;
