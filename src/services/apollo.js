import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export default class ApolloServices  {
	static client = new ApolloClient({
		uri: "https://harmony-weath.fun/api",
		cache: new InMemoryCache(),
		link: createUploadLink({
			uri:  "https://harmony-weath.fun/api",
		}),
	});
}
