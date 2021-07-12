import  React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { welcomeRootScreens } from "./screensArray";

const Stack = createStackNavigator();

const WelcomeRoot = () => (
	<Stack.Navigator
		screenOptions={() => ({
			headerShown: false,
		})}
	>
		{ welcomeRootScreens.map(screen => (
			<Stack.Screen
				{...screen}
				key={screen.name}
			/>
		))}
	</Stack.Navigator>
);

export default WelcomeRoot;
