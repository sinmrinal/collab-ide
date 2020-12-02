import { Button, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import Axios from "axios";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomID, roomName, roomAdmin, roomCreated } from 'actions';
import { LoadingOutlined } from '@ant-design/icons';

const JoinRoom = () => {
    const [form] = Form.useForm();
    const [processExecuting, setProcessExecuting] = useState(false);
    // const [buttonStatus, setButtonStatus] = useState("primary");
    const dispatch = useDispatch()
    const history = useHistory()
    const onJoinRoom = async (e: any) => {
        setProcessExecuting(true)
        await Axios.post("http://127.0.0.1:8000/api/joinRoom/", { roomID: e.roomid, name: e.name })
            .then(function (response) {
                if (response.data.ID) {
                    dispatch(roomID(response.data.ID))
                    dispatch(roomName(response.data.name))
                    dispatch(roomAdmin(response.data.created_by))
                    dispatch(roomCreated(true))
                    setProcessExecuting(false)
                    history.push(`/room/${response.data.ID}`)
                }
                else {
                    setProcessExecuting(false)
                    notification.error({
                        message: "Incorrect Room ID!",
                        description: `Room ID: ${e.roomid} is incorrect.`,
                        duration: 3
                    })
                }
            })
            .catch(function (error) {
                setProcessExecuting(false)
                console.log(error);
            });
    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onJoinRoom}
        >
            <Form.Item
                required
                name='roomid'
                label="Enter Room ID"
                rules={[{ required: true, message: 'Room ID is required!' }]}
            >
                <Input size="large" />
            </Form.Item>
            <Form.Item
                required
                name='name'
                label="Enter Your Name"
                rules={[{ required: true, message: 'Your Name is required!' }]}
            >
                <Input size="large" />
            </Form.Item>
            <Form.Item>
                {processExecuting
                    ? (
                        <Button type="primary" disabled ><LoadingOutlined /> Loading...</Button>
                    ) :
                    (
                        <Button id="join-button" type="primary" htmlType='submit' size="middle">Join Room</Button>
                    )}
            </Form.Item>
        </Form>
    );
};

export default JoinRoom;



