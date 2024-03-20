"use client";

import { UserGetTime } from "@/lib/Server Actions/UserGetTime";
import { getAllTimes } from "@/lib/dataBase/timeActions";
import { useAnimate, useInView, motion } from "framer-motion";
import { type ObjectId } from "mongodb";
import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { errorState } from "../Form/Signup";

type TimeBoxProps = {
	date: string;
	time: string;
	userId: any;
	index: number;
};

type SubmitButtonProps = {
	title: string;
} & ComponentPropsWithoutRef<"button">;
export function SubmitButton(props: SubmitButtonProps) {
	const { pending } = useFormStatus();
	const { title, className } = props;
	return (
		<motion.button
			transition={{ type: "spring", duration: 0.35 }}
			className={`${className} flex-center ${
				pending ? "button-disable" : ""
			}`}
			type="submit">
			{title}
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

const intialState: { message: string, isError: boolean } = { message: "", isError: false };
function TimeBox({ date, time, userId, index }: TimeBoxProps) {
	const [state, TimeSubmitAction] = useFormState(UserGetTime, intialState);

	const [isBooked, setIsBooked] = useState<boolean>(
		userId.trim() !== "" ? true : false,
	);

	//animation
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	useEffect(() => {
		if (state.message.trim() !== "" && !state.isError) setIsBooked(true);

		const showingElements = () => {
			animate(
				scope.current,
				{ scale: [0.8, 1], opacity: [0, 1] },
				{ type: "spring", delay: 0.25 * index },
			);
		};

		if (isInView) showingElements();
	}, [isInView, state.message]);

	return (
		<motion.section
			ref={scope}
			className={`w-[180px] h-[120px] bg-[${
				!isBooked ? "#cc9900" : "#252525"
			}] rounded-lg shadow-2xl py-5 ${
				isBooked ? "flex-center" : "flex-between"
			} flex-col text-white ${
				!isBooked ? "cursor-pointer" : "cursor-not-allowed"
			}`}>
			<h2 className="text-xl font-bold">{time}</h2>
			{!isBooked && (
				<form action={TimeSubmitAction}>
					<input
						type="text"
						name="time"
						value={time}
						hidden
						readOnly
					/>
					<input
						type="text"
						name="date"
						value={date}
						hidden
						readOnly
					/>
					<SubmitButton
						title="ثبت نوبت"
						type="submit"
						className="bg-[#cb8900] px-3 py-2 rounded-lg shadow-lg"
					/>
				</form>
			)}
			{state.message.trim() !== "" && (
				<p className={`text-[11px] text-center mt-3 ${state.isError ? "text-red-500" : "text-green-500"}`}>
					{state.message}
				</p>
			)}
		</motion.section>
	);
}

export default TimeBox;
