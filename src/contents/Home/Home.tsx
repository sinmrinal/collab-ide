import React from 'react';
import { Col, Card, Tabs} from "antd";
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';


const Home: React.FC = () => {
    const { TabPane } = Tabs;
    return (
            <div className="center">
                <Col span={12}>
                    <h1 style={{justifySelf: "center"}}>Collab<b>IDE</b></h1>
                    <h3>Browser based online collabortive IDE.</h3>
                </Col>
                <Col className="center"  span={12}>
                <Card
                hoverable
                className="card">
                <Tabs defaultActiveKey='create' size='large'>
                    <TabPane key='create' tab='Create Room'>
                        <CreateRoom />
                    </TabPane>
                    <TabPane key='join' tab='Join Room'>
                        <JoinRoom />
                    </TabPane>
                </Tabs>
            </Card>
                </Col>
        </div>
    );
};

export default Home;