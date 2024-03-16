"use client";

import SubmitBtn from "@/components/Form/SubmitBtn";
import React, { FormEvent, useEffect } from "react";
import moment from "jalali-moment";
import { AddTimeAction } from "@/lib/Server Actions/AddTimeAction";
import { useFormState } from "react-dom";
import { errorState } from "@/components/Form/Signup";
import Input from "@/components/Input";

const initialState: { errors: errorState; successMsg: string | null } = {
	errors: {},
	successMsg: null,
};

type AddTimeInput = {
	name: string;
	id: string;
	placeholder: string;
	label: string;
};

function TimeManagement() {
	const [state, formAction] = useFormState(AddTimeAction, initialState);

	const AddTimeInputs: AddTimeInput[] = [
		{
			name: "date",
			placeholder: "تاریخ با فرمت  yyyy/mm/dd",
			id: "date",
			label: "تاریخ نوبت:",
		},
		{
			name: "time",
			placeholder: "زمان با فرمت 00:00",
			id: "time",
			label: "زمان نوبت:",
		},
	];

	return (
		<div className="w-[400px] h-fit bg-[#252525] rounded-lg max-md:my-10 py-16">
			<h2 className="text-center text-2xl font-bold text-[#f1f1f1]">
				افزودن نوبت
			</h2>
			<form
				action={formAction}
				className="w-[80%] mx-auto mt-10 flex flex-col gap-7">
				{AddTimeInputs.map((inputInfo, index) => (
					<div
						className="form-control flex flex-col items-start gap-3"
						key={inputInfo.id}>
						<label
							htmlFor={inputInfo.id}
							className="text-[#888888] text-sm">
							{inputInfo.label}
						</label>
						<Input
							id={inputInfo.id}
							name={inputInfo.name}
							className="input w-full"
							placeholder={inputInfo.placeholder}
							errorMsg={
								state.errors?.[inputInfo.name]
									?.message
							}
						/>
					</div>
				))}
				<SubmitBtn title="ثبت نوبت" />
				{state.successMsg !== null && (
					<small className="text-green-500 text-center">
						{state.successMsg}
					</small>
				)}
			</form>
		</div>
	);
}

export default TimeManagement;
