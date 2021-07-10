import React, {Suspense} from "react";
import {ActivityIndicator, StyleSheet} from "react-native";

const components = {
	"facebook": React.lazy(() => import("../../assets/icons/fb.svg")),
	"google": React.lazy(() => import("../../assets/icons/fb.svg")),
	"vk": React.lazy(() => import("../../assets/icons/fb.svg")),
};

const RenderIcon = ({icon, style, ...props}) => {
	const TagName = components[icon];
	console.log(TagName, "TagName", icon);
	if (TagName) {
		return (
			<Suspense fallback={<ActivityIndicator size="small" color="#888888" />}>
				<TagName />
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
	icon: "facebook",
	onPress: null,
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
});

export default AppIcon;
