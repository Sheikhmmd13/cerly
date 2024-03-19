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
			className={`w-full flex-center py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all cursor-pointer`}
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
						stroke="currentColor"
						strokeWidth="4"></circle>
					<path
						className="opacity-75"
						fill="currentColor"
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
			{!pending ? <span className="bg-[#101010] flex-center shadow-lg w-[45px] h-[45px] rounded-full cursor-pointer border border-transparent hover:border-red-500 transition-all">
				<Trash variant="Bulk" color="#EE4444" />
			</span> : <motion.svg
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
						stroke="#EE4444"
						strokeWidth="4"></circle>
					<path
						className="opacity-75"
						fill="#EE4444"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</motion.svg>}
		</button>
	);
}

type ServiceCardProps = {
	service: serviceItem;
	category: string;
};

const initialState: { isSubmitted: boolean } = { isSubmitted: false };

function ServiceAdminCard({ service, category }: ServiceCardProps) {
	const [isEditting, setIsEditting] = useState<boolean>(false);
	const [state, formAction] = useFormState(ChangeService, initialState);

	useEffect(() => {
		if (state.isSubmitted) {
			setIsEditting(false);
		}
	}, [state.isSubmitted]);

	return (
		<section className="w-full h-fit flex justify-between items-center py-1 px-2">
			<form action={formAction} className="flex items-start gap-3">
				<div className="flex flex-col justify-start items-start gap-2">
					<input
						type="text"
						className={`bg-transparent w-fit py-2 px-2 text-[#f1f1f1] text-[16px] rounded-lg border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						name="title"
						value={service.title}
					/>
					<input
						type="text"
						className={`bg-transparent py-1 px-2 text-[#f1f1f195] text-[12px] rounded-lg border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						name="description"
						value={service.description}
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-2">
					<input
						type="text"
						data-editting="false"
						className={`bg-transparent py-1 px-2 rounded-lg border border-transparent  focus:ring-0 focus:outline-none focus:border-[#cc9900] focus-visible:text-[#cc9900] focus:rounded-xl transition-all`}
						disabled={!isEditting}
						name="price"
						defaultValue={service.price}
					/>
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
				</div>
			</form>
			<div className="icons flex-center flex-row-reverse gap-2">
				<span
					className="bg-[#101010] flex-center shadow-lg w-[45px] h-[45px] rounded-full cursor-pointer border border-transparent hover:border-[#cc9900] transition-all"
					onClick={() => {
						setIsEditting(true);
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
