import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { settingsScreen } from "./screensArray";

const Stack = createStackNavigator();
const SettingsRoot = () => (
	<Stack.Navigator
	screenOptions={({ route }) => {
		return ({
			headerShown: false,
			tabBarVisible: false,
		})
	}}>
		{settingsScreen.map(screen => (
			<Stack.Screen {...screen}
				key={screen.name}
				options={{
					tabBarVisible: false
				}}
			/>
		))}
	</Stack.Navigator>
);

export default SettingsRoot;
