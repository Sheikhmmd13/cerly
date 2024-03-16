"use client";

import Input from "@/components/Input";
import useCreationUserAction from "@/hooks/useCreationUserAction";
import React, {
	FormEvent,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { sideAnimation } from "@/config/motion";
import { useZorm } from "react-zorm";
import { object, z } from "zod";
import { SignupFormSchema } from "@/lib/FormSchemas";
import { SingupAction } from "@/lib/Server Actions/SignupUserAction";
import Link from "next/link";
import SubmitBtn from "./SubmitBtn";

export type FormInput = {
	name: "firstName" | "lastName" | "phoneNum" | "password";
	placeholder: string;
	error?: string;
};

export type errorState = {
	[path: string | number]: {
		message: string;
	};
};

const initialState: errorState = {};

function Signup() {
	const [state, formAction] = useFormState(SingupAction, initialState);

	const SignupInputs: FormInput[] = [
		{ name: "firstName", placeholder: "نام" },
		{ name: "lastName", placeholder: "نام خانوادگی" },
		{ name: "phoneNum", placeholder: "شماره تماس بدون صفر" },
		{ name: "password", placeholder: "رمز عبور" },
	];

	return (
		<motion.div className="w-full" {...sideAnimation("down")}>
			<h2 className="text-white text-2xl font-bold text-center mb-10">
				فرم ثبت نام
			</h2>
			<form
				action={formAction}
				className="w-full flex flex-col gap-7">
				{SignupInputs.map((input) => (
					<div
						key={input.name}
						className="w-full input_controll flex flex-col gap-[2px]">
						<Input
							name={input.name}
							placeholder={input.placeholder}
							className="input w-full"
							type={
								input.name === "password"
									? "password"
									: "text"
							}
							errorMsg={
								state?.[input.name]?.message
							}
						/>
					</div>
				))}
				<SubmitBtn title="ثبت نام"/>
				<p className="text-sm text-center text-[#757575]">
					قبلا ثبت نام کردید؟
					<Link
						href={"/auth/login"}
						className="text-blue-600 pr-1">
						وارد شوید؟
					</Link>
				</p>
			</form>
		</motion.div>
	);
}

export default Signup;
