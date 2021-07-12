import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabRootScreens } from "./screensArray";
import { AppIcon } from "../components/ui";
import { HOME_SCREEN, MEDITATION_SCREEN, SETTINGS_SCREEN } from "./screens";

const Tab = createBottomTabNavigator();

export default function AppTabNavigation() {
	return (
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
}
