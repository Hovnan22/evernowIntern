import React, { useCallback } from "react";
import {
	View,
	StatusBar,
	StyleSheet,
} from "react-native";
import {useNavigation} from "@react-navigation/native";

import { AppIconeButton } from ".";

const AppWrapper = ({children,showBackBtn = true}) => {
	const navigation = useNavigation();
	const goBackHendler = useCallback( () => {
		navigation && navigation.canGoBack() &&  navigation.goBack();
	},[]);

	return (
		<View style={styles}>
			<StatusBar
				translucent
				animated={true}
				backgroundColor="rgba(0, 0, 0, 0)"
			/>
			{ showBackBtn && (	<AppIconeButton
				height={25}
				press={goBackHendler}
				width={15}
				iconName="back"
				styles={styles.backe}
			/>)}
			{
				children
			}
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
});

export default AppWrapper;
