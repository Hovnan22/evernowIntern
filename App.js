import React from "react";

import { Provider } from "react-redux";
import {  ApolloProvider } from "@apollo/client";

import  { Store }  from "./src/config";
import AppNavigationContainer from "./src/navigation";
import { ApolloServices } from "./src/services";

const App = () => (
	<Provider store={Store}>
		<ApolloProvider client={ApolloServices.client}>
			<AppNavigationContainer/>
		</ApolloProvider>
	</Provider>
);

export default App;
