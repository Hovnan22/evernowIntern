import React from "react";
import {
	View,
	TextInput,
} from "react-native";

const AppInput = ({styles,changeEvent,textValue = "",placeholder,placeholderColor = "#EDF2FF"}) => (
	<View>
		<TextInput
			style={{...styles}}
			onChangeText={changeEvent}
			value={textValue}
			placeholderTextColor={placeholderColor}
			placeholder={placeholder}
		/>
	</View>
);

export default AppInput;
