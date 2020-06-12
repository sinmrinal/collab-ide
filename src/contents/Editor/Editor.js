import React, { useState } from "react";
import EditorHelper from "../../components/EditorHelper";
import CodeEditor from "../../components/CodeEditor";

function Editor() {
    // const [code, setCode] = useState("tttt")
    return (
        <div class="bx--grid" style={{paddingLeft: "0px"}}>
            <div class="bx--row" style={{height: window.screen.availHeight}}>
                <div class="bx--col-lg-2">
                    <EditorHelper/>
                </div>
                <div class="bx--col-lg-10">
                    <CodeEditor language="python" theme="terminal"/>
                </div>
            </div>
        </div>
    )
};

export default Editor;