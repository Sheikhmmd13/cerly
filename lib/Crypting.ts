import { type JWTPayload, SignJWT, jwtVerify } from "jose";

const sceret = process.env.SESSION_SECRET_KEY;
const key = new TextEncoder().encode(sceret);

export async function encrypt(payload: any) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("30 days from now")
		.sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload> {
	const { payload } = await jwtVerify(input, key, {
		algorithms: ["HS256"],
	});
	return payload;
}