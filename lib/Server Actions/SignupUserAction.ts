"use server";

import { errorState } from "@/components/Form/Signup";
import { SignupFormSchema } from "../FormSchemas";
import {
	CheckUserExistWithPhoneNum,
	CreateUser,
	type CreateUserType,
} from "../dataBase/userActions";
import { redirect } from "next/navigation";

export async function SingupAction(
	pervState: any,
	formData: FormData,
): Promise<errorState> {
	const userData: CreateUserType = {
		firstName: formData.get("firstName") as string,
		lastName: formData.get("lastName") as string,
		phoneNum: formData.get("phoneNum") as string,
		password: formData.get("password") as string,
	};

	//Validation Form
	const result = SignupFormSchema.safeParse(userData);
	let errors: errorState = {};
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			errors[issue.path[0]] = { message: issue.message };
		});
	}

	if (Object.keys(errors).length === 0) {
		const isUserSignedup = await CheckUserExistWithPhoneNum(
			userData.phoneNum,
		);

		if (isUserSignedup) {
			errors = {
				phoneNum: {
					message: "با این شماره تماس ثبت نام شده است",
				},
			};
		} else {
			await CreateUser(userData);
			redirect("/auth/login");
		}
	}
	return errors;
}
