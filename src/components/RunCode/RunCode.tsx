import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { SyncOutlined } from "@ant-design/icons";
import { Button } from "antd";
import store from '../../store'

import { codeOutput } from "actions";

interface Data {
    output: string
}

const RunCode = () => {
    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch();

    const onClick = async () => {
        setProcessExecuting(true);
        const state = store.getState();
        const payload = { 'language': state.codeio.language, 'code': state.editor.value, 'input': state.codeio.input };
        const response: any = await fetch(process.env.REACT_APP_COMPILE_CODE_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            dispatch(codeOutput("Internal Server Error."))
            setProcessExecuting(false)
        } else {
            const data: Data = await response.json()
            dispatch(codeOutput(data.output))
            setProcessExecuting(false)
        }
    }
    return (
        <div style={{ margin: "8px 12px 8px 8px" }}>
            <Button

                style={{ width: '100%' }}
                size='large'
                type='primary'
                icon={processExecuting ? <SyncOutlined spin /> : <SyncOutlined />}
                onClick={() => {
                    onClick()
                }}>Execute</Button>
        </div>
    );
};

export default RunCode;