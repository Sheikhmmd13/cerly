import { AddTimeType, getAllTimes } from "@/lib/dataBase/timeActions";
import React from "react";
import TimeCard from "./TimeCard";
import { ObjectId } from "mongodb";
import { ConnectToCollection } from "@/lib/dataBase";

async function AsyncTimeCard({ time }: { time: any }) {
	const UserCollection = await ConnectToCollection("users");

	async function ConvertUserData(time: any) {
		let UserDataFromDb;

		time.userId !== ""
			? (UserDataFromDb = await UserCollection.findOne({
					_id: new ObjectId(time.userId),
			  }))
			: null;

		return {
			firstName: UserDataFromDb?.firstName as string,
			lastName: UserDataFromDb?.lastName as string,
			phoneNum: UserDataFromDb?.phoneNum as string,
		};
	}

	const ConvertedUserInfo = await ConvertUserData(time);
	const convertedTimeData = {
		_id: time._id.toString(),
		time: time.time,
		userId: time.userId,
	};
	return <TimeCard time={convertedTimeData} userInfo={ConvertedUserInfo} />;
}

async function TimeCardsContainer() {
	const Times = await getAllTimes();

	Times?.sort((a, b) => (a.date > b.date ? 1 : -1));

	//todo: analyz this
	const groupedData = Times?.reduce((acc: any, obj: any) => {
		const date = obj.date;
		acc[date] = acc[date] || [];
		acc[date].push(obj);
		return acc;
	}, {});
	return (
		<>
			{Object.keys(groupedData).map((date, index) => {
				const timeInfo = groupedData[date];
				return (
					<section
						key={index + timeInfo[0]}
						className="w-full flex-center flex-col gap-7">
						<header className="w-full flex justify-start items-center gap-5">
							<h2 className="text-[#cc9900] text-2xl font-bold">
								{timeInfo[0].solarDate}
							</h2>
							<div className="line h-[2px] rounded-full flex-1 shadow-lg bg-[#cc9900]"></div>
						</header>
						<main className="w-full flex justify-start flex-wrap gap-5">
							{timeInfo.map(
								(
									time: AddTimeType,
									index: number,
								) => (
									<AsyncTimeCard
										key={index}
										time={time}
									/>
								),
							)}
						</main>
					</section>
				);
			})}
		</>
	);
}

export default TimeCardsContainer;