import {
	AppPolicy,
	HomeScreen,
	LoginScreen,
	WelcomeScreen,
	AppRestorePassword,
	RegistrationScreen,
} from "../screens";
import {
	HOME_SCREEN,
	LOGIN_SCREEN,
	POLICY_SCREEN,
	WELCOME_SCREEN,
	REGISTRATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "./screens";

export const welcomeRootScreens = [
	{
		name: WELCOME_SCREEN,
		component: WelcomeScreen,
	},
	{
		name: LOGIN_SCREEN,
		component: LoginScreen,
	},
	{
		name: REGISTRATION_SCREEN,
		component: RegistrationScreen,
	},
	{
		name: RESTOREPASSWORD_SCREEN,
		component: AppRestorePassword,
	},
	{
		name: POLICY_SCREEN,
		component: AppPolicy,
	},
];

export const homeRootScreens = [
	{
		name: HOME_SCREEN,
		component: HomeScreen,
	},
];
