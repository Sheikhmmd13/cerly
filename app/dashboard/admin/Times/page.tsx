import TimeManagement from "@/components/dashboard/Admin/Times/TimeManagement";
import TimesList from "@/components/dashboard/Admin/Times/TimesList";
import React from "react";

function page() {
	return (
		<section className="w-full flex justify-between items-start flex-col-reverse md:flex-row-reverse gap-10">
			<div className="flex-1 max-md:pl-5">
				{/* the problem is here */}
				{/* <TimesList /> */}
			</div>
			<TimeManagement />
		</section>
	);
}

export default page;
