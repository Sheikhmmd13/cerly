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
			className="w-[95%] mx-auto">
			<div className="w-full flex-center gap-4">
				{groupedService?.map((categoryItem, index) => (
					<TabsList className="w-[100px]">
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
			<div className="flex-center mt-3">
                  {groupedService?.map((categoryItem, index) => (
				<TabsContent value={categoryItem.category}>
					{categoryItem.category}
				</TabsContent>
			))}
                  </div>
		</Tabs>
	);
}

export default ServicesContainer;
