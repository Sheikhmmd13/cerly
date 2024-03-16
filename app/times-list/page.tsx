import TimesContainer from "@/components/Times List Section/TimesContainer";
import { TimesList } from "@/config/Times";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { AddTimeType, getAllTimes } from "@/lib/dataBase/timeActions";
import TimeBox from "@/components/Times List Section/TimeBox";

async function page() {
	const Times = await getAllTimes();

	//todo: analyz this
	const groupedData = Times?.reduce((acc: any, obj: any) => {
		const date = obj.date;
		acc[date] = acc[date] || [];
		acc[date].push(obj);
		return acc;
	}, {});

	return (
		<Suspense fallback={<Loading />}>
			<main className="w-[95%] max-w-[1400px] mx-auto h-full mt-[110px] flex flex-col items-center justify-start">
				{Object.keys(groupedData).map((date, index) => {
					const timeInfo = groupedData[date];

					return (
						<section key={index} className="w-full flex-center flex-col gap-5">
							<header className="w-full flex justify-start items-center gap-5">
								<h2 className="text-[#cc9900] text-2xl font-bold">
									{timeInfo[0].solarDate}
								</h2>
								<div className="line h-[2px] rounded-full flex-1 shadow-lg bg-[#cc9900]"></div>
							</header>
							<main className="flex justify-start flex-wrap gap-5">
								{timeInfo.map(
									(
										time: AddTimeType,
										index: number,
									) => (
										<TimeBox
											key={
												index +
												time.time
											}
											userId={
												time.userId
											}
											date={
												time.date
											}
											time={
												time.time
											}
											index={index}
										/>
									),
								)}
							</main>
						</section>
					);
				})}
			</main>
		</Suspense>
	);
}

export default page;
