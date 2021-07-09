
import React from "react";
import {
	Image,
	StyleSheet,
} from "react-native";

const AppImage = ({ url, width, height }) => {
	console.log(url,"urlurl");
	return (
		<Image
			style={[styles.image, { width, height }]}
			source={url}
		/>
	);
};
const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
	},
});

export default AppImage;
