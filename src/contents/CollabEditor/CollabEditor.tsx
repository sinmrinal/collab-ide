import React from 'react';
import { Button, Col, Row, Space } from "antd";
import InputPanel from 'components/InputPanel';
import RunCode from 'components/RunCode';
import OutputPanel from 'components/OutputPanel';
import LanguageSelector from 'components/LanguageSelector';
import RoomInfo from 'components/RoomInfo';
import { Redirect, useParams } from 'react-router-dom';
import CodeEditor from 'components/CodeEditor';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';


const CollabEditor: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const username = useSelector((state: RootStateOrAny) => state.room.username)
    const theme = useSelector((state: RootStateOrAny) => state.editor.theme)
    const mode = useSelector((state: RootStateOrAny) => state.editor.mode)
    const loadEditor = () => {
        //@ts-ignore
        document.getElementById('loader-button').parentNode.removeChild(document.getElementById('loader-button'))
        const wss = process.env.WSS ?? "wss://demos.yjs.dev/"
        CodeEditor(wss, id, "username", "#000", dispatch, theme, mode)
    }

    // if (!useSelector((state: RootStateOrAny) => state.room.isvalid)) {
    //     return (
    //         <Redirect to="/" />
    //     )
    // }
    // else {
        return (
            <div style={{ margin: '16px' }}>
                <Row>
                    <Col span={5}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <LanguageSelector />
                            <InputPanel />
                            <RunCode />
                            <OutputPanel />
                            <RoomInfo />
                        </Space>
                    </Col>
                    <Col span={19}>
                        <div style={{ margin: '16px', height: "100%", width: "100%"}}>
                            <Button id='loader-button' size='large' type='primary' onClick={loadEditor}>Load Editor</Button>
                            <div id='editor' style={{height: "100%", width: "100%"}}></div>
                            </div>
                    </Col>
                </Row>
            </div>
        );
        // }
    };

    export default CollabEditor;