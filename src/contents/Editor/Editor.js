import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import CodeEditor from "../../components/CodeEditor";
import RunIO from "../../components/RunIO";
import {
    codeInput,
    codeOutput,
    // editorFontSize,
    editorLanguage,
    // editorTheme,
    editorValue
} from "../../actions/action.types";



const Editor = () => {
    const dispatch = useDispatch();
    const onDropdownChange = async (e) => {
        const language = e.selectedItem.label
        dispatch(editorLanguage(language))
        const respsonse = await Axios.post("http://127.0.0.1:8000/api/boilerPlate/", { "language": language });
        dispatch(editorValue(respsonse.data.boilerPlate))
        }
    const onRun = () => {
    }
    return (
        <div className="bx--grid bx--grid--condensed landing-page" >
            <div className="bx--row" style={{ height: '100vh' }}>
                <div className="bx--col-lg-2">
                    <RunIO
                        inputValue={useSelector(state => state.codeio.input)}
                        outputValue={useSelector(state => state.codeio.output)}
                        onDropdownChange={onDropdownChange}
                        onInputChange={(e) => dispatch(codeInput(e.value))}
                        onOutputChange={(e) => dispatch(codeOutput(e.value))}
                        onRun={onRun}
                    />
                </div>
                <div className="bx--col-lg-10">
                    <CodeEditor
                        mode={useSelector(state => state.editor.mode)}
                        theme={useSelector(state => state.editor.theme)}
                        onChange={(nv) => dispatch(editorValue(nv))}
                        value={useSelector(state => state.editor.value)}
                        fontSize={useSelector(state => state.editor.fontSize)}
                        showPrintMargin={useSelector(state => state.editor.showPrintMargin)}
                        showGutter={useSelector(state => state.editor.showGutter)}
                        highlightActiveLine={useSelector(state => state.editor.highlightActiveLine)}
                        enableBasicAutocompletion={useSelector(state => state.editor.enableBasicAutocompletion)}
                        enableLiveAutocompletion={useSelector(state => state.editor.enableLiveAutocompletion)}
                        enableSnippets={useSelector(state => state.editor.enableSnippets)}
                        showLineNumbers={useSelector(state => state.editor.showLineNumbers)}
                        tabSize={useSelector(state => state.editor.tabSize)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Editor;
