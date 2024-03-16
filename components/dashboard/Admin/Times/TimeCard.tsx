'use client'

import { SubmitButton } from "@/components/Times List Section/TimeBox";
import { DeleteTimeAction } from "@/lib/Server Actions/DeleteTimeAction";
import { AddTimeType } from "@/lib/dataBase/timeActions";
import { ObjectId } from "mongodb";
import React from "react";

type TimeCardProps = {
	time: any;
	userInfo: { firstName: string; lastName: string; phoneNum: string };
};
function TimeCard({ time, userInfo }: TimeCardProps) {
	console.log(time._id)
	return (
		<section className="w-[200px] h-[300px] bg-[#252525] border-l-2 border-l-[#cc9900] rounded-xl shadow-xl flex flex-col justify-between p-4 text-[#f1f1f1]">
			<div className="w-full flex-center flex-col gap-2 text">
				<p>زمان نوبت شما:</p>
				<strong className="text-[#cc9900]">{time.time}</strong>
			</div>
			{time.userId.trim() === "" ? (
				<p className="text-sm text-red-600 text-center">این نوبت خالی است</p>
			) : (
                        // if Time was taken
				<div className="w-full flex-center flex-col text-sm gap-3">
					<div className="w-full flex flex-col text-center text-[#ccc]">
						<p>نام</p>
						<span className="mr-2 text-[#cc9900] text-center font-bold">
							{userInfo.firstName +
								" " +
								userInfo.lastName}
						</span>
					</div>
					<div className="w-full flex flex-col text-center text-[#ccc]">
						<p>شماره تماس</p>
						<span className="mr-2 text-[#cc9900] text-center font-bold">
							{userInfo.phoneNum}
						</span>
					</div>
				</div>
			)}
			<form
				action={DeleteTimeAction}
				className="w-fullpx-5 controlls flex-center gap-3">
				<input
					type="text"
					name="timeId"
					defaultValue={time._id}
					hidden
				/>
				<SubmitButton
					title="حذف"
					className="flex-1 bg-[#cb8900] px-3 py-2 rounded-lg shadow-lg"
				/>
			</form>
		</section>
	);
}

export default TimeCard;
