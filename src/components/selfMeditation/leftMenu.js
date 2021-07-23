import React, { useCallback, useState } from "react";
import { 
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	Dimensions,
} from "react-native";

import  PickerChouser from "../ui/pickerChouser";
import IconButton from "./IconButton";
import TimePicker from "./timePicker";
import MeditationLists from "./meditationList";
import { AppTimer } from "../ui";

const { width } = Dimensions.get("screen");

const LeftMenu = ({
	setTimePicherVisible,
	timePicherVisible
}) => {
	
	const [timer, setTimer] = useState(1800);
	const [timeChouserVisible, setShowTimeChouserVisible] = useState(false);
	const [started, setStarted] = useState(false);
	const [hours, setHours] = useState(0);
	const [minute, setMinute] = useState(30);

	const closePicker = useCallback(() => {
		setShowTimeChouserVisible(false);
	},[]);

	const setNewTimer = useCallback((e) => {
		setHours(e.getHours());
		setMinute(e.getMinutes());
		setNewTime(e.getHours(),e.getMinutes());
		setShowTimeChouserVisible(false);
	},[hours, minute]);

	const setNewTime = (newHours, newMinuts) => {
		if(newHours > 0) {
			const newTime = newHours * 60 * 60 + newMinuts * 60;
			setTimer(newTime);
		} else {
			const newTime = newMinuts * 60;
			setTimer(newTime);
		}
	}

	const timepicherHandler = useCallback(() => {
		setTimePicherVisible(!timePicherVisible);
	}, [timePicherVisible]);

	const start = useCallback(() => {
		setStarted(!started);
	},[started]);

	return(
		<View style={styles.container}>
			<AppTimer 
				width={1}
				size={70}
				duration={timer}
				started={started}
				type="meditation"
				setStarted={setStarted}
			/>
			<View style={styles.settingsButton}>
				<IconButton
					pressHandler={timepicherHandler}
					type="meditationSettings"
					width={15}
					height={15}
				/>
			</View>
			{timeChouserVisible ? (
				<PickerChouser
					setNewTimer={setNewTimer}
					closePicker={closePicker}
				/>
			) : timePicherVisible &&  (
				<TimePicker
					onChange={setNewTime}
					setTimePicherVisible={setTimePicherVisible}
					setShowTimeChouserVisible={setShowTimeChouserVisible}
				/>
			)
			}
			{!timePicherVisible && ( <MeditationLists />)}
			<TouchableOpacity 
				style={styles.start}
				onPress={start}
			 >
				<Text style={styles.startText}>Start</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles= StyleSheet.create({
	container: {
		paddingTop: 60,
		left: 0,
		paddingLeft: 20,
		height: "100%",
	},
	startText: {
		color: "#fff"
	},
	start: {
		backgroundColor: "rgba(255,255,255,0.4)",
		width: 70,
		height: 70,
		borderRadius: 40,
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		bottom: 0,
		zIndex: 1,
		left: (width - 70) / 2,
	},
	settingsButton: {
		zIndex: 2,
		width: 30,
		height: 30,
		position: "absolute",
		top: 80,
		left: 87,
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		justifyContent: "center",
		alignItems: "center",
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
	},
})

export default LeftMenu;
