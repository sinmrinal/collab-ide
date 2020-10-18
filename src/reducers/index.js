import { combineReducers } from "redux";

import codeioReducer from "./codeioReducer";
import editorReducer from "./editorReducer";

const reducers = combineReducers({
    codeio: codeioReducer,
    editor: editorReducer,
});


export default reducers;