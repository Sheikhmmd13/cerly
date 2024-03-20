"use server"

import { ObjectId } from "mongodb";
import { CloseConnection, ConnectToCollection } from "..";
import { revalidatePath } from "next/cache";

export type AddTimeType = {
	date: string;
	solarDate: string;
	time: string;
	userId: string;
};

export async function AddTimeToDb(time: AddTimeType) {
	try {
		const TimeCollection = await ConnectToCollection("Times");
		const isTimeExists = await TimeCollection.findOne({
			date: time.date,
			time: time.time,
		});

		if (!isTimeExists) {
			const result = await TimeCollection.insertOne(time);
			return result;
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}

export async function getAllTimes() {
	const TimeCollection = await ConnectToCollection("Times");
	try {
		const AllTimes = await TimeCollection.find({}).toArray();
		return AllTimes;
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}

export async function GetOneTimeByUserid(
	userId: string,
	date: string,
	time: string,
) {
	const TimeCollection = await ConnectToCollection("Times");
	try {
		const result = await TimeCollection.updateOne(
			{ date: date, time: time },
			{ $set: { userId: userId } },
		);
		return result;
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}

export async function DeletePassedTime() {
	const currentDate = new Date();
	const filter = { date: { $lt: currentDate.toISOString().slice(0, 10) } };

	const TimeCollection = await ConnectToCollection("Times");

	try {
		await TimeCollection.deleteMany(filter);
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}

export async function DeleteUserTime(prevState: any, formData: FormData) {
	const timeId = formData.get("timeId") as string;
	const TimeCollection = await ConnectToCollection("Times");

	try {
		await TimeCollection.findOneAndUpdate(
			{ _id: new ObjectId(timeId) },
			{ $set: { userId: "" } },
		);
	} catch (err) {
		console.log(err);
	} finally {
		revalidatePath("/dashboard/user")
		revalidatePath("/dashboard/admin/Times")
		CloseConnection();
		return {}
	}
}
