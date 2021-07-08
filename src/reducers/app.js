import { LOGIN } from "./types";

const initalState = {
    isLoggedIn: false,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: action.type }
        default: {
            return state;
        }
    }

};
