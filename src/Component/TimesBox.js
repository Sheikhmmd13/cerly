import React from "react";

import TimeBox from "./TimeBox";

export default function TimesBox({openModal}) {
	const array = ["", "", "", "", "", ""];
	return (
		<div className="container w-3/4 h-1/2 flex flex-col items-center justify-center gap-10">
			<h1 className="text-3xl flex items-center gap-2 max-md:mt-10 max-md:text-2xl">
				<span className="text-purple">زمانبندی </span>
				<p className="text-2xl text-zinc-900 max-md:text-xl">نوبت ها</p>
			</h1>

			<div className="flex flex-wrap items-center justify-center gap-5">
				{array.map(() => {
                    return <TimeBox openModal={openModal}/>
                })}
			</div>
		</div>
	);
}
