import * as Y from "yjs";
import CodeMirror from "codemirror";
import { WebsocketProvider } from "y-websocket";
import { CodemirrorBinding } from "y-codemirror";
import { editorValue } from "actions";
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


function CodeEditor(wss: string, room_id: string, username: string, color: string, dispatch: any, theme: string, mode: string) {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
        wss,
        room_id,
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
        lineWrapping: true
    });
    const binding = new CodemirrorBinding(yText, editor, provider.awareness);
    ydoc.on('update', (update: any) => dispatch(editorValue(ydoc.toJSON().codemirror.replace('↵', '\\n'))));
    binding.awareness.setLocalStateField('user', { color: color, name: username })
    provider.connect();
    return ({ provider, ydoc, yText, binding, Y });
}

export default CodeEditor;
