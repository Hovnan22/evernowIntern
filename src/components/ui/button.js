import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ name, press, style, color = "black", fontSize = 14}) => (
	<View>
		<TouchableOpacity style={style} onPress={press}>
			<Text style={{color,fontSize}}>{name}</Text>
		</TouchableOpacity>
	</View>
);

export default Button;
