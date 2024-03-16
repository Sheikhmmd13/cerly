"use client";
import { Ankr, BoxTime, Home, Reserve, User } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

//styling
import styles from "./Aside.module.css";
import { sideAnimation } from "@/config/motion";

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
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [isExpend, setIsExpend] = useState<boolean>(false);

	const ClickHandler = (index: number) => {
		setActiveIndex(index);
	};

	const NavStartHoverdHandler = () => {
		setIsExpend(true);
	};

	const NavEndHoverdHandler = () => {
		setIsExpend(false);
	};

	return (
		<motion.nav
			{...sideAnimation("right")}
			className={styles.adminPanel__nav}
			data-isexpend={isExpend ? "true" : "false"}
			onHoverStart={NavStartHoverdHandler}
			onHoverEnd={NavEndHoverdHandler}>
			<ul className="adminPanel_aside__ul">
				{AdminNavItems.map((navItem, index) => (
					<motion.li
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							type: "spring",
							delay: index * 0.2,
						}}
						key={navItem.name + index}
						data-active={
							activeIndex === index
								? "true"
								: "false"
						}
						onClick={() => {
							ClickHandler(index);
						}}>
						{navItem.icon}

						<Link
							href={navItem.path}
							className="link__name">
							{navItem.name}
						</Link>
					</motion.li>
				))}
			</ul>
			<h2>لوگو</h2>
		</motion.nav>
	);
}

export default Aside;
