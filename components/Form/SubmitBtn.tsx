"use client";

import React from "react";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

type submitBtnType = {
	title: string;
};
function SubmitBtn({ title }: submitBtnType) {
	const { pending } = useFormStatus();

	return (
		<motion.button
			transition={{ type: "spring", duration: 0.35 }}
			className={`button-submit flex-center ${
				pending ? "button-disable" : ""
			}`}
			type="submit">
			{title}{" "}
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

export default SubmitBtn;
