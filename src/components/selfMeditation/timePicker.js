import React, { useCallback } from "react";
import LinearGradient from "react-native-linear-gradient";
import { 
	StyleSheet,
	Dimensions,
} from "react-native";
import { 
	View,
	Text,
	TouchableOpacity,
} from "react-native"

import {
	AppButton,
	AppIcon
} from "../ui";

const { width, height } = Dimensions.get("screen");

const TimePicker =  ({
	onChange,
	setTimePicherVisible,
	setShowTimeChouserVisible,
}) => {

	const closeTimePicker = useCallback (() => {
		setTimePicherVisible(false)
	},[]);

	const showPicerCouser = useCallback(() => {
		setShowTimeChouserVisible(true)
	},[])

	return (
		<LinearGradient 
			start={{x: 0, y: 1}} end={{x: 1, y: 1}}
			colors={["rgba(0, 129, 218, 0.5)" , "rgba(0, 129, 218, 0)", ]} 
			style={styles.linearGradient}>
			<View style={styles.container}>
				<View style={styles.tmeButtons}>
					<AppButton
						press={() => { onChange(0, 30) }}
						name={"30 Minit"}
						type="link2"
					/>
				</View>
				<View style={styles.tmeButtons}>
					<AppButton
						press={() => { onChange(0, 60 ) }}
						name={"60 Minit"}
						type="link2"
					/>
				</View>
				<View style={styles.tmeButtons}>
					<AppButton
						press={showPicerCouser}
						name={"..."}
						type={"link2"}
					/>
				</View>
				<TouchableOpacity style={styles.closeButton} onPress={closeTimePicker }>
					<AppIcon
						style={styles.rotate}
						icon={"arrowDown"}
						width={32}
						height={32}
					/>
					<Text style={styles.whiteText} >Close</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	)
};

const styles = StyleSheet.create({
	container: {
		width: 150,
	},
	whiteText: {
		color: "#fff",
	},
	tmeButtons: {
		backgroundColor: "rgba(255,255,255,.3)",
		borderRadius: 30,
		marginVertical: 10,
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
		width,
		height,
		zIndex: 1,
		position: "absolute",
		top: 0,
		textAlign: "center",
		justifyContent: "center",
		left: 0
	},
	closeButton: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingTop: 20,
		alignItems: "center",
	},
	rotate: {
		transform: [{ rotate: "180deg" }],
	},
})

export default TimePicker;
