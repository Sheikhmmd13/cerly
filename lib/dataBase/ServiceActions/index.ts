import { PushOperator, WithId } from "mongodb";
import { CloseConnection, ConnectToCollection } from "..";


export type serviceItem = {
	_id?: string | any,
	title: string;
	description: string;
	price: number;
};

export type ServicesType = {
	category: "hairCut" | "beardCut" | "hairColor";
	services: serviceItem[];
};

export async function CreateService(
	category: "hairCut" | "beardCut" | "hairColor",
	ServiceConfig: serviceItem,
) {
	const NewService = { category: category, ...ServiceConfig };
	const ServicesCollection = await ConnectToCollection("services");
	try {
		const isServiceExistBefore = await ServicesCollection.findOne({
			category: category,
			title: ServiceConfig.title,
			description: ServiceConfig.description,
		});

		if (isServiceExistBefore) return null;
		return ServicesCollection.insertOne(NewService);
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}

export async function GetAllServices() {
	const ServicesCollection = await ConnectToCollection("services");
	try {
		const AllServices = await ServicesCollection.find({}).toArray();
		return AllServices;
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}
