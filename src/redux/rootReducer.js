import { combineReducers } from "redux";

import app  from "./app";

console.log(app,'appapp')

export const rootReducer = combineReducers({
    app,
})