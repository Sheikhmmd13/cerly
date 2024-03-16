import Link from "next/link";
import React from "react";

function Button() {
	return (
		<button className="justify-self-start bg-[#CC9900] text-[#f1f1f1] text-xl px-[24px] py-[11px] rounded-lg transition-shadow hero-bottom-hover">
			<Link href={'/times-list'}>ثبت نوبت</Link>
		</button>
	);
}

export default Button;
