import React from "react";
import { 
	View,
	StyleSheet,
	Dimensions,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const { width, height } = Dimensions.get("screen");

const PickerChouser = ({
	closePicker,
	setNewTimer,
}) =>	(
	<View style={styles.wrapper}>
		<View style={styles.container}>
			<View style={styles.pickerView}>
				<DateTimePickerModal
					isVisible={true}
					style={styles.picker}
					mode="time"
					display="spinner"
					onConfirm={setNewTimer}
					onCancel={closePicker}
					is24Hour={true}
				/>
			</View>
		</View>
	</View>
)

const styles = StyleSheet.create({
	danger: {
		color: "#EB354A"
	},
	success: {
		color: "#268BD5",
	},
	container: {
		borderRadius: 20,
		backgroundColor: "#fff",
		flexDirection: "column",
		marginHorizontal: 50,
		width: width - 100,
		alignItems: "center",
		justifyContent: "center",
	},
	wrapper: {
		backgroundColor: "rgba(0, 129, 218, 0.5);",
		zIndex: 1,
		flexDirection: "column",
		position: "absolute",
		width: width,
		alignItems: "center",
		justifyContent: "center",
		height,
	},
	pickerView: {
		flexDirection: "row",
	},
	picker: {
		height: 500,
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		borderRadius: 20
	},
	buttons: {
		height: 60,
		width: "100%",
		alignItems: "center",
		borderTopColor:"rgba(0, 0, 0, 0.05)",
		borderTopWidth: 1,
		textAlign: "center",
		justifyContent: "center",
	}
});

export default PickerChouser;
