import { getCookies } from "@/lib/Server Actions/Authentication";
import { animate, delay } from "framer-motion";

export type NavItem = {
	name: string;
	path: string;
};

export function getAllNavItems() {
	// const userSession = await getCookies();
	let newNavItem: NavItem;





	getCookies().then((result) => {
		// if (result) {
		// 	if (
		// 		result.userData.phoneNum === AdminPhoneNum &&
		// 		result.userData.password === AdminPass
		// 	) {
		// 		newNavItem = {
		// 			name: "پنل ادمین",
		// 			path: "/dashboard/admin",
		// 		};
		// 	} else {
		// 		newNavItem = {
		// 			name: "پنل کاربری",
		// 			path: "/dashboard/user",
		// 		};
		// 	}
		// } else {
		// 	//user doesn't log in
		// 	newNavItem = {
		// 		name: "ورود",
		// 		path: "/auth/login",
		// 	};
		// }

		NavItems.push(newNavItem);
	});

	return NavItems;
}
export const NavItems: NavItem[] = [
	{
		name: "صفحه اصلی",
		path: "/",
	},
	{
		name: "لیست نوبت ها",
		path: "/times-list",
	},
	{
		name: "درباره من",
		path: "/about",
	},
];

export type serviceItem = {
	title: string;
	description: string;
	price: number;
};

export type ServicesTitle = "hair-cut" | "beard-cut" | "hair-color";
type Services = {
	hairCut: { title: ServicesTitle; Services: serviceItem[] };
	beardCut: { title: ServicesTitle; Services: serviceItem[] };
	hairColor: { title: ServicesTitle; Services: serviceItem[] };
};

export const Services: Services[] = [
	{
		hairCut: {
			title: "hair-cut",
			Services: [
				{
					title: "مدل مو کلاسیک",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "مدل مو کلاسیک",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "مدل مو کلاسیک",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "مدل مو کلاسیک",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "مدل مو کلاسیک",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
			],
		},
		beardCut: {
			title: "beard-cut",
			Services: [
				{
					title: "اصلاح ریش",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "اصلاح ریش",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "اصلاح ریش",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "اصلاح ریش",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "اصلاح ریش",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
			],
		},
		hairColor: {
			title: "hair-color",
			Services: [
				{
					title: "رنگ مو",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "رنگ مو",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "رنگ مو",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "رنگ مو",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
				{
					title: "رنگ مو",
					description: "مناسب اقایانی با استایل اولد مانی ",
					price: 100,
				},
			],
		},
	},
];
