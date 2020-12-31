import React from 'react';
import {Card, Col, Tabs} from "antd";
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';
// @ts-ignore
import video from 'assets/background.mp4';


const Home: React.FC = (props) => {

    const {TabPane} = Tabs;
    return (<>
            <video playsInline autoPlay muted loop id="bgvid">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="center">
                <Col span={12}>
                    <h1 style={{justifySelf: "center"}}>Collab <b>IDE</b></h1>
                    <h2>In-Browser collaborative code editor.</h2>
                </Col>
                <Col className="center" span={12}>
                    <div
                        className="card">
                        <Tabs defaultActiveKey='create' size='large'>
                            <TabPane key='create' tab='Create Room'>
                                <CreateRoom/>
                            </TabPane>
                            <TabPane key='join' tab='Join Room'>
                                <JoinRoom/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </div>
        </>
    );
};

export default Home;