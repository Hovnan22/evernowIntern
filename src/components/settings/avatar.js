import React from "react";
import {
	View,
	Image,
	StyleSheet,
} from "react-native";

import avatar from "../../assets/images/avatar.png";


const AppAvatar = ({style}) => (
	<View style={[styles.avatarBlock,style]}>
		<Image
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
