import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ name, press, style, textStyle, type = "border", start, end, gradientColor, gradientButtonStyle }) => (

	<View>
		{

			type === "gradient" ? (
				<LinearGradient start={start} end={end} colors={gradientColor} style={gradientButtonStyle}>
					<TouchableOpacity style={[styles.buttons, style]} onPress={press}>
						<Text style={[styles.textStyles, textStyle]}>{name}</Text>
					</TouchableOpacity>
				</LinearGradient>) : (
				<TouchableOpacity style={[styles.buttons, style]} onPress={press}>
					<Text style={[styles.textStyles, textStyle]}>{name}</Text>
				</TouchableOpacity>)

		}

	</View>
);

const styles = StyleSheet.create({
	buttons: {
		backgroundColor: "rgba(0,0,0,0)",
		width: 260,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textStyles: {
		color: "black",
		fontSize: 14,
	}
})

export default Button;

// const AppLinerButton = ({styles,colors,gradientButton,start,end,press,textColor,name}) => (
// 	<LinearGradient start={start} end={end} colors={colors} style={gradientButton}>
// 		<AppButton
// 			name={name}
// 			style={styles}
// 			color={textColor}
// 			press={press}
// 		/>
// 	</LinearGradient>
// );
