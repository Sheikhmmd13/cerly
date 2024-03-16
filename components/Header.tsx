import { NavItem } from "@/config/config";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { HambergerMenu } from "iconsax-react";
import { getCookies } from "@/lib/Server Actions/Authentication";
import LogoutAction from "@/lib/Server Actions/LogoutAction";

export interface UserSession {
	phoneNum: string;
	password: string;
}

const NavItems: NavItem[] = [
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
	{
		name: "",
		path: "",
	},
];

async function Header() {
	let showingLogoutBtn: boolean = false;

	const userSession = await getCookies("user");
	const AdminSession = await getCookies("admin");

	if (userSession !== null || AdminSession !== null) {
		NavItems[3] =
			AdminSession !== null
				? {
						name: "پنل ادمین",
						path: "/dashboard/admin",
				  }
				: {
						name: "پنل کاربری",
						path: "/dashboard/user",
				  };

		showingLogoutBtn = true;
	} else {
		NavItems[3] = {
			name: "ورود",
			path: "/auth/login",
		};
		showingLogoutBtn = false;
	}

	return (
		<header className="w-[95%] max-w-[1400px] h-16 mx-auto flex-between flex-row-reverse text-[#f1f1f1] font-regular z-50 py-2 px-6 glassmorphism fixed top-3 left-1/2 -translate-x-1/2">
			<div className="logo text-[#CC9900] font-bold text-xl">
				لوگو
			</div>
			<ul className="flex-center gap-5 mr-12 max-md:hidden">
				{NavItems.map((navItem) => (
					<li
						className="relative p-4 navitem-before transition-colors cursor-pointer hover:text-[#CC9900] "
						key={navItem.name}>
						<Link href={navItem.path}>
							{navItem.name}
						</Link>
					</li>
				))}
				{showingLogoutBtn && (
					<form
						action={async () => {
							"use server";
							await LogoutAction(
								userSession === null
									? "admin"
									: "user",
							);
						}}>
						<button className="button-submit px-4">
							خروج از حساب
						</button>
					</form>
				)}
			</ul>
			{/* FOR MOBILE */}
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger>
						<HambergerMenu className="scale-125" />
					</SheetTrigger>
					<SheetContent className="glassmorphism border-none text-white  list-none">
						<SheetHeader className="h-full">
							<SheetDescription className="flex-between flex-col h-full">
								<ul className="relative before:content-[''] before:h-[85%] before:w-[1px] before:bg-[#cc9900] before:absolute before:top-1/2 before:-translate-y-1/2 before:right-0 before:rounded-full">
									{NavItems.map(
										(navItem) => (
											<li
												className="text-lg text-[#f1f1f1] text-start mr-5 relative p-4 navitem-before transition-colors cursor-pointer hover:text-[#CC9900] "
												key={
													navItem.name
												}>
												<Link
													href={
														navItem.path
													}>
													{
														navItem.name
													}
												</Link>
											</li>
										),
									)}
								</ul>
								<div className="flex-center flex-col gap-3">
									<h2 className="text-2xl text-center text-[#cc9900] font-bold">
										لوگو
									</h2>
									{showingLogoutBtn && (
										<form
											action={async () => {
												"use server";
												await LogoutAction(
													userSession ===
														null
														? "admin"
														: "user",
												);
											}}>
											<button className="button-submit px-4">
												خروج از
												حساب
											</button>
										</form>
									)}
								</div>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}

export default Header;
