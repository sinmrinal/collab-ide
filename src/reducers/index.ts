import {combineReducers} from "redux";

import codeioReducer from "./codeioReducer";
import editorReducer from "./editorReducer";
import roomReducer from "./roomReducer";

const reducers = combineReducers({
    codeio: codeioReducer,
    editor: editorReducer,
    room: roomReducer,
});


export default reducers;