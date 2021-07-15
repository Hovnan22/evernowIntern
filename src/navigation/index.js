import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import WelcomeRoot from "./welcomeRoot";
import AppRoot from "./appRoot";
import  AppServices  from "./../services/services";


const AppNavigationContainer = ({ isLoggedIn }) => {
	const [isReady,setIsReady] = useState(false);
	const navigationRef = React.useRef(null);
	useEffect(
		async () => {
			await AppServices.checkStatus();
			setIsReady(true);
		},[]);

	return (
		<NavigationContainer
			ref={navigationRef}
		>
			{ isReady  && (isLoggedIn ? <AppRoot navigationRef={navigationRef} /> : <WelcomeRoot />) }
		</NavigationContainer>
	);
};

const mapStateToProps = ({ app: { isLoggedIn } }) => ({
	isLoggedIn,
});

export default connect(mapStateToProps)(AppNavigationContainer);
