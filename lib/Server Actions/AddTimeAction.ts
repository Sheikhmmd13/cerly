"use server";

import moment from "jalali-moment";
import { AddTimeToDb, AddTimeType } from "../dataBase/timeActions";
import { errorState } from "@/components/Form/Signup";
import { AddTimeValidation } from "../FormSchemas";
import { revalidatePath } from "next/cache";
import { ConnectToCollection } from "../dataBase";

export async function SolarToMiladyHandler(date: string) {
	const dbDate = moment.from(date, "fa", "YYYY/M/D").format("YYYY-MM-DD");
	return dbDate;
}

function SolarDateInPersian(solarDate: string) {
	const persianMonths = [
		"فروردین",
		"اردیبهشت",
		"خرداد",
		"تیر",
		"مرداد",
		"شهریور",
		"مهر",
		"آبان",
		"آذر",
		"دی",
		"بهمن",
		"اسفند",
	];

	const [year, month, day] = solarDate.split("/");
	switch (month) {
		case "01":
			return [day, persianMonths[0], year].join("/");
		case "02":
			return [day, persianMonths[1], year].join("/");
		case "03":
			return [day, persianMonths[2], year].join("/");
		case "04":
			return [day, persianMonths[3], year].join("/");
		case "05":
			return [day, persianMonths[4], year].join("/");
		case "06":
			return [day, persianMonths[5], year].join("/");
		case "07":
			return [day, persianMonths[6], year].join("/");
		case "08":
			return [day, persianMonths[7], year].join("/");
		case "09":
			return [day, persianMonths[8], year].join("/");
		case "10":
			return [day, persianMonths[9], year].join("/");
		case "11":
			return [day, persianMonths[10], year].join("/");
		case "12":
			return [day, persianMonths[11], year].join("/");
	}
}

export async function AddTimeAction(prevState: any, formData: FormData) {
	let errors: errorState = {};
	let successMsg: string | null = null;
	try {
		const solarDate = formData.get("date") as string;
		const time = formData.get("time") as string;

		//validation
		const TimeObjectForValidation = {
			date: solarDate,
			time: time,
		};

		const ValidaitonResult = AddTimeValidation.safeParse(
			TimeObjectForValidation,
		);
		if (!ValidaitonResult.success) {
			ValidaitonResult.error.issues.forEach((issue) => {
				errors[issue.path[0]] = { message: issue.message };
			});
		}
		//validation end

		const dbDate = await SolarToMiladyHandler(solarDate);
		const persianSolarDate = SolarDateInPersian(solarDate)!;
		const TimeDataStructure: AddTimeType = {
			date: dbDate,
			solarDate: persianSolarDate,
			time: time,
			userId: "",
		};
		// delete passed date in db
		const currentDate = new Date();
		const EnteredDate = new Date(dbDate);
		if(EnteredDate < currentDate) {
			errors['date'] = {message: "این تاریخ گذشته است"}
		}

		const hasErrors = Object.keys(errors).length !== 0;

		if (!hasErrors) {
			const SubmitingResult = await AddTimeToDb(TimeDataStructure);
			// null means that time was exist on db
			if (SubmitingResult === null) {
				errors["time"] = {
					message: "این زمان قبلا ثبت شده است",
				};
			} else {
				if (hasErrors) {
					successMsg = null;
				} else {
					revalidatePath("/dashboard/admin/Times");
					successMsg = "نوبت شما با موفقیت ثبت شد";
				}
			}
		}
	} finally {
		return { errors, successMsg };
	}
}
