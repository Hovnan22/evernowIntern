import React, { useState } from "react";
import { 
	View,
	Dimensions,
	StyleSheet,
} from "react-native";

import { AppWrapper } from "../../components/ui";
import { 
	LeftMenu,
	RightMenu,
} from "../../components/selfMeditation";

const { height } = Dimensions.get("window");

const AppMeditation = () => {
	const [timePicherVisible, setTimePicherVisible] = useState(false);

	return (
		<AppWrapper type="fullScreen">
			<View style={styles.container}>
				<LeftMenu
					timePicherVisible={timePicherVisible}
					setTimePicherVisible={setTimePicherVisible}
				/>
				<RightMenu />
			</View>
		</AppWrapper>
	)};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: "100%",
		height: height,
	}
});

export default AppMeditation;
