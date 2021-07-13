import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabRootScreens } from "./screensArray";

const Tab = createBottomTabNavigator();
const AppRoot = () => (
	<Tab.Navigator
	tabBarOptions={{ showLabel: false }}
>
	{ tabRootScreens.map((tab, index) => (
		<Tab.Screen
			key={tab.name} {...tab}
		/>
	))
	}
</Tab.Navigator>
);

export default AppRoot;
