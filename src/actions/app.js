import { LOGIN } from "../redux/types";

export default isLoggedIn = (LogedStatus) => {
    return {
        type: LOGIN,
        payload: LogedStatus
    }
}