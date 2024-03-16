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
