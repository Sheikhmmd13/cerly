import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/colors/purple.css";
import "react-multi-date-picker/styles/layouts/mobile.css";

function PickingDate() {
	const todayDate = new DateObject({
		calendar: persian,
		locale: persian_fa,
	}).format();
	const [date, setDate] = useState(todayDate);

	const isInMobile = window.innerWidth <= 600;

	const converter = (text) =>
		text.replace(/[٠-٩۰-۹]/g, (a) => a.charCodeAt(0) & 15);
	const DateonChangeHandler = async (value) => {
		const selectedDate = value
			.format()
			.split("/")
			.map((slide) => Number(converter(slide)))
			.join("-");
		console.log(selectedDate);

		const body = {
			date: selectedDate,
			times: {
				t1: { start: "09:00", end: "10:30" },
				t2: { start: "10:45", end: "11:30" },
				t3: { start: "11:30", end: "12:30" },
				t4: { start: "13:00", end: "14:30" },
			},
		};

		const responsePost = await fetch(
			"https://cerly-8cfc9-default-rtdb.firebaseio.com/Times.json",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}
		);
		const dataPost = await responsePost.json();

		const response = await fetch(
			"https://cerly-8cfc9-default-rtdb.firebaseio.com/Times.json"
		);

		const data = await response.json();
	};

	return (
		<DatePicker
			className={`purple ${isInMobile ? "rmdp-mobile" : ""}`}
			inputClass="date-picker"
			animations={[
				opacity(),
				transition({
					from: 40,
					transition:
						"all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
				}),
			]}
			value={date}
			onChange={DateonChangeHandler}
			calendar={persian}
			locale={persian_fa}
			calendarPosition="bottom-center"
		/>
	);
}
export default PickingDate;
