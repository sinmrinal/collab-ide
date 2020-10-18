import React, { Component } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";

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

class CodeEditor extends Component {
    onChange(newValue) {
        this.setState({
            value: newValue
        });
    }
    setTheme(e) {
        this.setState({
            theme: e.target.value
        });
    }
    setMode(e) {
        this.setState({
            mode: e.target.value
        });
    }
    setBoolean(name, value) {
        this.setState({
            [name]: value
        });
    }
    setFontSize(e) {
        this.setState({
            fontSize: parseInt(e.target.value, 10)
        });
    }
    constructor(props) {
        super(props);
        this.setTheme = this.setTheme.bind(this);
        this.setMode = this.setMode.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.setBoolean = this.setBoolean.bind(this);
    }
    render() {
        return (
            <AceEditor
                mode={this.props.mode}
                theme={this.props.theme}
                name="editor"
                onChange={this.props.onChange}
                value={this.props.value}
                fontSize={this.props.fontSize}
                showPrintMargin={this.props.showPrintMargin}
                showGutter={this.props.showGutter}
                highlightActiveLine={this.props.highlightActiveLine}
                height="100%"
                width="100%"
                setOptions={{
                    useWorker: false,
                    enableBasicAutocompletion: this.props.enableBasicAutocompletion,
                    enableLiveAutocompletion: this.props.enableLiveAutocompletion,
                    enableSnippets: this.props.enableSnippets,
                    showLineNumbers: this.props.showLineNumbers,
                    tabSize: this.props.tabSize
                }}
            />
        )
    }
}

export default CodeEditor;