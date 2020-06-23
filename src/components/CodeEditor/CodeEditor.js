import React, { Component } from "react";
import { render } from "react-dom";
/*eslint-disable no-alert, no-console */

const defaultValue = `function onLoad(editor) {
  console.log("i've loaded");
}`;

class CodeEditor extends Component {
    onLoad() {
        console.log("i've loaded");
    }
    onChange(newValue) {
        console.log("change", newValue);
        this.setState({
            value: newValue
        });
    }

    onSelectionChange(newValue, event) {
        console.log("select-change", newValue);
        console.log("select-change-event", event);
    }

    onCursorChange(newValue, event) {
        console.log("cursor-change", newValue);
        console.log("cursor-change-event", event);
    }

    onValidate(annotations) {
        console.log("onValidate", annotations);
    }

    setPlaceholder(e) {
        this.setState({
            placeholder: e.target.value
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
    
    render() {
        return (
            <AceEditor
                placeholder={this.state.placeholder}
                mode={this.state.mode}
                theme={this.state.theme}
                name="blah2"
                onLoad={this.onLoad}
                onChange={this.onChange}
                onSelectionChange={this.onSelectionChange}
                onCursorChange={this.onCursorChange}
                onValidate={this.onValidate}
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
                    tabSize: 2
                }}
            />
        )
    };
};


export default CodeEditor;