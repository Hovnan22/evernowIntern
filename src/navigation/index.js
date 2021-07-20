import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import WelcomeRoot from "./welcomeRoot";
import AppRoot from "./appRoot";

import AppServices from "./../services/services";

const AppNavigationContainer = () => {
	
	const [isReady, setIsReady] = useState(false);
	const isLoggedIn = useSelector(({app}) => app.isLoggedIn)

	useEffect( () => {
		async function isRedyAppServices () {
			await AppServices.checkStatus();
			setIsReady(true);
		}
		isRedyAppServices();
	}, []);

	return (
		<NavigationContainer >
			{isReady && (isLoggedIn ? <AppRoot /> : <WelcomeRoot />)}
		</NavigationContainer>
	);
};

export default AppNavigationContainer;
