import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from "react-redux";
import { Button, Card, List, Typography, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';

const RoomInfo: React.FC = () => {

    const { Paragraph, Text } = Typography;

    const [tabState, setTabState] = useState({
        key: '0'
    });

    const onTabChange = (key: string, type: string) => {
        setTabState({ key });
    };


    const tabList = [
        {
            key: '0',
            tab: 'Room Info',
        },
        {
            key: '1',
            tab: 'Active Users',
        },
    ];

    const contentList = {
        "0": <Space direction="vertical">
                <Text>Created by: {useSelector((state: RootStateOrAny) => state.room.admin)}</Text>
                <Text> Room Key: 
                    <Paragraph copyable>{useSelector((state: RootStateOrAny) => state.room.id)}</Paragraph>
                </Text>
                <Text type="secondary">Copy and share this key with friend to join.</Text>
            </Space>,
        "1": <Space direction="vertical">
                <List
                    dataSource={useSelector((state: RootStateOrAny) => state.room.activeUsers)}
                    renderItem={item => (
                        <List.Item>
                            <UserOutlined /> {item}
                        </List.Item>
                    )} />
            </Space>,
    };

    const onLeaveRoom = () => {}

    return (
        <div>
            <Card
                hoverable
                style={{ width: '100%' }}
                title={'Room Name: ' + useSelector((state: RootStateOrAny) => state.room.name)}
                extra={<Button danger onClick={onLeaveRoom}>Leave</Button>}
                tabList={tabList}
                activeTabKey={tabState.key}
                onTabChange={key => { onTabChange(key, 'key'); }}
            >
                {contentList[tabState.key]}
            </Card>
        </div >
    );
};

export default RoomInfo;