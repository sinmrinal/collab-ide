import React, { useState } from "react";
import { Button, Dropdown, TextArea } from "carbon-components-react";
import Renew32 from "@carbon/icons-react/lib/renew/32";
import CodeEditor from "../../components/CodeEditor";

function Editor() {

    const editorLanguages = [
        {
            id: "c_pp",
            label: "C",
        }, {
            id: "c_pp",
            label: "C++",
        },
        {
            id: "dart",
            label: "Dart",
        },
        {
            id: "golang",
            label: "GoLang",
        },
        {
            id: "python",
            label: "Python",
        },
        {
            id: "rust",
            label: "Rust",
        },
        {
            id: "java",
            label: "Java",
        },
        {
            id: "javascript",
            label: "Javascript",
        },
        {
            id: "ruby",
            label: "Ruby",
        },
        {
            id: "typescript",
            label: "Typescript",
        },
    ];


    const [language, setLanguage] = useState("");
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    function handleChange(evt) {
        setLanguage(evt.selectedItem.id);
        setCode(evt.selectedItem.id);
    }
    return (
        <div className="bx--grid bx--grid--condensed landing-page">
            <div className="bx--row" style={{ height: window.screen.availHeight * 0.75 }}>
                <div className="bx--col-lg-2">
                    <div className="landing-page__p">
                        <Dropdown
                            ariaLabel="Dropdown"
                            id="language selector"
                            items={editorLanguages}
                            label="Select Language"
                            titleText="Select Language"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="landing-page__p">
                        <TextArea
                            id="input field"
                            invalidText="Invalid error message."
                            labelText="Input"
                            rows={7}
                            maxLength={7}
                            value={input}
                            onChange={(evt) => {setInput(evt.value)}}
                        />
                    </div>
                    <div className="landing-page__p">
                        <Button renderIcon={Renew32} style={{ width: '100%'}}>Run</Button>
                    </div>
                    <div className="landing-page__p">
                        <TextArea
                            id="output field"
                            invalidText="Invalid error message."
                            labelText="Output"
                            rows={7}
                            maxLength={7}
                            value={output}
                            onChange={(evt) => {setOutput(evt.value)}}
                        />
                    </div>
                </div>
                <div className="bx--col-lg-10">
                    <CodeEditor language={language} theme="monokai" code={code} />
                </div>
            </div>
        </div>
    )
};

export default Editor;