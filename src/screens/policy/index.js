import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";

const AppPolicy = ({navigation}) => (
	<View>
		<View style={styles.backe}>
			<TouchableOpacity
				onPress={() => {navigation.goBack();}}
			>
				<Text>back</Text>
			</TouchableOpacity>
		</View>
		<ScrollView style={styles.container}>

			<Text style={[styles.title,styles.textMargin]}>Privacy Policy</Text>
			<Text style={styles.textMargin}>Privacy Policy (Information Security)</Text>
			<Text style={styles.textMargin}>I. General Provisions</Text>
			<Text style={styles.textMargin}>This Privacy Policy Statement (hereinafter referred to as the Statement) is an official document of IE Bratchikov Alexander Viktorovich, (hereinafter referred to as the "Company" / "Operator"), and determines the procedure for processing and protecting information about individuals (hereinafter referred to as Users) using the services, information , services, programs and products located on the website with the domain name www.evernow.be (hereinafter referred to as the Site).</Text>
			<Text style={styles.textMargin}>Respect for confidentiality is important for the Company, because the purpose of this Privacy Policy is to ensure the protection of human and civil rights and freedoms when processing their personal data, including the protection of the rights to privacy, personal and family secrets, from unauthorized access and disclosure.</Text>
			<Text style={styles.textMargin}>We have developed a Privacy Policy that describes how we process personal data - any actions (operations) or a set of actions (operations) performed using automation tools or without using such.</Text>
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 25,
		marginTop: 70,
	},
	title: {
		fontSize: 24,
	},
	backe: {
		position: "absolute",
		top: 30,
		left: 20,
	},
	textMargin: {
		marginBottom: 15,
	},
});

export default AppPolicy;
