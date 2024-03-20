"use client";

import { SubmitButton } from "@/components/Times List Section/TimeBox";
import { DeleteUserTime } from "@/lib/dataBase/timeActions";
import { ObjectId, WithId } from "mongodb";
import React from "react";
import { useFormState } from "react-dom";

type userTimeType = {
	_id: ObjectId;
	date: string;
	solarDate: string;
	time: string;
	userId: string;
};

type UserTimesContainerProps = {
	userTimes: userTimeType[] | any;
};

function UserTimesContainer({ userTimes }: UserTimesContainerProps) {
	const [state, formAction] = useFormState(DeleteUserTime, {});
	return (
		<section className="flex justify-center flex-wrap gap-3">
			{userTimes.map((time: userTimeType) => {
                        const timeId = time._id.toString();
				return (
					<div className="w-[200px] h-fit py-3 px-2 flex-center flex-col bg-[#252525] rounded border-b-[1px] border-[#cc9900]">
						<h2 className="text-[#f1f1f195]">
							{time.solarDate}
						</h2>
						<div className="flex-center flex-col mt-5">
							<p className="text-sm">
								زمان نوبت شما:
							</p>{" "}
							<span className="text-md text-[#cc9900] font-bold mt-2">
								{time.time}
							</span>
						</div>
						<form
							action={formAction}
							className="w-full mt-7">
							<input
								type="text"
								hidden
								defaultValue={timeId}
								name="timeId"
							/>
							<SubmitButton
								title="حذف"
								className="w-full button-submit h-9"
							/>
						</form>
					</div>
				);
			})}
		</section>
	);
}

export default UserTimesContainer;
