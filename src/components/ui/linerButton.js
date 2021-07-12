import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { AppButton } from ".";


const AppLinerButton = ({styles,colors,gradientButton,start,end,press,textColor,name}) => (
	<LinearGradient start={start} end={end} colors={colors} style={gradientButton}>
		<AppButton
			name={name}
			style={styles}
			color={textColor}
			press={press}
		/>
	</LinearGradient>
);

export default AppLinerButton;
