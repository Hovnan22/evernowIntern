import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
	View,
	StyleSheet,
} from "react-native";

import IconButton from "./IconButton";

const RightMenu = () => {
	const navigation = useNavigation();
	
	const goBack = useCallback(() => {
		navigation.canGoBack() && navigation.goBack();
	},[]);
	
	return(
		<View style={styles.container}>
			<View style={styles.topButton}>
				<IconButton
					pressHandler={goBack}
					type="close"
					width={30}
					height={30}
				/>
			</View>
			<View style={styles.bottomButtonGroup}>
				<IconButton
					type="video-camera"
					width={35}
					height={35}
				/>
				<View style={styles.muteButton}>
					<IconButton
						type="mute"
						width={25}
						height={30}
					/>
				</View>
			</View>
		</View>
	)
};

const styles= StyleSheet.create({
	container: {
		paddingTop: 60,
		right: 0,
		position: "absolute",
		height: "100%",
		zIndex: 1,
		paddingRight: 22,
	},
	topButton: {
		width: 30,
		height: 30,
	},
	bottomButtonGroup: {
		position: "absolute",
		bottom: 50,
		right: 22,
	},
	muteButton: {
		marginTop: 30
	}
})

export default RightMenu;
