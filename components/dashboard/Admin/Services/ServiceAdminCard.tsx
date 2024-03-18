"use client";

import { type serviceItem } from "@/lib/dataBase/ServiceActions";
import { Edit, TickSquare, Trash } from "iconsax-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { sideAnimation } from "@/config/motion";
import { SubmitButton } from "@/components/Times List Section/TimeBox";

type ServiceCardProps = {
	service: serviceItem;
};

function ServiceAdminCard({ service }: ServiceCardProps) {
	const [isEditting, setIsEditting] = useState<boolean>(false);

	return (
		<section className="w-full h-fit flex justify-between items-center py-1 px-2">
			<form className="flex items-start gap-3">
				<div className="flex flex-col justify-start items-start gap-2">
					<input
						type="text"
						className={`bg-transparent w-fit py-2 px-2 text-[#f1f1f1] text-[16px] rounded-lg border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						value={service.title}
					/>
					<input
						type="text"
						className={`bg-transparent py-1 px-2 text-[#f1f1f195] text-[12px] rounded-lg border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						value={service.description}
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-2">
					<input
						type="text"
						data-editting="false"
						className={`bg-transparent py-1 px-2 rounded-lg border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						value={service.price}
					/>
					{isEditting && (
						// <input
						// 	type="submit"
						// 	value={"ثبت تغییرات"}
						// />
                                    <SubmitButton 
							className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all cursor-pointer"
                                          title="ثبت تغییرات"/>
					)}
				</div>
			</form>
			<div className="icons flex-center flex-row-reverse gap-2">
				<span
					className="bg-[#101010] flex-center shadow-lg w-[45px] h-[45px] rounded-full cursor-pointer border border-transparent hover:border-[#cc9900] transition-all"
					onClick={() => {
						setIsEditting(true);
					}}>
					<Edit variant="Bulk" color="#cc9900" />
				</span>
				<span className="bg-[#101010] flex-center shadow-lg w-[45px] h-[45px] rounded-full cursor-pointer border border-transparent hover:border-red-500 transition-all">
					<Trash variant="Bulk" color="#EE4444" />
				</span>
			</div>
		</section>
	);
}

export default ServiceAdminCard;
