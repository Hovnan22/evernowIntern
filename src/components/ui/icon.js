import React, {Suspense} from "react";
import {ActivityIndicator, StyleSheet} from "react-native";

const components = {
	"google": React.lazy(() => import("../../assets/icons/google.svg")),
	"fb": React.lazy(() => import("../../assets/icons/fb.svg")),
	"vk": React.lazy(() => import("../../assets/icons/vk.svg")),
	"back": React.lazy(() => import("../../assets/icons/back.svg")),
};

const RenderIcon = ({icon, style, ...props}) => {
	const TagName = components[icon];
	if (TagName) {
		return (
			<Suspense fallback={<ActivityIndicator size="small" color="#888888" />}>
				<TagName {...props} style={[styles.container, style]} />
			</Suspense>
		);
	}
	return null;
};

const AppIcon = props => <RenderIcon {...props} />;

AppIcon.defaultProps = {
	style: {},
	fill: null,
	width: null,
	height: null,
	icon: "vk",
	onPress: null,
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		color: "red",
	},
});

export default AppIcon;
