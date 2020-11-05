// import React from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
// import CodeMirror from "@uiw/react-codemirror";
// import 'codemirror/addon/display/autorefresh';
// import 'codemirror/addon/comment/comment';
// import 'codemirror/addon/edit/matchbrackets';
// import 'codemirror/addon/hint/show-hint';

import 'assets/css/editor.css';

// import { editorValue } from "actions";

// const CodeEditor: React.FC = () => {


//     const onChange = (e: any) => {
//         console.log(e);
//         dispatch(editorValue(e.target.value))
//     }

//     return (
//         <div>
//             <CodeMirror
//                 value={useSelector((state: RootStateOrAny) => state.editor.value)}
//                 onChange={onChange}
//                 options={{
//                     theme: useSelector((state: RootStateOrAny) => state.editor.theme),
//                     mode: useSelector((state: RootStateOrAny) => state.editor.mode),
//                     lineNumbers: true,
//                     matchBrackets: true,
//                     showHint: true
//                 }}
//             />
//         </div>
//     );
// };

// export default CodeEditor;



import * as Y from "yjs";
import CodeMirror from "codemirror";
import { WebsocketProvider } from "y-websocket";
import { CodemirrorBinding } from "y-codemirror";
export default function CodeEditor (props: any) {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
        props.wss,
        props.room_id,
        ydoc
    );
    const yText = ydoc.getText("codemirror");

    const editorContainer = document.createElement("div");
    editorContainer.setAttribute("id", "editor");
    document.body.insertBefore(editorContainer, null);

    const editor = CodeMirror(editorContainer, { 
        theme: useSelector((state: RootStateOrAny) => state.editor.theme),
        mode: useSelector((state: RootStateOrAny) => state.editor.mode),
        lineNumbers: true,
    });
    const binding = new CodemirrorBinding(yText, editor, provider.awareness);
    // @ts-ignore
    window.example = { provider, ydoc, yText, binding, Y };
}