import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { homeScreen } from "./screensArray";

const Stack = createStackNavigator();
const HomeRoot = () => (
	<Stack.Navigator
		screenOptions={() => ({
			headerShown: false,
		})}>
		{homeScreen.map(screen => (
			<Stack.Screen {...screen}
				key={screen.name}
			/>
		))}
	</Stack.Navigator>
);

export default HomeRoot;
