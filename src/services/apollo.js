import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";

export default class ApolloServices  {
	static client = new ApolloClient({
		uri: "localhost:4000/graphql",
		cache: new InMemoryCache(),
	});
}
