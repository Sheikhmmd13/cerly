"use client";

import { type serviceItem } from "@/lib/dataBase/ServiceActions";
import { Edit, TickSquare, Trash } from "iconsax-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { sideAnimation } from "@/config/motion";
import { SubmitButton } from "@/components/Times List Section/TimeBox";
import { ChangeService } from "@/lib/Server Actions/ChangeService";
import { useFormState, useFormStatus } from "react-dom";
import { DeleteService } from "@/lib/Server Actions/DeleteService";

function SubmitInput({
	setIsEditting,
}: {
	setIsEditting: (isEditting: boolean) => void;
}) {
	const { pending } = useFormStatus();

	return (
		<motion.button
			transition={{ type: "spring", duration: 0.35 }}
			className={`w-full flex-center flex-row-reverse gap-1 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all cursor-pointer`}
			type="submit">
			ثبت تغییرات{" "}
			{pending && (
				<motion.svg
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "spring", duration: 0.4 }}
					className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24">
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="#16A34A"
						strokeWidth="4"></circle>
					<path
						className="opacity-75"
						fill="#16A34A"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</motion.svg>
			)}
		</motion.button>
	);
}

function DeleteButton() {
	const { pending } = useFormStatus();

	return (
		<button type="submit">
			<span className="bg-[#101010] flex-center shadow-lg w-[45px] h-[45px] rounded-full cursor-pointer border border-transparent hover:border-red-500 transition-all">
				{!pending ? (
					<Trash variant="Bulk" color="#EE4444" />
				) : (
					<motion.svg
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							duration: 0.4,
						}}
						className="animate-spin h-5 w-5 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24">
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="#EE4444"
							strokeWidth="4"></circle>
						<path
							className="opacity-75"
							fill="#EE4444"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</motion.svg>
				)}
			</span>
		</button>
	);
}

type ServiceCardProps = {
	service: serviceItem;
	category: string;
};

const initialState: { isSubmitted: boolean; message: string } = {
	isSubmitted: false,
	message: "",
};

function ServiceAdminCard({ service, category }: ServiceCardProps) {
	const [isEditting, setIsEditting] = useState<boolean>(false);
	const [state, formAction] = useFormState(ChangeService, initialState);

	useEffect(() => {
		if (state.isSubmitted) {
			setIsEditting(false);
		}
	}, [state.isSubmitted]);

	return (
		<section className="w-[95%] mx-auto border border-[#353535] rounded-lg p-1 h-28 flex flex-row-reverse justify-between items-center py-1 px-2">
			<form
				action={formAction}
				className="w-3/4 flex flex-row-reverse items-start gap-3">
				<div className="flex flex-col justify-start items-start gap-1">
					<input
						type="text"
						className={`bg-transparent text-end w-[130px] py-2 px-2 font-bold text-[#f1f1f1] text-[16px] rounded-md border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						name="title"
						value={service.title}
					/>
					<input
						type="text"
						className={`bg-transparent w-[130px] text-end  py-2 px-2 text-[#f1f1f195] text-[12px] rounded-sm border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						name="description"
						value={service.description}
					/>
				</div>
				<div className="h-full flex flex-col justify-start items-start gap-1">
					<div className="flex-center flex-row-reverse">
						<label
							htmlFor="price"
							className="text-[#cc9900] ml-2">
							:قیمت
						</label>
						<input
							type="text"
							className={`bg-transparent text-[#cc9900] w-[110px] text-end py-2 px-2 rounded-sm border border-transparent focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
							disabled={!isEditting}
							name="price"
							id="price"
							defaultValue={service.price}
						/>
					</div>
					<input
						type="text"
						defaultValue={service._id}
						name="serviceId"
						hidden
					/>
					<input
						type="text"
						defaultValue={category}
						name="category"
						hidden
					/>
					{isEditting && (
						<SubmitInput
							setIsEditting={setIsEditting}
						/>
					)}
					{state.message !== "" && (
						<small
							className={`w-full py-2 text-end ${
								state.isSubmitted
									? "text-green-500"
									: "text-red-500"
							}`}>
							{state.message}
						</small>
					)}
				</div>
			</form>
			<div className="icons flex-center flex-row-reverse gap-2">
				<span
					className="bg-[#101010] flex-center shadow-lg w-[45px] h-[45px] rounded-full cursor-pointer border border-transparent hover:border-[#cc9900] transition-all"
					onClick={() => {
						setIsEditting((prevState) => !prevState);
					}}>
					<Edit variant="Bulk" color="#cc9900" />
				</span>
				<form action={DeleteService}>
					<input
						type="text"
						defaultValue={service._id}
						name="serviceId"
						hidden
					/>
					<DeleteButton />
				</form>
			</div>
		</section>
	);
}

export default ServiceAdminCard;
