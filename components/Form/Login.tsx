"use client";

import React from "react";
import { motion } from "framer-motion";

import Input from "@/components/Input";
import SubmitBtn from "./SubmitBtn";
import Link from "next/link";
import { sideAnimation } from "@/config/motion";
import { useFormState } from "react-dom";
import AuthenticationAction from "@/lib/Server Actions/Authentication";
import { FormInput, errorState } from "./Signup";

const initialState: errorState = {};

function Login() {
	const [state, formAction] = useFormState(
		AuthenticationAction,
		initialState,
	);
	const LoginInputs: FormInput[] = [
		{ name: "phoneNum", placeholder: "بدون صفر شماره تماس" },
		{ name: "password", placeholder: "رمز عبور" },
	];
	return (
		<motion.div className="w-full" {...sideAnimation("down")}>
			<h2 className="text-white text-2xl font-bold text-center mb-10">
				فرم ورود
			</h2>
			<form
				action={formAction}
				className="w-full flex flex-col gap-7">
				{LoginInputs.map((input) => (
					<div
						key={input.name}
						className="w-full input_controll flex flex-col gap-[2px]">
						<Input
							name={input.name}
							placeholder={input.placeholder}
							type={
								input.name === "password"
									? "password"
									: "number"
							}
							className="input w-full"
							errorMsg={
								state?.[input.name]?.message
							}
						/>
					</div>
				))}
				<SubmitBtn title="ورود"/>
				<p className="text-sm text-center text-[#757575]">
					قبلا ثبت نام نکردید؟
					<Link
						href={"/auth/signup"}
						className="text-blue-600 pr-1">
						ثبت نام کنید!
					</Link>
				</p>
			</form>
		</motion.div>
	);
}

export default Login;
