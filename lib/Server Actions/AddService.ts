"use server";

import { revalidatePath } from "next/cache";
import { CloseConnection, ConnectToCollection } from "../dataBase";

export async function AddService(prevState: any, formData: FormData) {
	let result: { message: string; isError: boolean } = {
		message: "سرویس ثبت نشد",
		isError: true,
	};
	const serviceInfo = {
		category: formData.get("category") as string,
		title: formData.get("title") as string,
		description: formData.get("description") as string,
		price: formData.get("price") as string,
	};

	const ServiceCollection = await ConnectToCollection("services");

	try {
		const IsExist = await ServiceCollection.findOne({
			category: serviceInfo.category,
			title: serviceInfo.title,
			description: serviceInfo.description,
		});

            if(IsExist === null) {
                  await ServiceCollection.insertOne(serviceInfo);
                  result = {message: "سرویس ثبت شد", isError: false};
            } else {
                  result = {message: "سرویس قبلا ثبت شد", isError: true};
            }
	} finally {
            revalidatePath("/dashboard/admin/Services")
            revalidatePath("/")
            CloseConnection();
		return result;
	}
}
