import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import store from '../../store'
import CodeEditor from "../../components/CodeEditor";
import RunIO from "../../components/RunIO";
import {
    codeInput,
    codeOutput,
    codeLanguage,
    editorMode,
    editorValue
} from "../../actions/action.types";


const Editor = () => {
    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch();
    const onDropdownChange = async (e) => {
        const languageID = e.selectedItem.id
        const languageLabel = e.selectedItem.label
        dispatch(editorMode(languageID))
        dispatch(codeLanguage(languageLabel))
        const respsonse = await Axios.post("http://127.0.0.1:8000/api/boilerPlate/", { "language": languageLabel });
        dispatch(editorValue(respsonse.data.boilerPlate))
    }
    const onRun = async () => {
        const state = store.getState();
        setProcessExecuting(true);
        const data = {'language': state.codeio.language, 'code': state.editor.value, 'input': state.codeio.input};
        const respsonse = await Axios.post("http://127.0.0.1:8000/api/compile/", data);
        dispatch(codeOutput(respsonse.data.output))
        setProcessExecuting(false)
    }
    return (
        <div className="bx--grid bx--grid--condensed landing-page" >
            <div className="bx--row" style={{ height: '100vh' }}>
                <div className="bx--col-lg-2">
                    <RunIO
                        inputValue={useSelector(state => state.codeio.input)}
                        outputValue={useSelector(state => state.codeio.output)}
                        onDropdownChange={onDropdownChange}
                        onInputChange={(e) => dispatch(codeInput(e.target.value))}
                        onOutputChange={(e) => dispatch(codeOutput(e.target.value))}
                        processExecuting={processExecuting}
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
