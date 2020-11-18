import React from 'react';

import { Card, Input } from 'antd';
import {useDispatch } from "react-redux";
import {codeInput} from "actions";

const InputPanel = () => {

    const { TextArea } = Input;
    const dispatch = useDispatch();
    return (
        <div>
            <Card hoverable
                style={{ width: '100%' }}
                title='Input (stdin)'
            >
            <TextArea
                onChange={(e) => dispatch(codeInput(e.target.value))}
                rows={7}
            />
            </Card>
        </div>
    );
};

export default InputPanel;
