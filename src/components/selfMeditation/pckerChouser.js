import React, { useCallback, useState } from "react";
import { 
	View,
	Text,
	Picker,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const PickerChouser = ({
	setTimer,
	setTimePicherVisible,
}) =>{

	const hourArr = [0, 1, 2, 4 ,5];
	const minuteArr  = [];
	const [hours, setHours] = useState(0);
	const [minute, setMinute] = useState(30);

	for( var i = 0; i < 5; i++){
		minuteArr.push(i*10);
	}

	const closePicker = useCallback(() => {
		setTimePicherVisible(false);
	},[]);

	const setNewTimer = useCallback(() => {
		console.log(hours,minute,"hours,minute")
		setTimer(hours,minute);
		setTimePicherVisible(false);
	},[ hours, minute])
  
	return(
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.pickerView}>
					<Picker
						selectedValue={minute}
						style={styles.picker}
						onValueChange={(itemValue, itemIndex) => {
							console.log(itemValue,"itemValue"); 
							return setHours(itemValue)}}
					>
						{hourArr.map(item => (
							<Picker.Item key={item.value} label={`${item} hours`} value={item} />
						))}
					</Picker>
					<Picker
						selectedValue={hours}
						style={styles.picker}
						onValueChange={(itemValue, itemIndex) => {
							console.log(itemValue,"itemValue");
							return  setMinute(itemValue)
						}}
					>
						{minuteArr.map(item => (
							<Picker.Item key={item.value} label={`${item} minutes`} value={item} />
						))}
					</Picker>
				</View>
				<TouchableOpacity 
					style={styles.buttons}
					onPress={closePicker}
				>
					<Text style={styles.danger}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttons}
					onPress={setNewTimer}
				>
					<Text style={styles.success}>Set</Text>
				</TouchableOpacity>
			</View>
		</View>
	)}

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
		height: 50,
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
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
