"use server";

import { ObjectId } from "mongodb";
import { CloseConnection, ConnectToCollection } from "..";

export type CreateUserType = {
	firstName: string;
	lastName: string;
	phoneNum: string;
	password: string;
};
async function CreateUser(userData: CreateUserType) {
	const UsersCollection = await ConnectToCollection("users");
	try {
		const result = await UsersCollection.insertOne(userData);
		return result;
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection()
	}
}

async function CheckUserExistWithPhoneNum(phoneNum: string) {
	const UsersCollection = await ConnectToCollection("users");

	try {
		const result =  await UsersCollection.findOne({
			phoneNum: phoneNum,
		});
		return result;
	} catch (err) {
		console.log(err);
	} finally {
		CloseConnection();
	}
}

export async function getUserInfo(userId: string) {
	if (userId.trim() === "") return {};

	const UsersCollection = await ConnectToCollection("users");
	try {
		const userInfo = await UsersCollection.findOne({
			_id: new ObjectId(userId),
		});

		return userInfo;
	} catch (err) {
		console.log(err);
	}
	finally {
		CloseConnection();
	}
}

export { CreateUser, CheckUserExistWithPhoneNum };
