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
const AppSettingsInputField = ({
	timeZon,
	classTime,
	changeEmail,
	showEditName,
	changePassword,
}) =>  {

	const [email,seteEmail] = useState();
	const [name,setNamel] = useState();
	const [timeZonName, setTimeZonName] = useState("EUTC + 03 Moscow");
	const [timezonList, setTimezonList] = useState(false);

	const showTimezonList = useCallback(
		() => {
			setTimezonList(true);
		}, []);

	const selectTimeZon = useCallback(
		( name ) => {
			setTimeZonName(name);
			setTimezonList(false);
		},[]);

	return (
		<View style={styles.inputBlock}>
			<ImageBackground   source={whiteBg} style={[styles.inputBg,
				(changeEmail || showEditName) && styles.nameBlock,
			]} resizeMode="stretch" >
				<Text style={styles.info}>
					{changeEmail && "Change Email"}
					{showEditName && "Change Name"}
					{changePassword && "Change Password"}
					{timeZon && "Choose your time zone"}
					{classTime && "What time do you want to meditate with buddy?"}
				</Text>
				{changeEmail && <AppInput
					styles={styles.email}
					placeholder={changeEmail && "Email"}
					placeholderColor="#005189"
					changeEvent={seteEmail}
					textValue={email}
				/>}
				{showEditName && <AppInput
					styles={styles.email}
					placeholder="Name"
					placeholderColor="#005189"
					changeEvent={setNamel}
					textValue={name}
				/>}
				{changePassword &&
				(<View>
					<AppInput
						styles={styles.email}
						placeholder="Old Password"
						placeholderColor="#005189"
						changeEvent={setNamel}
						textValue={name}
					/>
					<AppInput
						styles={styles.email}
						placeholder="New Password"
						placeholderColor="#005189"
						changeEvent={setNamel}
						textValue={name}
					/>
				</View>
				)}
				{timeZon && (
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
				{ classTime && (
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
	track: {
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
	forgotStyle: {
		color: "#9A9CA8",
		opacity: 0.4,
	},
	email: {
		marginHorizontal: 30,
		color: "#000",
		borderBottomWidth: 1,
		borderColor: "#EDF2FF",
		marginBottom: 25,
	},
	marginVertical: {
		marginVertical: 30,
	},
	inputBlock: {
		width: windowWidth -  60,
		marginTop: 100,
		marginHorizontal: 30,
	},
	restorePass: {
		color: "red",
		fontSize: 14,
		marginHorizontal: 30,
		alignItems: "center",
		marginVertical: 10,

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

