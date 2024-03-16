"use client";

import { type errorState } from "@/components/Form";
import { CreateUserAction } from "@/lib/Server Actions/CreateUserAction";
import { SignupFormSchema } from "@/lib/FormSchemas";
import { useRef, useState } from "react";

type useCreationUserActionProps = {
      formData: FormData,
      setErrors: (error: errorState) =>void
}
async function useCreationUserAction({formData, setErrors}: useCreationUserActionProps): Promise<boolean> {
	//Contstruct Data from form
	const userData = {
		firstName: formData.get("firstName") as string,
		lastName: formData.get("lastName") as string,
		phoneNum: formData.get("phoneNum") as string,
		password: formData.get("password") as string,
	};

	//Client-side validation
	const result = SignupFormSchema.safeParse(userData);
	let error: errorState = {};
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			error[issue.path[0]] = { message: issue.message };
		});

		setErrors(error);
		return false;
	} else {
            //Create User in DB
			//todo: Check user is create acount before or not?
            await CreateUserAction(userData);
		return true
      }
}

export default useCreationUserAction;
