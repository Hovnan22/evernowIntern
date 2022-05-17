
import React from "react";
import {
	Image,
	StyleSheet,
} from "react-native";

const AppImage = ({ url, width, height, style }) => (
	<Image
		style={[styles.image, { width, height, ...style}]}
		source={url}
	/>
);

const styles = StyleSheet.create({
	image: {resizeMode: "stretch"},
});

export default AppImage;
