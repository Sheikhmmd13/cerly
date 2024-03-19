"use client";

import React, { FormEvent } from "react";

//shadcn
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SubmitButton } from "@/components/Times List Section/TimeBox";
import { AddService } from "@/lib/Server Actions/AddService";
import { useFormState } from "react-dom";

let intialState: { message: string; isError: boolean } = {message: "", isError: false};

function AddServiceForm() {
	const [state, formAction] = useFormState(AddService, intialState);

	return (
		<section className="w-[90%] mx-auto flex-center flex-col">
			<h2 className="text-white text-xl font-bold mb-5">
				فرم افزودن سرویس
			</h2>

			<form
				action={formAction}
				className="w-full flex flex-col gap-5">
				<input
					type="text"
					className="input w-full"
					name="title"
					placeholder="عنوان سرویس"
					required
				/>
				<input
					type="text"
					className="input w-full"
					name="description"
					placeholder="توضیحات سرویس"
					required
				/>
				<div className="w-full flex-center gap-3">
					<input
						type="number"
						className="input flex-1"
						name="price"
						placeholder="به تومن قیمت سرویس"
						required
					/>
					<Select name="category" required>
						<SelectTrigger className="w-[120px] h-fit py-3 text-[#999999] border-[#404040] shadow-none focus:border-[#cc9900] focus:text-[#cc9900]">
							<SelectValue placeholder="دسته بندی" />
						</SelectTrigger>
						<SelectContent className="w-[120px] bg-[#252525] text-[#999999] border-[#404040]">
							<SelectItem
								value="hairCut"
								className="">
								اصلاح مو
							</SelectItem>
							<SelectItem value="beardCut">
								اصلاح ریش
							</SelectItem>
							<SelectItem value="hairColor">
								رنگ مو
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<SubmitButton
					title="افزودن"
					className="button-submit flex-row-reverse gap-1"
				/>
				{state.message !== "" && (
					<small
						className={`text-center ${
							state.isError
								? "text-red-500"
								: "text-green-500"
						}`}>
						{state.message}
					</small>
				)}
			</form>
		</section>
	);
}

export default AddServiceForm;
