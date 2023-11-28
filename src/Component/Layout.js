import React, { useState, useEffect } from "react";
import { useContext } from "react";

import PickingDate from "./PickingDate";
import TimesBox from "./TimesBox";
import ModalForm from "./ModalForm";
import ShowModalContext from "../context/ShowModalContext";
import svg from "../assest/img/qqquad (1).svg";

export default function Layout() {
	const [date, setDate] = useState("");
	const [TimesList, setTimesList] = useState([]);
	const url = './times.json';
	
	var selectedTime;

	const showModal_CTX = useContext(ShowModalContext);

	const getDate = (value) => {
		setDate(value);
	};

	const fetchApi = () => {
		const body = {date: date}
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then((res) => res.json())
			.then((data) => setTimesList(data));
	};

	useEffect(() => {
		fetchApi();
	}, []);

	const getTime = (time) => {
		selectedTime = time
	}

	return (
		<div className="bg-purple w-[100vw] h-[100vh] flex items-center justify-center ">
			<div className="z-40 p-10 bg-white w-2/3 h-[90%] rounded-2xl shadow-myShadow flex items-center justify-around mr-3 max-md:flex-col-reverse max-md:justify-center max-md:gap- overflow-hidden max-sm:w-5/6">
				<TimesBox timesList={TimesList} openModal={showModal_CTX.OpenModal} getTime={getTime}/>
				<PickingDate getDate={getDate} />
				{showModal_CTX.IsShownModal ? (
					<ModalForm closeModal={showModal_CTX.CloseModal} time={selectedTime}/>
				) : null}
			</div>
			<img
				src={svg}
				className="absolute w-full"
			/>
		</div>
	);
}
