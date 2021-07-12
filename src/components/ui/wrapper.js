import React from "react";
import {
	View,
	StatusBar,
	StyleSheet,
} from "react-native";


const AppWrapper = ({children}) => (
	<View style={styles}>
		<StatusBar
			translucent
			animated={true}
			backgroundColor="rgba(0, 0, 0, 0)"
		/>
		{
			children
		}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		// position: "absolute",
	},
});

export default AppWrapper;
