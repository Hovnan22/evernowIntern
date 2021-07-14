import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabRootScreens } from "./screensArray";
import { SETTINGS_OPTION_SCREEN } from "./screens";

const Tab = createBottomTabNavigator();
const AppRoot = ({ navigationRef }) => {
	const [activeScreen, setActiveScreen] = useState();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => {
				return ({
					headerShown: false,
					tabBarVisible: (navigationRef.current?.getCurrentRoute() && navigationRef.current?.getCurrentRoute().name === SETTINGS_OPTION_SCREEN ? false : true)
				})
			}}
			tabBarOptions={{ showLabel: false }}
		>
			{tabRootScreens.map((tab, index) => (
				<Tab.Screen
					key={tab.name} {...tab}
				/>
			))
			}
		</Tab.Navigator>
	)
};

export default AppRoot;
