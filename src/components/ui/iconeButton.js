import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { AppIcon } from ".";

const AppIconeButton = ({ iconName, press, styles, width = 15, height = 15,}) => (
	<View style={styles}>
		<TouchableOpacity onPress={press} >
			<AppIcon
				key={iconName}
				icon={iconName}
				width={width}
				height={height}
			/>
		</TouchableOpacity>
	</View>
);

export default AppIconeButton;
