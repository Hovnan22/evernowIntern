import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { Store } from "../config";
import { isLoggedIn } from "../actions/app";
import { StorageService } from ".";


export default class AppServices  {

	static async checkStatus () {
		const auth = await StorageService.getAuth();
		Store.dispatch(isLoggedIn(auth? auth: false));
	}

	static apolloClient = new ApolloClient({
		uri: "https://harmony-weath.fun/api",
		cache: new InMemoryCache(),
		link: createUploadLink({
			uri:  "https://harmony-weath.fun/api",
		}),
	});

	
}
