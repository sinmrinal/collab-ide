import React from 'react';

import { Divider, Input } from 'antd';
import {useDispatch } from "react-redux";
import {codeOutput} from "actions";

const OutputPanel = () => {

    const { TextArea } = Input;
    const dispatch = useDispatch();
    return (
        <>
            <Divider orientation='left' plain>
                {' '} Output (stdout) {' '}
            </Divider>
            <TextArea
                onChange={(e) => dispatch(codeOutput(e.target.value))}
                rows={7}
            />
        </>
    );
};

export default OutputPanel;
