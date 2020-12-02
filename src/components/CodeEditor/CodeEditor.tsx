import * as Y from "yjs";
import CodeMirror from "codemirror";
import {WebsocketProvider} from "y-websocket";
import {CodemirrorBinding} from "y-codemirror";
import {editorValue} from "actions";
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/keymap/sublime';

import './editor.css';

import "codemirror/mode/clike/clike";
import "codemirror/mode/dart/dart";
import "codemirror/mode/go/go";
import "codemirror/mode/python/python";
import "codemirror/mode/r/r";
import "codemirror/mode/rust/rust";


const CodeEditor = (dispatch: any, id: string, username: string, theme: string, mode: string) => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
        "ws://127.0.0.1:9000",
        id,
        ydoc
    );
    const yText = ydoc.getText("codemirror");
    const editorContainer = document.getElementById("editor") as HTMLElement;
    const editor = CodeMirror(editorContainer, {
        theme: theme,
        mode: mode,
        lineNumbers: true,
        showHint: true,
        matchBrackets: true,
        scrollbarStyle: "overlay",
        keyMap: "sublime",
        lineWrapping: true,

    });
    const binding = new CodemirrorBinding(yText, editor, provider.awareness);
    ydoc.on('update', (update: any) => dispatch(editorValue(ydoc.toJSON().codemirror.replace('↵', '\\n'))));
    binding.awareness.setLocalStateField('user', {color: "#000", name: username})
    // provider.connect();
    if (id !== null) {
        provider.connect()
    } else {
        provider.disconnect()
    }
    return (
        {provider, ydoc, yText, binding, Y}
    );
}

export default CodeEditor;


// window.addEventListener('load', () => {
//     const ydoc = new Y.Doc()
//     const provider = new WebsocketProvider(
//       'test.server',
//      'test.room',
//       ydoc
//     )
//     const yText = ydoc.getText('codemirror')
//     const editorContainer = document.createElement('div')
//     editorContainer.setAttribute('id', 'editor')
//     document.body.insertBefore(editorContainer, null)

//     const editor = CodeMirror(editorContainer, {
//       mode: 'javascript',
//       lineNumbers: true
//     })

//     const binding = new CodemirrorBinding(yText, editor, provider.awareness)

//     const connectBtn = /** @type {HTMLElement} */ (document.getElementById('y-connect-btn')) as HTMLElement
//     connectBtn.addEventListener('click', () => {
//       if (provider.shouldConnect) {
//         provider.disconnect()
//         connectBtn.textContent = 'Connect'
//       } else {
//         provider.connect()
//         connectBtn.textContent = 'Disconnect'
//       }
//     })

//     // @ts-ignore
//     window.example = { provider, ydoc, yText, binding, Y }
//   })
