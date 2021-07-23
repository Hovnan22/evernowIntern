import React, { useCallback, useEffect, useState } from "react";
import {
	View,
	StatusBar,
	StyleSheet,
	ImageBackground,
	Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
	useDispatch,
	useSelector,
} from "react-redux";

import { AppIconeButton } from ".";

import topBg from "../../assets/images/bg-main-top.png";
import meditationBg from "../../assets/images/meditationBg.png";
import { setStatusBarStyle } from "../../actions/app";

const backgroundImages = {
	topBg: topBg,
	fullScreen: meditationBg,
}
const { width, height } = Dimensions.get("screen");

const AppWrapper = ({ 
	type,
	children,
	showBackBtn, 
}) => {
	const navigation = useNavigation();
	const statusBarStyle = useSelector(({ app: { statusBarStyle } }) => statusBarStyle);
	const dispatch = useDispatch();

	navigation.addListener(
		"focus",
		() =>	dispatch(setStatusBarStyle(type))
	);

	const goBackHendler = useCallback(() => {
		navigation && navigation.canGoBack() &&  navigation.goBack();
	},[]);

	return (
		<View style={styles}>
			{statusBarStyle && (
				<ImageBackground 
					source={backgroundImages[statusBarStyle]} 
					resizeMode="cover"
					style={styles[statusBarStyle]}
				/>
			)}
			<StatusBar
				barStyle={statusBarStyle ? "light-content" :"dark-content"}
				translucent
				animated={true}
				backgroundColor="rgba(0, 0, 0, 0)"
			/>
			{showBackBtn && navigation.canGoBack() && (
				<AppIconeButton
					height={25}
					press={goBackHendler}
					width={15}
					iconName="back"
					styles={styles.backe}
				/>
			)}
			{children}
		</View>
	);

};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
	},
	backe: {
		position: "absolute",
		top: 55,
		left: 25,
		zIndex: 1,
	},
	topBg: {
		height: 270,
	},
	fullScreen: {
		width,
		height,
	},
});

export default AppWrapper;
