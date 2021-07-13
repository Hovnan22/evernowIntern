import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { settingsScreen } from "./screensArray";

const Stack = createStackNavigator();
const SettingsRoot = () => (
	<Stack.Navigator
  screenOptions={() => ({
			headerShown: false,
		})}>
		{settingsScreen.map(screen => (
			<Stack.Screen {...screen}
				key={screen.name}
			/>
		))}
	</Stack.Navigator>
);

export default SettingsRoot;
