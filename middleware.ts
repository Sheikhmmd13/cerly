import { NextRequest, NextResponse } from "next/server";

// file varables

export async function middleware(req: NextRequest) {
	//protecting Admin Dashboard
	const isLoggedIn =
		req.cookies.get("Cerly__is_Auth")?.value === undefined
			? false
			: true;
	const isAdmin =
		req.cookies.get("Cerly__user_isAdmin")?.value === undefined
			? false
			: true;
	const pathName = req.nextUrl.pathname;

	if (pathName.startsWith("/dashboard/admin") && !isAdmin) {
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}

	if (pathName.startsWith("/dashboard/user") && !isLoggedIn) {
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}
}
