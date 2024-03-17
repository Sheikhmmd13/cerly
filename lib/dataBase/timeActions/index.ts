import { ObjectId } from "mongodb";
import { CloseConnection, ConnectToCollection } from "..";

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
		CloseConnection();
		return AllTimes;
	} catch (err) {
		console.log(err);
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
		CloseConnection();
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function DeletePassedTime() {
	const currentDate = new Date();
	const filter = { date: { $lt: currentDate.toISOString().slice(0, 10) } };

	const TimeCollection = await ConnectToCollection("Times");

	try {
		await TimeCollection.deleteMany(filter);
		CloseConnection();
	} catch (err) {
		console.log(err);
	}
}
