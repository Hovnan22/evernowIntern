import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabRootScreens } from "./screensArray";

const Tab = createBottomTabNavigator();
const AppRoot = () => (
	<Tab.Navigator

		tabBarOptions={{ showLabel: false ,	tabBarVisible: false}}
	>
		{ tabRootScreens.map((tab, index) => (
			<Tab.Screen
      options={({ route }) => ({
        tabBarVisible: false
      })}
				key={tab.name} {...tab}
			/>
		))
		}
	</Tab.Navigator>
);

export default AppRoot;
