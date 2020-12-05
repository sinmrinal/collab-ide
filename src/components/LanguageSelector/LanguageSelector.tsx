import React from 'react';

import {Card, Select} from "antd";
import {useDispatch} from "react-redux";
import {codeLanguage, editorMode} from "actions";
import modes from "assets/ts/editor/modes"

const LanguageSelector: React.FC = () => {
    const {Option} = Select;
    const dispatch = useDispatch();
    const onChange = (value: string) => {
        const info = value.split('$')
        dispatch(editorMode(info[1]))
        dispatch(codeLanguage(info[0]))
    };
    return (
        <div style={{margin: "8px 12px 8px 8px"}}>
            <Card
                hoverable
                style={{width: '100%'}}
                title="Select Language"
            >
                <Select
                    showSearch
                    size='large'
                    placeholder="Select language"
                    // listHeight={5}
                    onChange={onChange}
                    style={{width: '100%'}}
                >
                    {modes.map((mode) => (
                        <Option value={mode.language + '$' + mode.mode}>
                            {mode.language}
                        </Option>
                    ))}
                </Select>
            </Card>
        </div>
    );
};

export default LanguageSelector;