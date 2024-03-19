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

function AddServiceForm() {
	return (
		<section className="w-[90%] mx-auto flex-center flex-col">
			<h2 className="text-white text-xl font-bold mb-5">
				فرم افزودن سرویس
			</h2>

			<form className="w-full flex flex-col gap-5">
				<input type="text" className="input w-full" placeholder="عنوان سرویس" required />
				<input
					type="text"
                              className="input w-full" 
					placeholder="توضیحات سرویس"
					required
				/>
				<div className="w-full flex-center gap-3">
					<input
						type="number"
						className="input flex-1"
						placeholder="به تومن قیمت سرویس"
						required
					/>
					<Select name="category" required>
						<SelectTrigger className="w-[120px] h-fit py-3 text-[#999999] border-[#404040] shadow-none focus:border-[#cc9900] focus:text-[#cc9900]">
							<SelectValue placeholder="دسته بندی" />
						</SelectTrigger>
						<SelectContent className="w-[120px] bg-[#252525] text-[#999999] border-[#404040]">
							<SelectItem value="hairCut" className="">
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
				<SubmitButton title="افزودن" className="button-submit"/>
			</form>
		</section>
	);
}

export default AddServiceForm;
