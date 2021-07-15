import React from "react";
import {
	View,
	StyleSheet,
} from "react-native";

import AppMediaButtons from "./mediaButtons";


const AppChangeAvatar = ({closeHandler}) => (
	<View style={styles.container}>
		<View style={styles.button}>
			<AppMediaButtons closeHandler={closeHandler} />
		</View>
	</View>
);

const styles = StyleSheet.create({
	button: {
		bottom: 10,
		position: "absolute",
		flexDirection: "column",
	},
	container: {
		width: "100%",
		height: "100%",
		position: "absolute",
		backgroundColor: "rgba(0,0,0,.5)",
		top: 0,
		right: 0,
		left: 0,
		alignItems: "center",
	},
});

export default AppChangeAvatar;
