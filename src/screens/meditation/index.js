import React, { useState } from "react";
import {
	StyleSheet,
} from "react-native";
import { ImageBackground } from "react-native";

import { AppWrapper } from "../../components/ui";
import meditationBg from "../../assets/images/meditationBg.png";
import { LeftMenu, RightMenu } from "../../components/selfMeditation";

const AppMeditation = () => {
	const [timePicherVisible, setTimePicherVisible] = useState(false);

	return (
		<AppWrapper showBackBtn={false}>
			<ImageBackground   source={meditationBg} style={styles.meditationBg} resizeMode="cover" >
				<LeftMenu
					timePicherVisible={timePicherVisible}
					setTimePicherVisible={setTimePicherVisible}
				/>
				<RightMenu />
			</ImageBackground>
		</AppWrapper>
	)};

const styles = StyleSheet.create({
	meditationBg: {
		width: "100%",
		height: "100%",
	}
});

export default AppMeditation;
