import React from 'react';
import { Button, Dropdown, TextArea } from "carbon-components-react";
import Renew32 from "@carbon/icons-react/lib/renew/32";


const RunIO = (props) => {

    const languageChoice = [
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
            label: "Golang",
        },
        {
            id: "python",
            label: "Python",
        },
        {
            id: "java",
            label: "Java",
        },
    ];

    return (
        <div>
            <div className="landing-page__p">
                <Dropdown
                    ariaLabel="Dropdown"
                    id="language selector"
                    items={languageChoice}
                    label="Select Language"
                    titleText="Select Language"
                    onChange={props.onDropdownChange}
                />
            </div>
            <div className="landing-page__p">
                <TextArea
                    id="input field"
                    invalidText="Invalid error message."
                    labelText="Input"
                    rows={7}
                    maxLength={7}
                value={props.inputValue}
                onChange={props.onInputChange}
                />
            </div>
            <div className="landing-page__p">
                <Button 
                    renderIcon={Renew32} 
                    style={{ width: '100%' }}
                    onClick={props.onRun}
                    >Run</Button>
            </div>
            <div className="landing-page__p">
                <TextArea
                    id="output field"
                    invalidText="Invalid error message."
                    labelText="Output"
                    rows={7}
                    maxLength={7}
                value={props.outputValue}
                onChange={props.onOutputChange}
                />
            </div>
        </div>
    );
};

export default RunIO;