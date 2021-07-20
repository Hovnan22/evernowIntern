import React from "react";
import { TouchableOpacity } from "react-native";

import { AppIcon } from "../ui";

const IconButton = ({
	pressHandler, 
	type, 
	width, 
	height,
}) => (
	<TouchableOpacity onPress={pressHandler}>
		<AppIcon
			icon={type}
			width={width}
			height={height}
		/>
	</TouchableOpacity>
);

export default IconButton;
