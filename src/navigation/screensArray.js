import {
	AppPolicy,
	HomeScreen,
	LoginScreen,
	AppSettings,
	WelcomeScreen,
	AppMeditation,
	AppRestorePassword,
	RegistrationScreen,
} from "../screens";
import {
	HOME_SCREEN,
	LOGIN_SCREEN,
	POLICY_SCREEN,
	WELCOME_SCREEN,
	SETTINGS_SCREEN,
	MEDITATION_SCREEN,
	REGISTRATION_SCREEN,
	TAB_NAVIGATION_SCREEN,
	RESTOREPASSWORD_SCREEN,
} from "./screens";
import  AppTabNavigation  from "./tabRoot";

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
		iconName: "home",
	},
	{
		name: MEDITATION_SCREEN,
		component: AppMeditation,
		iconName: "yoga",
	},
	{
		name: SETTINGS_SCREEN,
		component: AppSettings,
		iconName: "settings",
	},
];

export const tabNavigation = [
	{
		name: TAB_NAVIGATION_SCREEN,
		component: AppTabNavigation,
	},
];
