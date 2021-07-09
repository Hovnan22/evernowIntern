import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";

const Stack = createStackNavigator();
const AppRoot = () => (
	<Stack.Navigator
		screenOptions={() => ({
			headerShown: false,
		})}>
		<Stack.Screen name="HomeScreen" component={HomeScreen} />
	</Stack.Navigator>
);

export default AppRoot;
