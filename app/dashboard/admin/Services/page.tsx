import MobileServices from "@/components/dashboard/Admin/Services/MobileServices";
import React from "react";

function page() {
	return (
		<div>
			<div className="text-white md:hidden">
				<MobileServices />
			</div>
			<h2 className="text-white max-md:hidden">Desktop Services</h2>
		</div>
	);
}

export default page;
