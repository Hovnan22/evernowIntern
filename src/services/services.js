import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";
import { StorageService } from ".";
import { Store } from "../config";
import { isLoggedIn } from "../actions/app";
import { createUploadLink } from "apollo-upload-client";

export default class AppServices {
	static async checkStatus () {
		const auth = await StorageService.getAuth();
		Store.dispatch(isLoggedIn(auth));
	}

	static apolloClient = new ApolloClient({
		uri: "https://harmony-weath.fun/api",
		cache: new InMemoryCache(),
		link: createUploadLink({
			uri:  "https://harmony-weath.fun/api",
		}),
	});
}
