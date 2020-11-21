import React, { useState } from 'react';

import { Input, Card } from 'antd';
import { useSelector, RootStateOrAny } from "react-redux";

const OutputPanel = () => {

    const { TextArea } = Input;
    const [tabState, setTabState] = useState({
        key: '0'
    });

    const onTabChange = (key: string, type: string) => {
        setTabState({ key });
    };


    const tabList = [
        {
            key: '0',
            tab: 'stdout',
        },
        {
            key: '1',
            tab: 'stderr',
        },
    ];

    const contentList = {
        "0":<TextArea
                    rows={7}
                    value={useSelector((state: RootStateOrAny) => state.codeio.stdout)}
                />,
        "1":<TextArea
                rows={7}
                value={useSelector((state: RootStateOrAny) => state.codeio.stderr)}
            />,
    };
    return (
        <div style={{margin: "8px 12px 8px 8px"}}>
            <Card
                hoverable
                style={{ width: '100%' }}
                title="Output"
                tabList={tabList}
                activeTabKey={tabState.key}
                onTabChange={key => { onTabChange(key, 'key'); }}
            >
                {contentList[tabState.key]}
            </Card>
        </div>
    );
};

export default OutputPanel;
