
import React from "react";
import ServiceCard from "./ServiceCard";
import { GetAllServices, type ServicesType, type serviceItem } from "@/lib/dataBase/ServiceActions";

async function ServicesSection() {
	const Services = await GetAllServices();
	const groupedService = Services?.reduce(
		(currentState: ServicesType[], service: any) => {
			let newServiceItem: serviceItem = {
				_id: service._id.toString(),
				title: service.title,
				description: service.description,
				price: service.price,
			};

			const SelectedCategoryIndex = currentState.findIndex(
				(category) => category.category === service.category,
			);
			let UpdatedCategory = currentState[SelectedCategoryIndex];
			UpdatedCategory.services.push(newServiceItem);

			currentState[SelectedCategoryIndex] = UpdatedCategory;
			return currentState;
		},
		[
			{ category: "hairCut", services: [] },
			{ category: "beardCut", services: [] },
			{ category: "hairColor", services: [] },
		],
	);
	return (
		<section id="Services" className="w-full max-w-[1400px] mx-auto flex-center flex-col md:flex-row md:gap-10">
			{groupedService?.map((categoryItems, index) => <ServiceCard key={categoryItems.category + index} categoryName={categoryItems.category} services={categoryItems.services} index={index} />)}
			
			{/* Hair Color
			{Services.map((Services, index) => (
				<ServiceCard
					TrimInfo={Services.hairColor}
					key={index}
				/>
			))}
			Hair Cut
			{Services.map((Services, index) => (
				<ServiceCard
					TrimInfo={Services.hairCut}
					key={index}
				/>
			))}
			Beard Trim
			{Services.map((Services, index) => (
				<ServiceCard
					TrimInfo={Services.beardCut}
					key={index}
				/>
			))} */}
		</section>
	);
}

export default ServicesSection;
