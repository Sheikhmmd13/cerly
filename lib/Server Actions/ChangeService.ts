"use server";

import { ObjectId } from "mongodb";
import { CloseConnection, ConnectToCollection } from "../dataBase";
import { revalidatePath } from "next/cache";

let result: { isSubmitted: boolean, message:string };
export async function ChangeService(prevState: any, formData: FormData) {

	const _id = new ObjectId(formData.get("serviceId") as string);
	const serviceInfo = {
		category: formData.get("category") as string,
		title: formData.get("title") as string,
		description: formData.get("description") as string,
		price: formData.get("price") as string,
	};

	const ServicesCollection = await ConnectToCollection("services");
	try {
		await ServicesCollection.updateOne(
			{ _id: _id },
			{
				$set: {
					title: serviceInfo.title,
					description: serviceInfo.description,
					price: serviceInfo.price,
				}
			},
		);

            
            result = {isSubmitted: true, message:"تغییرات ثبت شد"}

	} catch (err) {
		console.log(err);
            result = {isSubmitted: false, message: "خطا! دوباره امتحان کنید"}
	} finally {
		revalidatePath("/dashboard/admin/Services");
            revalidatePath("/")
            CloseConnection();
            return result;
      }
}
