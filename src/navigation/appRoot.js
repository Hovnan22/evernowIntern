import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { homeRootScreens } from "./screensArray";

const Stack = createStackNavigator();
const AppRoot = () => (
	<Stack.Navigator
		screenOptions={() => ({
			headerShown: false,
		})}>
		{homeRootScreens.map(screen => (
			<Stack.Screen {...screen}
				key={screen.name}
			/>
		))}
	</Stack.Navigator>
);

export default AppRoot;
