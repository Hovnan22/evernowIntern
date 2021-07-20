import React, {Suspense} from "react";
import {ActivityIndicator, StyleSheet} from "react-native";

const components = {
	"google": React.lazy(() => import("../../assets/icons/google.svg")),
	"fb": React.lazy(() => import("../../assets/icons/fb.svg")),
	"vk": React.lazy(() => import("../../assets/icons/vk.svg")),
	"back": React.lazy(() => import("../../assets/icons/back.svg")),
	"home": React.lazy(() => import("../../assets/icons/home.svg")),
	"yoga": React.lazy(() => import("../../assets/icons/yoga.svg")),
	"settings": React.lazy(() => import("../../assets/icons/settings.svg")),
	"edit": React.lazy(() => import("../../assets/icons/edit.svg")),
	"arrowDown": React.lazy(() => import("../../assets/icons/arrowDown.svg")),
	"close": React.lazy(() => import("../../assets/icons/close.svg")),
	"video-camera": React.lazy(() => import("../../assets/icons/video-camera.svg")),
	"mute": React.lazy(() => import("../../assets/icons/mute.svg")),
	"meditationSettings": React.lazy(() => import("../../assets/icons/meditationSettings.svg")),
	"yog": React.lazy(() => import("../../assets/icons/yog.svg")),
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
