import { combineReducers } from "redux";

import profile from "./profile.js";

//combineReducer is combining all the reducers into a reducer
const reducers = combineReducers({
  profile: profile,
});

//the reducers are then exported
export default reducers;
