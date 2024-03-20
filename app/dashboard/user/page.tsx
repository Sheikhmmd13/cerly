import UserTimesContainer from "@/components/dashboard/user/Container";
import { getUserTimes } from "@/lib/dataBase/userActions";
import { getCookies } from "@/lib/Server Actions/Authentication";
import React from "react";

async function page() {
	const userInfo = await getCookies("user")!;
	const userData = userInfo!.sessionData as {
		phoneNum: string;
		password: string;
	};
	const UserTimes = await getUserTimes(userData);

	return (
		<main className="w-[98%] mx-auto pt-10 max-w-[1400px] min-h-dvh flex-center text-white">
			<UserTimesContainer userTimes={UserTimes}/>
		</main>
	);
}

export default page;
