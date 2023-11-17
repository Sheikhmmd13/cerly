import React from "react";
import { useContext } from "react";

import PickingDate from "./PickingDate";
import TimesBox from "./TimesBox";
import ModalForm from "./ModalForm";
import ShowModalContext, {
	ShowModalContextProvider,
} from "../context/ShowModalContext";
import svg from "../assest/img/qqquad (1).svg";

export default function Layout() {
	const showModal_CTX = useContext(ShowModalContext);

	return (
		<div className="bg-purple w-[100vw] h-[100vh] flex items-center justify-center max-md:justify-center max-md:border-none max-md:rounded-none -z-20">
			<div className="z-40 p-10 bg-white w-2/3 h-[90%] rounded-2xl shadow-myShadow flex items-center justify-around mr-3 max-md:flex-col-reverse max-md:justify-center max-md:gap-10 overflow-y-auto">
			نوبت ها ثبت شده تو فایربیسی فقط باید سعی کنی اونا رو بخونی
				<TimesBox openModal={showModal_CTX.OpenModal} />
				<PickingDate />
				{showModal_CTX.IsShownModal ? (
					<ModalForm closeModal={showModal_CTX.CloseModal} />
				) : null}
			</div>
			<img
				src={svg}
				className="absolute w-full"
			/>
		</div>
	);
}
