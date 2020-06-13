import React, { useState, useEffect } from "react";
import { Button, Dropdown, TextArea } from "carbon-components-react";
import Renew32 from "@carbon/icons-react/lib/renew/32";
import CodeEditor from "../../components/CodeEditor";
import Axios from "axios";



const Editor = () => {

    const [boilerPlate, setBoilerPlate] = useState({})

    const fetchDetails = async () => {
        const respsonse = await Axios.get("http://127.0.0.1:8000/api/boilerplate/");
        const data = {};
        for (var i = 0; i < respsonse.data.length; i++) {
            data[respsonse.data[i].key] = respsonse.data[i].value;
        }
        setBoilerPlate(data)
    }

    useEffect(() => {
        fetchDetails();
    }, [])

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
    ];


    const [language, setLanguage] = useState("");
    const [code, setCode] = useState('');
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const handleChange = evt => {
        setLanguage(evt.selectedItem.id);
        const lang = evt.selectedItem.label;

        switch (lang) {
            case "C":
                setCode(boilerPlate["C"])
                break
            case "C++":
                setCode(boilerPlate["C++"])
                break
            case "Python":
                setCode(boilerPlate["Python"])
                break
            case "Java":
                setCode(boilerPlate["Java"])
                break
            case "Rust":
                setCode(boilerPlate["Rust"])
                break
            case "Dart":
                setCode(boilerPlate["Dart"])
                break
            case "Golang":
                setCode(boilerPlate["Golang"])
                break
            default:
                setCode("")
        }
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
                            onChange={(evt) => { setInput(evt.value) }}
                        />
                    </div>
                    <div className="landing-page__p">
                        <Button renderIcon={Renew32} style={{ width: '100%' }}>Run</Button>
                    </div>
                    <div className="landing-page__p">
                        <TextArea
                            id="output field"
                            invalidText="Invalid error message."
                            labelText="Output"
                            rows={7}
                            maxLength={7}
                            value={output}
                            onChange={(evt) => { setOutput(evt.value) }}
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