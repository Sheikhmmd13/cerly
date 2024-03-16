"use server";

import { cookies } from "next/headers";

export default async function LogoutAction(role: "admin" | "user") {
	try {
		if (role === "admin") {
			cookies().delete("Cerly__user_isAdmin");
		} else {
			cookies().delete("Cerly__is_Auth");
		}
	} catch(err) {
		console.log(err)
	}
}
