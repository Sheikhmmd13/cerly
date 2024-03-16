"use client";

import { usePathname } from "next/navigation";

export default function DynamicHeader(props: any): JSX.Element {
	const pathName = usePathname();
	return pathName.includes("/dashboard/admin") ? <div></div> : props.children;
}
