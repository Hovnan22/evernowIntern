import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tabRootScreens } from "./screensArray";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
	
	<Tab.Navigator
		screenOptions={() => ({
			headerShown: false,
		})}
		tabBarOptions={{ showLabel: false }}
	>
		{tabRootScreens.map((tab) => (
			<Tab.Screen
				key={tab.name} {...tab}
			/>
		))
		}
	</Tab.Navigator>
);

export default TabNavigation;
