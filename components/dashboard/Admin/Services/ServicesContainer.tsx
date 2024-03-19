"use client";

import React from "react";
import { type ServicesType } from "@/lib/dataBase/ServiceActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ServicesContainer({
	groupedService,
}: {
	groupedService: ServicesType[] | undefined;
}) {
	return (
		<Tabs
			defaultValue="hairCut"
			className="w-[95%] max-w-[550px] mx-auto">
			<div className="w-full flex-center gap-4">
				{groupedService?.map((categoryItem, index) => (
					<TabsList className="flex-1" key={categoryItem.category}>
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
			</div>
			<div className="mt-6 w-full h-[465px] border border-[#353535] rounded-lg overflow-x-hidden overflow-y-scroll">
                  {groupedService?.map((categoryItem, index) => (
				<TabsContent value={categoryItem.category} key={categoryItem.category} className="w-full h-fit flex-center">
					{categoryItem.category}
				</TabsContent>
			))}
                  </div>
		</Tabs>
	);
}

export default ServicesContainer;
