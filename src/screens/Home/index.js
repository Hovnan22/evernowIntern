import React from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
} from "react-native";
import {
	AppImage,
	AppWrapper,
} from "../../components/ui";

import topBg from "../../assets/images/bg-main-top.png";

const width = Dimensions.get("window").width;
const HomeScreen = () => (
	<AppWrapper>
		<View style={styles.container}>
			<View style={styles.topBgBlock}>
				<AppImage url={topBg} style={styles.inputBg} />
			</View>
			<Text style={{color: "red"}}>ddd</Text>
		</View>
	</AppWrapper>
);

const styles = StyleSheet.create({
	inputBg: {
		position: "absolute",
		zIndex: 1,
		top: -15,
		// bottom: 0,
		left: 0,
		right: 0,
		width: width,
		height: 280,
	},
	topBgBlock: {
		position: "absolute",
		zIndex: 10,
	},
	container: {
		width: "100%",
		height: "100%",
		flex: 1,
		justifyContent: "space-around",
	},
});

export default HomeScreen;

