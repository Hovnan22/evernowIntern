import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { logedinRootNavigation } from "./screensArray";

const Stack = createStackNavigator();

const AppRoot = () => (
	<Stack.Navigator
		screenOptions={() => ({
			headerShown: false,
			tabBarVisible: false,
		})}>
		{logedinRootNavigation.map(screen => (
			<Stack.Screen {...screen}
				key={screen.name}
			/>
		))}
	</Stack.Navigator>
);

export default AppRoot;
