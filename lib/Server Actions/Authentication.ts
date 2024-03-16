"use server";
import { type JWTPayload, SignJWT, jwtVerify } from "jose";
import { ConnectToCollection } from "../dataBase";
import { Data } from "iconsax-react";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "../Crypting";
import { CheckUserExistWithPhoneNum } from "../dataBase/userActions";
import { errorState } from "@/components/Form/Signup";
import { redirect } from "next/navigation";
import { UserSession } from "@/components/Header";
import { CookiesOptions } from "next-auth";

const AdminPass = process.env.ADMIN_PASSWORD;
const AdminPhoneNum = process.env.ADMIN_PHONENUM;

export async function getCookies(role: "user" | "admin") {
	if (role === "user") {
		const Usersession = cookies().get("Cerly__is_Auth")?.value;
		if (!Usersession) return null;
		return await decrypt(Usersession);
	} else {
		const AdminSession = cookies().get("Cerly__user_isAdmin")?.value;
		if (!AdminSession) return null;
		return await decrypt(AdminSession);
	}
}

async function setSessionCookie(
	cookieName: string,
	sessionData: { phoneNum: string; password: string },
) {
	const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
	const session = await encrypt({
		sessionData,
		expires,
	});
	cookies().set(cookieName, session, { expires });
}

function CheckFormSchema(formData: FormData) {}

async function Authentication(formData: FormData) {
	let errors: errorState = {};

	const userData = {
		phoneNum: ("0" + formData.get("phoneNum")) as string,
		password: formData.get("password") as string,
	};

	const exisitingUser = await CheckUserExistWithPhoneNum(userData.phoneNum);

	if (exisitingUser) {
		//checking is Admin
		if (
			exisitingUser.password === AdminPass &&
			exisitingUser.phoneNum === AdminPhoneNum
		) {
			setSessionCookie("Cerly__user_isAdmin", userData);
		} else if (exisitingUser.password === userData.password) {
			setSessionCookie("Cerly__is_Auth", userData);
		} else {
			errors["password"] = { message: "رمز عبور نادرست است" };
		}
	} else {
		errors["phoneNum"] = { message: "اکانت با این شماره تماس پیدا نشد" }
	}

	return errors;
}

export default async function AuthenticationAction(
	prevState: any,
	formData: FormData,
): Promise<errorState> {
	return Authentication(formData);
}
