import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";

import "react-multi-date-picker/styles/colors/purple.css";
import "react-multi-date-picker/styles/layouts/mobile.css";

function PickingDate({ getDate }) {
	const todayDate = new DateObject({
		calendar: persian,
		locale: persian_en,
	}).format();
	const [date, setDate] = useState(todayDate);

	const isInMobile = window.innerWidth <= 600;

	const converter = (text) =>
		text.replace(/[٠-٩۰-۹]/g, (a) => a.charCodeAt(0) & 15);

	getDate(date);
	const DateonChangeHandler = async (value) => {
		const selectedDate = value
			.format()
			.split("/")
			.map((slide) => Number(converter(slide)))
			.join("/");
		getDate(selectedDate)
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
