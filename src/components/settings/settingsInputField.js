import React, { useCallback, useState } from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { Slider } from "react-native-elements";

import {
	AppIcon,
	AppInput,
} from "../ui";
import TimezonList from "./timezonList";
import whiteBg from "../../../src/assets/images/whiteBg.png";


const windowWidth = Dimensions.get("window").width;

const AppSettingsInputField = ({ screenName }) =>  {
	const [email,seteEmail] = useState();
	const [name,setNamel] = useState();
	const [timeZonName, setTimeZonName] = useState("EUTC + 03 Moscow");
	const [timezonList, setTimezonList] = useState(false);
	const showTimezonList = useCallback(
		() => {
			setTimezonList(true);
		}, []);

	const selectTimeZon = useCallback(
		() => {
			setTimeZonName(name);
			setTimezonList(false);
		},[]);
	const contant = {
		classTime: {
			title: "What time do you want to meditate with buddy?",
		},
		timeZone: {
			title: "Choose your time zone",
		},
		changeEmail: {
			title: "Change Email",
			input: [
				{
					placeholder: "Email",
					changeEvent: seteEmail,
					textValue: email,
				},
			],
		},
		changePassword: {
			title: "Change Password",
			input: [
				{
					placeholder: "Old Password",
					changeEvent: setNamel,
					textValue: name,
				},
				{
					placeholder: "New Password",
					changeEvent: setNamel,
					textValue: name,
				},
			],
		},
		showEditName: {
			title: "Old Name",
			input: [
				{
					placeholder: "Name",
					changeEvent: setNamel,
					textValue: name,
				},
			],
		},
	};

	return (
		<View style={styles.inputBlock}>
			<ImageBackground   source={whiteBg} style={[styles.inputBg,
				(screenName === "changeEmail" || screenName === "showEditName") && styles.nameBlock,
			]} resizeMode="stretch" >
				<Text style={styles.info}>
					{contant[screenName].title}
				</Text>
				 {
					contant[screenName].input && contant[screenName].input.map((item) => (
						<AppInput
							key={item.name}
							styles={styles.email}
							placeholder={item.placeholder}
							placeholderColor="#005189"
							changeEvent={item.changeEvent}
							textValue={item.textValue}
						/>
					))
				}
				{(screenName === "timeZone") && (
					<TouchableOpacity onPress={showTimezonList} style={styles.timezon}>
						<Text>{timeZonName}</Text>
						<AppIcon
							style={styles.iconEdit}
							icon="arrowDown"
							width={16}
							height={16}
						/>
					</TouchableOpacity>
				)}
				{(contant[screenName].title === "classTime") && (
					<View style={styles.slider}>
						<Slider
							thumbTintColor={"#5596D9"}
							minimumTrackTintColor="#5596D9"
							maximumTrackTintColor="#EDF2FF"
							trackStyle={styles.track}
							thumbStyle={styles.thumb}
						/>
					</View>
				)}
			</ImageBackground>
			{timezonList && (<TimezonList selectTimeZon={selectTimeZon}/>)}
		</View>
	);
};

const styles = StyleSheet.create({
	nameBlock: {
		top: 120,
		height: 240,
	},
	thumb: {
		width: 15,
		height: 15,
	},
	slider: {
		marginHorizontal: 50,
	},
	timezon: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 50,
		borderBottomColor: "#EDF2FF",
		borderBottomWidth: 1,
		paddingBottom: 15,
	},
	email: {
		marginHorizontal: 30,
		color: "#000",
		borderBottomWidth: 1,
		borderColor: "#EDF2FF",
		marginBottom: 25,
	},
	inputBlock: {
		width: windowWidth -  60,
		marginTop: 100,
		marginHorizontal: 30,
	},
	inputBg: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: 380,
		zIndex: 5,
	},
	info: {
		fontSize: 16,
		marginLeft: 30,
		marginVertical: 25,
	},

});

export default AppSettingsInputField;
