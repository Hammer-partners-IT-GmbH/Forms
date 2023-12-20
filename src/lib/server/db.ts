import { SECRET_PASSWORD, SECRET_USERNAME } from "$env/static/private";
import mongoose from "mongoose";

let MONGODB_URI = `mongodb+srv://${SECRET_USERNAME}:${SECRET_PASSWORD}@cluster0.6bqgm02.mongodb.net/?retryWrites=true&w=majority`;

export async function connect_to_db() {
	try {
		return await mongoose.connect(MONGODB_URI);
	} catch (err) {
		console.log(err);
	}
}