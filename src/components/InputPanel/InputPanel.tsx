import React from 'react';

import { Divider, Input } from 'antd';
import {useDispatch } from "react-redux";
import {codeInput} from "actions";

const InputPanel = () => {

    const { TextArea } = Input;
    const dispatch = useDispatch();
    return (
        <>
            <Divider orientation='left' plain>
                {' '} Input (stdin) {' '}
            </Divider>
            <TextArea
                onChange={(e) => dispatch(codeInput(e.target.value))}
                rows={7}
            />
        </>
    );
};

export default InputPanel;
