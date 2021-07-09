import { LOGIN } from "./types";

export const  isLoggedIn = (LogedStatus) => ({
	type: LOGIN,
	payload: LogedStatus,
});
