"use client";

import React from "react";
import { type ServicesType } from "@/lib/dataBase/ServiceActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceAdminCard from "./ServiceAdminCard";
import { AddCircle } from "iconsax-react";
import AddServiceForm from "./AddServiceForm";
import { motion } from "framer-motion";

function ServicesContainer({
	groupedService,
}: {
	groupedService: ServicesType[] | undefined;
}) {
	return (
		<Tabs
			defaultValue="hairCut"
			className="w-[95%] max-w-[550px] mx-auto">
			<div className="w-[95%] mx-auto flex-center gap-4">
				{groupedService?.map((categoryItem, index) => (
					<TabsList
						className="flex-1"
						key={categoryItem.category}>
						<TabsTrigger value={categoryItem.category}>
							{categoryItem.category === "hairCut"
								? "اصلاح مو"
								: categoryItem.category ===
								  "beardCut"
								? "اصلاح ریش"
								: "رنگ مو"}
						</TabsTrigger>
					</TabsList>
				))}
				<TabsList className="flex-1">
					<TabsTrigger value="add-service">
						افزودن سرویس
					</TabsTrigger>
				</TabsList>
			</div>
			<div className="mt-6 relative w-full h-[465px] border border-[#353535] rounded-lg overflow-x-hidden overflow-y-scroll">
				{groupedService?.map((categoryItem, index) => (
					<TabsContent
						value={categoryItem.category}
						key={categoryItem.category}
						className="w-full h-fit flex-center gap-3">
						{categoryItem.services.length !== 0 ? (
							categoryItem.services.map(
								(service, index: number) => (
									<motion.div
										key={index}
										initial={{
											x: -100,
											opacity: 0,
										}}
										animate={{
											x: 0,
											opacity: 1,
										}}
										transition={{
											type: "spring",
											delay:
												index *
												0.25,
										}}>
										<ServiceAdminCard
											service={
												service
											}
											category={
												categoryItem.category
											}
										/>
									</motion.div>
								),
							)
						) : (
							<p className="text-[#f1f1f198]">
								سرویسی برای نمایش وجود ندارد
							</p>
						)}
					</TabsContent>
				))}
				<TabsContent
					value="add-service"
					className="w-full h-[90%] flex-center">
					<AddServiceForm />
				</TabsContent>
			</div>
		</Tabs>
	);
}

export default ServicesContainer;
