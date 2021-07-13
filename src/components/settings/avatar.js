import React from "react";
import {
	View,
	ImageBackground,
	StyleSheet,
} from "react-native";
import avatar from "../../assets/images/avatar.png";


const AppAvatar = ({style}) => (
	<View style={[styles.avatarBlock,style]}>
		<ImageBackground
			style={styles.avatar}
			source={avatar}
		/>
	</View>
);

const styles = StyleSheet.create({
	avatar:{
		width: 50,
		height: 50,

	},
	avatarBlock: {
		borderRadius: 25,
		overflow: "hidden",
		width: 50,
		height: 50,
	},
});

export default AppAvatar;
