import React, {useState} from 'react';

import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { codeOutput } from "actions";

const RunCode = () => {

    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch();

    const onClick = async (state: any) => {
        setProcessExecuting(true);
        const url = process.env.COMPILE_URL ?? '';
        const data = {'language': state.codeio.language, 'code': state.editor.value, 'input': state.codeio.input};
        const respsonse = await Axios.post(url, data);
        dispatch(codeOutput(respsonse.data.output))
        setProcessExecuting(false)
    }

    return (
        <>
          <Button 
          size='large' 
          type='primary' 
          icon={processExecuting ? <SyncOutlined spin/> : <SyncOutlined/>}
          onClick={() => {onClick(useSelector(state => state))}}>Run</Button>  
        </>
    );
};

export default RunCode;