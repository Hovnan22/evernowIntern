import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";

import {
	AppButton,
} from "../ui";
import gradientBg from "../../../src/assets/images/welcomeBg.png";

const AppformSettingsButton = ({
	status,
}) =>  (
	<ImageBackground   source={gradientBg} style={styles.inputBg} resizeMode="stretch" >
		<View style={styles.buttons}>
			<AppButton
				textStyle={styles.textStyle}
				name={"Save"}
				style={styles.save}
				press={() => console.log(87)}
			/>
		</View>
	</ImageBackground>
);

const styles = StyleSheet.create({
	save: {
		borderColor: "#fff",
		borderWidth: 2,
	},
	textStyle: {
		color: "#fff",
	},
	buttons: {
		zIndex: 1,
		position: "absolute",
		bottom: 0,
		flex: 1,
		alignItems: "center",
		width: "100%",
		bottom: 30,
	},

	inputBg: {
		position: "absolute",
		bottom: 0,
		zIndex: 1,
		width: "100%",
		height: 430,
	},
	buttonBg: {
		flex: 1,
		bottom: 30,
		zIndex: 2,
	},

});

export default AppformSettingsButton;
