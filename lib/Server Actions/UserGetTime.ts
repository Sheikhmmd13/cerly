"use server";

import { redirect } from "next/navigation";
import { getCookies } from "./Authentication";
import { CheckUserExistWithPhoneNum } from "../dataBase/userActions";
import { GetOneTimeByUserid } from "../dataBase/timeActions";
import { revalidatePath } from "next/cache";

export async function UserGetTime(prevState: any, formData: FormData) {
	let errors: { message: string, isError: boolean } = { message: "", isError: false };

	const userCookie = await getCookies("user");
	const date = formData.get("date") as string;
	const time = formData.get("time") as string;

	if (userCookie === null) redirect("/auth/login");

	try {
		//user info from cookie
		const { phoneNum } = userCookie?.sessionData as {
			phoneNum: string;
			password: string;
		};

		const UserInfo = await CheckUserExistWithPhoneNum(phoneNum);
		const userId = UserInfo!._id.toJSON();
		const result = await GetOneTimeByUserid(userId, date, time);
		errors = {message: "نوبت شما ثبت شد", isError: false}

	}catch(err) {
		errors = {message: "خطا دوباره امتحان کنید", isError: true}
	} finally {
		revalidatePath("/times-list");
		return errors;
	}
}
