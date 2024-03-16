import React, { ComponentPropsWithoutRef } from "react";

type InputProps = {
	name: string;
	placeholder: string;
	errorMsg?: string;
} & ComponentPropsWithoutRef<"input">;

function Input(props: InputProps) {
	const { name, placeholder, errorMsg, ...otherInputProps } = props;
	return (
		<>
			<input
				type="text"
				name={name}
				placeholder={placeholder}
				{...otherInputProps}
			/>
			{errorMsg === "" ||
				(errorMsg && (
					<small className="text-[11px] text-red-500">
						{errorMsg}
					</small>
				))}
		</>
	);
}

export default Input;
