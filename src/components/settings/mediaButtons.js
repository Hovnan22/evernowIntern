import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";


const AppMediaButtons = ({closeHandler}) => (
	<View style={styles.container}>
		<View >
			<TouchableOpacity style={[styles.button,styles.topRadius]}>
				<Text>
          Camera
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button,styles.bottomRadius]}>
				<Text>
          Upload From Media
				</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginBottom: 5,
	},
	button: {
		width: " 100%",
		backgroundColor: "rgba(248, 248, 248, 0.82)",
		padding: 20,
	},
	bottomRadius: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		marginTop: 1,
	},
	topRadius: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},

});

export default AppMediaButtons;
