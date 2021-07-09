import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ name, press, style }) => (
	<View>
		<TouchableOpacity style={style} onPress={press}>
			<Text>{name}</Text>
		</TouchableOpacity>
	</View>
);

export default Button;
