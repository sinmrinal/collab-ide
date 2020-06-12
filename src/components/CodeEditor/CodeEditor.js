import React from "react";
import AceEditor from "react-ace";

// function onChange(props) {
//     useEffect()
// }

function CodeEditor(props) {

    const languages = [
        "c_cpp",
        "dart",
        "golang",
        "python",
        "rust",
        "javascript",
        "java",
        "ruby",
        "typescript"
    ];

    const themes = [
        "ambiance",
        "clouds",
        "clouds_midnight",
        "dracula",
        "github",
        "monokai",
        "nord_dark",
        "solarized_dark",
        "solarized_light",
        "terminal",
        "tomorrow",
        "tomorrow_night_blue",
        "twilight",
        "vibrant_ink"
    ];

    languages.forEach(lang => {
        require(`ace-builds/src-noconflict/mode-${lang}`);
        require(`ace-builds/src-noconflict/snippets/${lang}`);
    });
    themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));

    return (
        <AceEditor
            value={props.code}
            defaultValue="//type your here"
            mode={props.language}
            theme={props.theme}
            onChange={props.onChange}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            fontSize={16}
            height='100vh'
            width="100%"
        />
    )
}


export default CodeEditor;