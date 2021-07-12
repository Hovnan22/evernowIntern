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
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === HOME_SCREEN) {
						return (
							<AppIcon
								icon="home"
								style={{color: "red"}}
							/>
						);
					} else if (route.name === SETTINGS_SCREEN) {
						return (
							<AppIcon
								icon="home"
								style={{color: "red"}}
							/>
						);
					} else if (route.name === MEDITATION_SCREEN) {
						return (
							<AppIcon
								icon="home"
								style={{color: "red"}}
							/>
						);
					}
				},
			})}
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
