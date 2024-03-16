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
		CloseConnection();
		return result;
	} catch (err) {
		console.log(err);
	}
}

async function CheckUserExistWithPhoneNum(phoneNum: string) {
	const UsersCollection = await ConnectToCollection("users");

	try {
		const result =  await UsersCollection.findOne({
			phoneNum: phoneNum,
		});
		CloseConnection();
		return result;
	} catch (err) {
		console.log(err);
	} 
}

export async function getUserInfo(userId: string) {
	if (userId.trim() === "") return {};

	const UsersCollection = await ConnectToCollection("users");
	try {
		const userInfo = await UsersCollection.findOne({
			_id: new ObjectId(userId),
		});
		CloseConnection();

		return userInfo;
	} catch (err) {
		console.log(err);
	}
}

export { CreateUser, CheckUserExistWithPhoneNum };
