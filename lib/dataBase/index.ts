import { Db, MongoClient } from "mongodb";
import { Collection } from "mongoose";

const mongo_uri = process.env.MONGO_URI;

let client: MongoClient | null = null;

export async function ConnectToCollection(collectionName: "Times" | "users" | "services"){
	if(!client) {
		client = new MongoClient(mongo_uri!.toString())
		await client.connect();
	}
	const db:Db = client.db("Cerly");
	return db.collection(collectionName)
}	


export const CloseConnection = () => {
	if(client) {
		client.close();
		client = null
	}
}