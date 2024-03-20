"use server";

import { ObjectId } from "mongodb";
import { CloseConnection, ConnectToCollection } from "..";
import { getAllTimes } from "../timeActions";

export type CreateUserType = {
	firstName: string;
	lastName: string;
	phoneNum: string;
	password: string;
};
async function CreateUser(userData: CreateUserType) {
	const UsersCollection = await ConnectToCollection("users");
	const UserInfo: CreateUserType = {
		...userData, phoneNum: ("0" + userData.phoneNum)
	}
	try {
		const result = await UsersCollection.insertOne(UserInfo);
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

export async function getUserTimes(userInfo: {phoneNum: string, password: string}) {
	const UsersCollection = await ConnectToCollection("users");
	try {
		const AllUserInfo = await UsersCollection.findOne({phoneNum: userInfo.phoneNum, password: userInfo.password})
		const UserId = AllUserInfo?._id.toString();

		const Times = await getAllTimes();
	
		return Times?.filter(time => time.userId === UserId);
	} catch(err) {
		console.log(err)
	}
}

export { CreateUser, CheckUserExistWithPhoneNum };
