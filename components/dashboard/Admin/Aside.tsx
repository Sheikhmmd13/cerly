"use client";
import {
	Ankr,
	BoxTime,
	HambergerMenu,
	Home,
	Menu,
	Reserve,
	User,
} from "iconsax-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

//Shadcn
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

//styling
import styles from "./Aside.module.css";
import { sideAnimation } from "@/config/motion";
import Link from "next/link";

type AdminNavItem = {
	name: string;
	path: string;
	icon?: any;
};
const AdminNavItems: AdminNavItem[] = [
	{
		name: "لیست کاربر ها",
		path: "/dashboard/admin",
		icon: <User size={23} />,
	},
	{
		name: "لیست سرویس ها",
		path: "/dashboard/admin",
		icon: <Reserve size={23} />,
	},
	{
		name: "مدیریت سرویس ها",
		path: "/dashboard/admin",
		icon: <Ankr size={23} />,
	},
	{
		name: "مدیریت نوبت ها",
		path: "/dashboard/admin/Times",
		icon: <BoxTime size={23} />,
	},
	{ name: "صفحه اصلی", path: "/", icon: <Home size={23} /> },
];

function Aside() {

	return (
		<Sheet>
			<SheetTrigger>
				<HambergerMenu color="#f1f1f1" size={30} />
			</SheetTrigger>
			<SheetContent className={`${styles.adminPanel__nav} glassmorphism text-white`}>
				<SheetHeader>
					<SheetDescription>
						<ul className="adminPanel_aside__ul">
							{AdminNavItems.map(
								(navItem, index) => (
									<motion.li
										initial={{
											x: 100,
											opacity: 0,
										}}
										animate={{
											x: 0,
											opacity: 1,
										}}
										transition={{
											type: "spring",
											delay:
												index *
												0.2,
										}}
										key={navItem.name}>
										{navItem.icon}
										<Link
											href={
												navItem.path
											}
											className="link__name">
											{navItem.name}
										</Link>{" "}
									</motion.li>
								),
							)}
						</ul>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}

export default Aside;
