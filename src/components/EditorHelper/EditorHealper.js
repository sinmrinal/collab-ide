import React from "react";
import { Button, Dropdown, TextArea } from "carbon-components-react";
import Renew32 from "@carbon/icons-react/lib/renew/32";

function EditorHelper(props) {
    const languages = [
        {
            id: "c_pp",
            label: "C/C++",
        },
        // {
        //     id: "dart",
        //     label: "Dart",
        // },
        // {
        //     id: "golang",
        //     label: "GoLang",
        // },
        {
            id: "python",
            label: "Python",
        },
        // {
        //     id: "rust",
        //     label: "Rust",
        // },
        {
            id: "java",
            label: "Java",
        },
        // {
        //     id: "javascript",
        //     label: "Javascript",
        // },
        // {
        //     id: "ruby",
        //     label: "Ruby",
        // },
        // {
        //     id: "typescript",
        //     label: "Typescript",
        // },
    ];
    return (
        <>
            <div style={{ height: '30%' }}>
                <div style={{ height: '50%' }}>
                    <Dropdown
                        ariaLabel="Dropdown"
                        id="language selector"
                        items={languages}
                        label="Select Language"
                        titleText="Select Language"
                        onChange={() => {}}
                    />
                </div>
                <div style={{ height: '50%' }}>
                    <Button renderIcon={Renew32} style={{ width: '100%', paddingTop: '10px' }}>Run</Button>
                </div>
            </div>
            <div style={{ height: '35%' }}>
                <TextArea
                    id="input field"
                    invalidText="Invalid error message."
                    labelText="Input"
                    rows={7}
                    onChange={props.onInputChange}
                    maxLength={7}
                />
            </div>
            <div style={{ height: '35%' }}>
                <TextArea
                    id="output field"
                    invalidText="Invalid error message."
                    labelText="Output"
                    rows={8}
                    onChange={props.output}
                />
            </div>
        </>
    )
}

export default EditorHelper;