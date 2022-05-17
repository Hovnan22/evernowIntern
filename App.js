import React from "react";

import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import { Store } from "./src/config";
import AppNavigationContainer from "./src/navigation";
import { AppServices } from "./src/services";

const App = () => (
	<Provider store={Store}>
		<ApolloProvider client={AppServices.apolloClient}>
			<AppNavigationContainer/>
		</ApolloProvider>
	</Provider>
);

export default App;

console.disableYellowBox = true;