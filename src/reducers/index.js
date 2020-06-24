import { combineReducers } from "redux";

import codeioReducer from "./codeio";
import editorReducer from "./editor";

const reducers = combineReducers({
    codeio: codeioReducer,
    editor: editorReducer,
});


export default reducers;