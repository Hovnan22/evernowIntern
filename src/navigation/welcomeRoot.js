import  React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  WelcomeScreen  from "../screens/welcome";

const Stack = createStackNavigator();

const WelcomeRoot = () => (
	<Stack.Navigator
		screenOptions={() => ({
			headerShown: false,
		})}
	>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
		/>
	</Stack.Navigator>
);

export default WelcomeRoot;
