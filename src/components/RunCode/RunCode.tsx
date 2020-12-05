import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import Axios from "axios";
import {SyncOutlined} from "@ant-design/icons";
import {Button} from "antd";
import store from '../../store'

import {codeOutput} from "actions";

const RunCode = () => {
    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch();

    const onClick = async () => {
        setProcessExecuting(true);
        const state = store.getState();
        const url = 'http://127.0.0.1:8000/api/compile/';
        const data = {'language': state.codeio.language, 'code': state.editor.value, 'input': state.codeio.input};
        Axios.post(url, data)
            .then(function (response) {
                dispatch(codeOutput(response.data.output))
            })
            .catch(function (error) {
                if (error.response) {
                    dispatch(codeOutput("Internal Server Error."))
                }
            })
        setProcessExecuting(false)
    }

    return (
        <div style={{margin: "8px 12px 8px 8px"}}>
            <Button

                style={{width: '100%'}}
                size='large'
                type='primary'
                icon={processExecuting ? <SyncOutlined spin/> : <SyncOutlined/>}
                onClick={() => {
                    onClick()
                }}>Execute</Button>
        </div>
    );
};

export default RunCode;