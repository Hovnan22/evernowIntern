import React, { useCallback, useState } from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	ImageBackground,
} from "react-native";

import { AppButton } from "../ui";
import gradientBg from "../../../src/assets/images/welcomeBg.png";

const { width } = Dimensions.get("window");

const AppformSettingsButton = ({ changeEmail }) =>  {
	const [emailInfo,setEmailInfo ] = useState(false);
	const saveHandler = useCallback(
		() => {
			changeEmail && setEmailInfo(true);
		},
		[changeEmail]
	);
	return (
		<ImageBackground   source={gradientBg} style={styles.inputBg} resizeMode="stretch" >
			<View style={styles.buttons}>
				{ emailInfo && <Text style={styles.emailInfo}>A confirmation email will be sent to a new mail</Text>}
				<AppButton
					name={"Save"}
					press={saveHandler}
					type="success"
				/>
			</View>
		</ImageBackground>
	);};

const styles = StyleSheet.create({
	emailInfo: {
		fontSize: 17,
		color: "#fff",
		paddingHorizontal: 30,
		textAlign: "center",
		marginBottom: 40,
	},
	save: {
		borderColor: "#fff",
		borderWidth: 2,
		width: width - 60,
	},
	textStyle: {
		color: "#fff",
	},
	buttons: {
		zIndex: 1,
		position: "absolute",
		flex: 1,
		width: width - 80,
		bottom: 30,
		marginHorizontal: 40,
	},

	inputBg: {
		position: "absolute",
		bottom: 0,
		zIndex: 1,
		width: "100%",
		height: 430,
	},
});

export default AppformSettingsButton;
