import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	ImageBackground,
} from "react-native";

import {
	AppButton,
} from ".";
import gradientBg from "../../../src/assets/images/welcomeBg.png";

const { width } = Dimensions.get("screen");

const AppFormButtonsBlock = ({
	buttonsArray,
}) =>  (
	<ImageBackground   source={gradientBg} style={styles.inputBg} resizeMode="stretch" >
		<View style={styles.buttons}>
			{buttonsArray.map( items => (
				<View 	key={items.name} style={styles.buttonsItem}>
					<AppButton
						{...items}
					/>
				</View>
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
		width: width - 80,
		marginHorizontal: 40,
	},
	buttonsItem: {
		marginVertical: 5,
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
