import React, { useState } from 'react';
import { Button, Input, Form, Card, Space } from "antd";
// import { RootStateOrAny, useSelector } from 'react-redux';

const RoomAssociator: React.FC = () => {



    const [tabState, setTabState] = useState({
        key: '0'
    });

    const onTabChange = (key: string, type: string) => {
        setTabState({ key });
    };


    const tabList = [
        {
            key: '0',
            tab: 'Create Room',
        },
        {
            key: '1',
            tab: 'Join Room',
        },
    ];
    const contentList = {
        "0": <Space direction="vertical">
            
        </Space>,
        "1": <Space direction="vertical">
            
        </Space>,
    };




    return (
        <Card
            hoverable
            // title="Create Room"
            tabList={tabList}
            activeTabKey={tabState.key}
            onTabChange={key => { onTabChange(key, 'key'); }}
            style={{width: "500px", alignSelf: ""}}
        >
            {contentList[tabState.key]}

        </Card>
    );
};

export default RoomAssociator;