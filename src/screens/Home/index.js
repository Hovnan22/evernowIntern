import React, { useCallback, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";

import {
	Timer,
	AppButton,
	AppWrapper,
} from "../../components/ui";

import bg from "../../assets/images/bg-main-top.png";

import { 
	SETTINGS_SCREEN,
	MEDITATION_SCREEN, 
} from "../../navigation/screens";

const HomeScreen = ({ navigation }) => {

	const [started, setStarted] = useState(false);

	const goToMeditation = useCallback(() => {
		navigation.navigate(MEDITATION_SCREEN);
	},[]);
	
	const goToSettings = useCallback(() => {
		navigation.navigate(SETTINGS_SCREEN);
	},[]);

	return(
		<AppWrapper>
			<ImageBackground 
				source={bg} 
				resizeMode="cover"
				style={styles.image}
			/>
			<View style={styles.whiteBg}>
				<Text style={styles.topTitle}>Meditation will start at 20:00</Text>
				<View style={styles.timer}>
					<Timer 
						width={3}
						size={205}
						duration={5000}
						started={started}
						type="home"
						setStarted={setStarted}
						text={"through"}
					/>
				</View>
				<Text style={styles.bottomInfo}>We match you Buddy (pair) In the meantime, the search is in progress, you can:</Text>
			</View>
			<View style={styles.buttons}>
				<AppButton
					press={goToMeditation}
					name="Self Meditation"
					type="gradient"
				/>
				<View style={styles.buttonsMargin}>
					<AppButton
						press={goToSettings}
						name="Settings"
						type="gradient"
					/>
				</View>
			</View>
		</AppWrapper>
	)};

const styles = StyleSheet.create({
	image: {
		height: 270,
	},
	whiteBg: {
		backgroundColor: "#fff",
		borderRadius: 40,
		paddingVertical: 40,
		paddingHorizontal: 20,
		marginHorizontal: 30,
		top: -154,
	},
	topTitle: {
		textAlign: "center",
		fontWeight: "700",
		fontSize: 17,
		paddingBottom: 30,
	},
	bottomInfo: {
		fontWeight: "500",
		fontSize: 17,
		textAlign: "center",
	},
	timer: {
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 50,
	},
	buttons: {
		top: -100,
		marginHorizontal: 30,
		marginBottom: 50
	},
	buttonsMargin: {
		marginVertical: 20
	}
})

export default HomeScreen;
