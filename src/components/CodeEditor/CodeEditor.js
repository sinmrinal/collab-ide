import React, { Component } from 'react';
import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver';
import "ace-builds/src-noconflict/ext-language_tools"


const languages = [
    "java",
    "python",
    "golang",
    "c_cpp",
    "dart",
];


const themes = [
    "ambiance",
    "chaos",
    "chrome",
    "clouds",
    "clouds_midnight",
    "cobalt",
    "crimson_editor",
    "dawn",
    "dracula",
    "dreamweaver",
    "eclipse",
    "github",
    "gob",
    "gruvbox",
    "idle_fingers",
    "iplastic",
    "katzenmilch",
    "kr_theme",
    "kuroir",
    "merbivore",
    "mono_industrial",
    "monokai",
    "nord_dark",
    "pastel_on_dark",
    "solarized_dark",
    "solarized_light",
    "sqlserver",
    "terminal",
    "textmate",
    "tomorrow",
    "tomorrow_night",
    "tomorrow_night_blue",
    "tomorrow_night_bright",
    "tomorrow_night_eighties",
    "twilight",
    "vibrant_ink",
    "xcode"
];

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));

class CodeEditor extends Component {
    
    constructor(props) {
        super(props);
        
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