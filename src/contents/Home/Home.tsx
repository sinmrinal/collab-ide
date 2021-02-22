import React from 'react';
import {Card, Col, notification, Tabs} from "antd";
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';
// @ts-ignore
import video from 'assets/background.mp4';


const Home: React.FC = (props) => {

    fetch(process.env.REACT_APP_SERVER_CHECK || 'localhost:8000/api/check',
        ).catch(function () {
            notification.error({
                message: "OOPS! :(",
                description: "Seems like Servers are not responding currectly at the moment. Try again later.",
                duration: 5
            })
        }
        )

    const {TabPane} = Tabs;
    return (<>
            <video playsInline autoPlay muted loop id="bgvid">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="center">
                <Col span={12}>
                    <h1 style={{justifySelf: "center"}}>Collab <b>IDE</b><sup>beta</sup></h1>
                    <h2>In-Browser collaborative code editor.</h2>
                </Col>
                <Col className="center" span={12}>
                    <Card
                        className="card">
                        <Tabs defaultActiveKey='create' size='large'>
                            <TabPane key='create' tab='Create Room'>
                                <CreateRoom/>
                            </TabPane>
                            <TabPane key='join' tab='Join Room'>
                                <JoinRoom/>
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </div>
        </>
    );
};

export default Home;