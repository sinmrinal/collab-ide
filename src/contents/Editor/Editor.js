import React, { Component } from "react";
import { Button, Dropdown, TextArea } from "carbon-components-react";
import Renew32 from "@carbon/icons-react/lib/renew/32";
import Axios from "axios";
import AceEditor from "react-ace";


const languages = [
    "java",
    "python",
    "golang",
    "c_cpp",
    "dart",
];

const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal"
];

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));




class Editor extends Component {
    setTheme(e) {
        this.setState({
            theme: e.target.value
        });
    }
    setMode(evt) {
        this.setState({
            mode: evt.selectedItem.id
        });
        this.onChange(this.fetchBoilerPlate(evt.selectedItem.label));
    }
    onChange(newValue) {
        this.setState({
            value: newValue
        });
    }
    setInput(e) {
        this.setState({
            input: e.value
        });
    }
    setOutput(e) {
        this.setState({
            output: e.value
        });
    }
    async fetchBoilerPlate(language) {
        const respsonse = await Axios.post("http://127.0.0.1:8000/api/boilerPlate/", { 'language': "Java" });
        console.log(respsonse.data.boilerPlate)
        return respsonse.data.boilerPlate
    }




    constructor(props) {
        super(props);
        this.state = {
            value: "// type your code here",
            theme: "monokai",
            mode: "",
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            fontSize: 16,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true,
            input: "",
            output: "",
        };
        this.setTheme = this.setTheme.bind(this);
        this.setMode = this.setMode.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    editorLanguages = [
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

    render() {
        return (
            <div className="bx--grid bx--grid--condensed landing-page" >
                <div className="bx--row" style={{ height: window.screen.availHeight * 0.75 }}>
                    <div className="bx--col-lg-2">
                        <div className="landing-page__p">
                            <Dropdown
                                ariaLabel="Dropdown"
                                id="language selector"
                                items={this.editorLanguages}
                                label="Select Language"
                                titleText="Select Language"
                                onChange={this.setMode}
                            />
                        </div>
                        <div className="landing-page__p">
                            <TextArea
                                id="input field"
                                invalidText="Invalid error message."
                                labelText="Input"
                                rows={7}
                                maxLength={7}
                                value={this.state.input}
                                onChange={this.setInput}
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
                                value={this.state.output}
                                onChange={this.setOutput}
                            />
                        </div>
                    </div>
                    <div className="bx--col-lg-10">
                        <AceEditor
                            mode={this.state.mode}
                            theme={this.state.theme}
                            name="editor"
                            onChange={this.onChange}
                            value={this.state.value}
                            fontSize={this.state.fontSize}
                            showPrintMargin={this.state.showPrintMargin}
                            showGutter={this.state.showGutter}
                            highlightActiveLine={this.state.highlightActiveLine}
                            height='100%'
                            width="100%"
                            setOptions={{
                                useWorker: false,
                                enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                                enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                                enableSnippets: this.state.enableSnippets,
                                showLineNumbers: this.state.showLineNumbers,
                                tabSize: 4
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Editor;
