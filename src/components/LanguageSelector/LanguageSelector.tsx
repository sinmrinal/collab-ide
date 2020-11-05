import React from 'react';

import { Divider, Select } from "antd";

const LanguageSelector: React.FC = () => {
    const {Option} = Select;
    const onChange = () => {};
    return (
        <>
            <Divider orientation='left' plain>
                {' '} Select language {' '}
            </Divider>
            <Select
            showSearch
            size='large'
            placeholder="Select language"
            // listHeight={5}
            onChange={onChange}
            >

            </Select>
        </>
    );
};

export default LanguageSelector;