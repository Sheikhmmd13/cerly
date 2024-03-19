"use client";

import React from "react";
import { type ServicesType } from "@/lib/dataBase/ServiceActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceAdminCard from "./ServiceAdminCard";
import { AddCircle } from "iconsax-react";
import AddServiceForm from "./AddServiceForm";

function ServicesContainer({
	groupedService,
}: {
	groupedService: ServicesType[] | undefined;
}) {
	return (
		<Tabs
			defaultValue="add-service"
			className="w-[95%] max-w-[550px] mx-auto">
			<div className="w-full flex-center gap-4">
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
						اضافه کردن سرویس
					</TabsTrigger>
				</TabsList>
			</div>
			<div className="mt-6 relative w-full h-[465px] border border-[#353535] rounded-lg overflow-x-hidden overflow-y-scroll">
				{groupedService?.map((categoryItem, index) => (
					<TabsContent
						value={categoryItem.category}
						key={categoryItem.category}
						className="w-full h-fit flex-center">
						{categoryItem.services.length !== 0 ? (
							categoryItem.services.map(
								(service, index) => (
									<ServiceAdminCard
										key={index}
										service={service}
										category={
											categoryItem.category
										}
									/>
								),
							)
						) : (
							<p className="text-[#f1f1f198]">
								سرویسی برای نمایش وجود ندارد
							</p>
						)}
					</TabsContent>
				))}
                        <TabsContent value="add-service" className="w-full h-[90%] flex-center">
                              <AddServiceForm />
                        </TabsContent>
			</div>
		</Tabs>
	);
}

export default ServicesContainer;
