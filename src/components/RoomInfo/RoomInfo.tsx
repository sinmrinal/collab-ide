import React, { useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { roomAdmin, roomCreated, roomID, roomName } from "actions";
import { Button, Card, List, Typography, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const RoomInfo: React.FC = (props) => {

    const { Paragraph, Text } = Typography;
    const dispatch = useDispatch();
    const history = useHistory()

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
                <Text>Created by: {useSelector((state: RootStateOrAny) => state.room.created_by)}</Text>
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

    const onLeaveRoom = (props: any) => {
        dispatch(roomName(""))
        dispatch(roomID(""))
        dispatch(roomAdmin(""))
        dispatch(roomCreated(false))
        history.push('/')
    }

    return (
        <div style={{margin: "8px 12px 8px 8px"}}>
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