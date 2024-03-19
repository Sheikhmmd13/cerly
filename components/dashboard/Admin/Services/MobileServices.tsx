import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	GetAllServices,
	type ServicesType,
	type serviceItem,
} from "@/lib/dataBase/ServiceActions";
import { WithId } from "mongodb";
import ServiceAdminCard from "./ServiceAdminCard";
import ServicesContainer from "./ServicesContainer";

async function MobileServices() {
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
		<section className="w-dvw">
                  <ServicesContainer groupedService={groupedService}/>
		</section>
	);
}

export default MobileServices;
