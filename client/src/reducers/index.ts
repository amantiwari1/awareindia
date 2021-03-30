import { combineReducers } from "redux";
import themeState from './theme';

const reducer = combineReducers({
    theme: themeState
});

export default reducer;