import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";

const { width } =  Dimensions.get("window");

const AppMediaButtons = ({closeHandler}) => (
	<View style={styles.container}>
		<View >
			<TouchableOpacity style={[styles.button, styles.topRadius]}>
				<Text>
          Camera
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, styles.bottomRadius]}>
				<Text>
          Upload From Media
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.close}
				onPress={closeHandler}
			>
				<Text style={styles.closeClolor}>
          Close
				</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	close: {
		width: width - 20,
		height: 50,
		alignItems: "center",
		borderRadius: 10,
		borderColor: "white",
		borderWidth: 2,
		zIndex: 3,
		bottom: 0,
		backgroundColor: "#fff",
		justifyContent: "center",
		marginTop: 10,
	},
	closeClolor: {
		color: "rgba(55, 59, 82, 0.5)",
	},
	container: {
		marginBottom: 5,
	},
	button: {
		width: " 100%",
		backgroundColor: "rgba(248, 248, 248, 0.82)",
		padding: 20,
		alignItems: "center",
	},
	bottomRadius: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		marginTop: 1,
	},
	topRadius: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
});

export default AppMediaButtons;
