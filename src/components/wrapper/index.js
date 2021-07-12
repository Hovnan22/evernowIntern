import React from "react";
import {
	View,
	StatusBar,
	StyleSheet,
} from "react-native";
import { AppIconeButton } from ".";


const AppWrapper = ({navigation,children,showBackBtn = true}) => {
	const goBackHendler = () => {
		navigation && navigation.canGoBack() &&  navigation.goBack();
	};

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
