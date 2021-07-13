import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";

import {
	AppButton,
} from ".";
import gradientBg from "../../../src/assets/images/welcomeBg.png";

const AppFormButtonsBlock = ({
	buttonsArray,
}) =>  (
	<ImageBackground   source={gradientBg} style={styles.inputBg} resizeMode="stretch" >
		<View style={styles.buttons}>
			{buttonsArray.map( items => (
				<AppButton
					key={items.name}
					textStyle={items.textStyle}
					name={items.name}
					style={[items.style]}
					press={items.press}
					type={items.type}
				/>
			))}
		</View>
	</ImageBackground>
);

const styles = StyleSheet.create({

	buttons: {
		zIndex: 1,
		position: "absolute",
		bottom: 0,
		flex: 1,
		alignItems: "center",
		width: "100%",
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

export default AppFormButtonsBlock;
