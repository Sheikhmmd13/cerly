import { z } from "zod";

export const SignupFormSchema = z.object({
	firstName: z
		.string()
		.min(3, { message: "نام شما باید حداقل 3 حرف باشد" })
		.refine((value) => value.trim() !== "", {
			message: "این فیلد باید پر شود",
			path: ["firstName"],
		}),
	lastName: z
		.string()
		.min(3, {
			message: "نام خانوادگی شما باید حداقل 3 حرف باشد",
		})
		.refine((value) => value.trim() !== "", {
			message: "این فیلد باید پر شود",
			path: ["lastName"],
		}),
	phoneNum: z
		.string()
		.min(10, {
			message: "شماره همراه خود را کامل وارد کنید",
		})
		.max(10, {
			message: "شماره شما بیشتر از 10 رقم است",
		})
		.regex(new RegExp(/^[0-9]/), {
			message: "شماره تماس باید از اعداد باشد",
		})
		.refine((value) => value.toString().trim() !== "", {
			message: "این فیلد باید پر شود",
			path: ["phoneNum"],
		}),
	password: z
		.string()
		.min(7, {
			message: "رمز عبور باید حداقل 7 کارکتر داشته باشید",
		})
		.refine((pw) => /[0-9]/.test(pw), "رمز عبور باید شامل اعداد باشد")
		.refine((value) => value.trim() !== "", {
			message: "این فیلد باید پر شود",
			path: ["password"],
		}),
});

export const AddTimeValidation = z.object({
	date: z
		.string()
		.regex(
			/^(?:\d{4})[-/](0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])$/,
			{ message: "فرمت تاریخ درست نیست" },
		).refine((value) => value.trim() !== "", {
			message: "این فیلد باید پر شود",
			path: ["password"],
		}),
	time: z
		.string()
		.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
			message: "فرمت زمان درست نیست",
		}).refine((value) => value.trim() !== "", {
			message: "این فیلد باید پر شود",
			path: ["password"],
		}),
});
